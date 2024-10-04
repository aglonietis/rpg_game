import * as THREE from 'three';

export class Game {
    htmlElement = null
    renderer = null
    clock = null
    camera = null
    scene = null
    constructor(htmlElement, width, height) {
        // this.htmlElement = htmlElement
        // this.clock = new THREE.Clock()
        // this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 )
        // this.renderer = new THREE.WebGLRenderer()
        // this.renderer.setSize(width, height)
        // this.renderer.setAnimationLoop(this.animate.bind(this))
        // this.htmlElement.appendChild(this.renderer.domElement);
    }



    animate() {
        this.renderer.render(this.scene, this.camera)
    }
}
