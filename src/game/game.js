import * as THREE from 'three';
import {PointerLockControls} from "three/addons/controls/PointerLockControls";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import {HomeEnvironment} from "./environments/home.js";
import {Character} from "./character.js";
import {Line2, LineGeometry, LineMaterial} from "three/addons";

const fontLoader = new FontLoader();
let geometryFont = null

fontLoader.load( 'https://unpkg.com/three@0.77.0/examples/fonts/helvetiker_bold.typeface.json', function ( font ) {
    geometryFont = font
    console.log("Font loaded")
} );

let textHeightCounter = 0;

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

    init(htmlElement) {
        const canvasArea = htmlElement.getBoundingClientRect()
        console.debug("game initializing")
        // initial actions
        this.width = canvasArea.width
        this.height = canvasArea.height
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

        window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
    }

    onWindowResize(){
        const canvasArea = this.htmlElement.getBoundingClientRect()
        this.width = canvasArea.width
        this.height = canvasArea.height

        this.camera.aspect = this.width/this.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize( this.width, this.height );

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
        text = text.trim().toLowerCase().replaceAll(":"," ")
        if(!this.controls.isLocked) {
            console.log("Ignoring text input, user is not in the game")
            return
        }
        console.log("Processing Text:", text)

        const params = text.split(" ")

        if(params.length === 0) {
            console.log("empty text input")
            return
        }

        console.log(
            "Data",
            params[0],
            params[0] === 'create',
            params[1],
            this.isColor(params[1]),
            params[2],
            this.isSupportedType(params[2]),
            params[3],
            params[3] === 'at',
            params[4],
            !isNaN(Number(params[4])),
        )

        if(
            params[0] === 'create'
            && this.isColor(params[1])
            && this.isSupportedType(params[2])
            && params[3] === 'at'
            && !isNaN(Number(params[4]))
        ) {
            this.createObject(
                params[1],
                params[2],
                params[4],
                params[5] ?? params[4],
                params[6] ?? params[5] ?? params[4]
            )
            console.log("Object created")
            return;
        }

        const geometry = new TextGeometry(text, {
            font: geometryFont,
            size: 1,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 0.01,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 5
        })
        const material = new THREE.MeshBasicMaterial( { color: 0x1869aa } );
        const textObj = new THREE.Mesh( geometry, material );
        textObj.position.set(42 + textHeightCounter,2,2)
        textObj.rotation.z = Math.PI;
        textObj.rotation.y = Math.PI/2;
        textObj.rotation.x = Math.PI;
        this.scene.add(textObj)
        console.log("Text processed:", text)
        textHeightCounter++;

        const strokeGroup = new THREE.Group()
        strokeGroup.position.copy(textObj.position.clone())
        strokeGroup.position.x +=0.1001
        strokeGroup.rotation.copy(textObj.rotation.clone())
        const lineMaterial = new LineMaterial(({
            color: 0x000000,
            lineWidth: 0.1
        }))

        const shapes = geometryFont.generateShapes(text, 1)
        shapes.forEach((s) => {
            let points = s.getPoints()
            let points3d = []
            points.forEach((p) => {
                points3d.push(p.x, p.y, 0)
            })
            const lineGeo = new LineGeometry()
            lineGeo.setPositions(points3d)
            const strokeMesh = new Line2(lineGeo, lineMaterial)
            strokeMesh.computeLineDistances()
            strokeGroup.add(strokeMesh)
        })

        this.scene.add(strokeGroup)

        console.log("Generated text as fallback action")
    }

    createObject(color, type, x, y, z) {
        if (type === 'cube') {
            this.environment.addCube(x,y,z, 5,color)
        }
    }

    focus() {
        this.controls.lock()
    }

    isColor(param) {
        return ["red", "green", "blue", "white", "black"].includes(param);
    }

    isSupportedType(param) {
        return ["cube"].includes(param);
    }
}
