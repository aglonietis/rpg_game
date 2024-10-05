import * as THREE from 'three';
import {PointerLockControls} from "three/addons/controls/PointerLockControls";
import {HomeEnvironment} from "./environments/home.js";
import {Character} from "./character.js";


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

        this.htmlElement.addEventListener('click', () => {
            this.controls.lock()
        })
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
    }

    focus() {
        this.controls.lock()
    }
}
