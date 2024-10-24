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
    lastEntity = null
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

        if(
            params[0] === 'create'
            && this.isColor(params[2])
            && this.isSupportedType(params[3])
            && params[4] === 'at'
            && !isNaN(Number(params[5]))
        ) {
            this.createObject(
                params[2],
                params[3],
                Number(params[5]),
                Number(params[7] ?? params[5]),
                Number(params[9] ?? params[7] ?? params[5])
            )
            console.log("Object created")
            return;
        }

        console.log(
            params[0] === 'move',
            params[1] === 'the',
            params[2] === 'object',
            this.isAnAxisDirection(params[3]),
            params[4] === 'by',
            this.isNumber(params[5])
        )

        if(
            params[0] === 'move' &&
            params[1] === 'the' &&
            params[2] === 'object' &&
            this.isAnAxisDirection(params[3]) &&
            params[4] === 'by' &&
            this.isNumber(params[5])
        ) {
            console.log("Moving the object if exists")
            if(this.lastEntity !== null) {
                let axisToChange = params[3]
                let changeValueOnAxis = this.parseNumber(params[5])
                if(["down","right","backward"].includes(axisToChange)) {
                    changeValueOnAxis = changeValueOnAxis * -1
                }

                console.log("New coordinates:", this.lastEntity.object.position.x,
                this.lastEntity.object.position.y + changeValueOnAxis,
                    this.lastEntity.object.position.z)

                this.lastEntity.object.position.set(
                    this.lastEntity.object.position.x + changeValueOnAxis * ["left","right"].includes(axisToChange),
                    this.lastEntity.object.position.y + changeValueOnAxis * ["up","down"].includes(axisToChange),
                    this.lastEntity.object.position.z + changeValueOnAxis * ["forward","backward"].includes(axisToChange)
                )

                this.lastEntity.outline.position.set(
                    this.lastEntity.outline.position.x + changeValueOnAxis * ["left","right"].includes(axisToChange),
                    this.lastEntity.outline.position.y + changeValueOnAxis * ["up","down"].includes(axisToChange),
                    this.lastEntity.outline.position.z + changeValueOnAxis * ["forward","backward"].includes(axisToChange)
                )

                console.log("Object moved")
            }
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
            console.log("Creating " + color + " " + type + " at " + x + ";" + y + ";" + z);
            this.lastEntity = this.environment.addCube(x,y,z, 5,color)
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

    isAnAxisDirection(param) {
        return ["up","down","forward","backward","left","right"].includes(param)
    }

    isAnAxis(param) {
        return ["X", "Y", "Z"].includes(param)
    }

    isNumber(param) {
        const numbersMap = {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10
        };

        return !isNaN(Number(param)) || Object.keys(numbersMap).includes(param)
    }

    parseNumber(param) {
        const numbersMap = {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10
        };

        if (Object.keys(numbersMap).includes(param)) {
            return numbersMap[param]
        }

        return Number(param)
    }
}
