import * as THREE from 'three';
import {PointerLockControls} from "three/addons/controls/PointerLockControls";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import {HomeEnvironment} from "./environments/home.js";
import {Character} from "./character.js";

const fontLoader = new FontLoader();
let geometryFont = null

fontLoader.load( '@/assets/fonts/helvetiker_bold.typeface.json', function ( font ) {
    geometryFont = font
    console.log("Font loaded")
} );

export class Game {
    width = null
    height = null
    htmlElement = null
    renderer = null
    clock = null
    camera = null
    scene = null
    constructor() {
        console.debug("game creating")
        this.clock = new THREE.Clock()
        this.renderer = new THREE.WebGLRenderer()
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0x87CEEB);
        console.debug("game created")
    }

    init(htmlElement, width, height) {
        console.debug("game initializing")
        // initial actions
        this.width = width
        this.height = height
        this.htmlElement = htmlElement
        this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 )
        this.renderer.setSize(this.width, this.height)
        this.htmlElement.appendChild(this.renderer.domElement);
        this.renderer.setAnimationLoop(this.animate.bind(this))
        // controls
        this.controls = new PointerLockControls( this.camera, this.htmlElement );
        // environment
        this.environment = new HomeEnvironment(this.scene)
        this.environment.build()
        // character
        this.character = new Character(this.htmlElement, this.camera, this.scene, this.clock, this.renderer, this.controls, 1.8)
        this.character.initPosition()
        console.debug("game initialized")
    }

    animate() {
        if (this.controls.isLocked === true) {
            this.character.updatePosition()
        }

        this.renderer.render(this.scene, this.camera)
    }

    isReady() {
        return this.renderer !== null
    }

    processTextInput(text) {
        if(!this.controls.isLocked) {
            console.log("Ignoring text input, user is not in the game")
            return
        }
        console.log("Processing Text:", text)
        const geometry = new TextGeometry(text, {
            // font: geometryFont,
            size: 200,
            height: 50,
            curveSegments: 12,

            bevelThickness: 2,
            bevelSize: 5,
            bevelEnabled: true
        })
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const textObj = new THREE.Mesh( geometry, material );
        textObj.position.set(25,25,25)
        this.scene.add(textObj)
        console.log("Text processed:", text)
    }

    focus() {
        this.controls.lock()
    }
}
