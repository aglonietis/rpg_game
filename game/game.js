import * as THREE from 'three';
import {Character} from "./character";
import {HomeEnvironment} from "./environments/home";
import {MainMenu} from "./menu";
import {PointerLockControls} from "three/addons/controls/PointerLockControls";

export class Game {
    htmlElement = null
    renderer = null
    clock = null
    camera = null
    scene = null
    environment = null
    character = null
    constructor(htmlElement, width, height) {
        this.htmlElement = htmlElement
        this.clock = new THREE.Clock()
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 )
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(width, height)
        this.renderer.setAnimationLoop(this.animate.bind(this))
        this.htmlElement.appendChild(this.renderer.domElement);
        this.controls = new PointerLockControls( this.camera, this.htmlElement );
        this.mainMenu = new MainMenu(this.htmlElement, this.camera, this.controls);
        this.initScene()
        this.initCharacter()
    }

    initScene() {
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0x87CEEB);
        this.environment = new HomeEnvironment(this.scene)
        this.environment.build()
    }

    initCharacter() {
        this.character = new Character(this.htmlElement, this.camera, this.scene, this.clock, this.renderer, this.controls, 1.8)
        this.character.initPosition()
    }

    animate() {
        if (this.controls.isLocked === true) {
            this.character.updatePosition()
        }

        this.renderer.render(this.scene, this.camera)
    }
}
