import * as THREE from "three";
import {MovementControls} from "./character/movement";

export class Character {
    oldPosition = null;
    constructor(htmlElement, camera, scene, clock, renderer, controls, height) {
        this.camera = camera
        this.scene = scene
        this.clock = clock
        this.controls = controls
        this.height = height
        this.movementControls = new MovementControls(htmlElement, scene, controls, clock, height)
    }

    initPosition() {
        this.camera.position.set(52, 300, 2)
        this.camera.lookAt(0, 0, 0)
    }

    updatePosition() {
        this.movementControls.updatePosition()
        // this.controls.update(this.clock.getDelta())
        // this.checkCollisions()
    }

    checkCollisions() {
        const camPosition = this.camera.position;
        if (!this.oldPosition) {
            this.oldPosition = camPosition.clone();
            return;
        }
        const direction = new THREE.Vector3();
        direction.subVectors(camPosition, this.oldPosition).normalize();
        const intersectedObjects = new THREE.Raycaster(camPosition, direction).intersectObjects(this.scene.children, false);

        if (intersectedObjects.length > 0 && intersectedObjects[0].distance < 2) {
            const obj = intersectedObjects[0];
            const moveV = new THREE.Vector3();
            moveV.subVectors(camPosition, obj.point).normalize();
            this.camera.position.set(this.oldPosition.x, this.oldPosition.y, this.oldPosition.z);
        }
        this.oldPosition = camPosition.clone();
    }
}