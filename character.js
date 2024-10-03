import * as THREE from "three";
import {ImmediateFirstPersonControls} from "./controls";

export class Character {
    oldPosition = null;
    constructor(camera, scene, clock, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.clock = clock;
        this.renderer = renderer;
    }

    init() {
        this.camera.position.set(0, 1.8, 10)
        this.camera.lookAt(0, 0, 0);

        this.controls = this.createControls()
    }

    createControls() {
        const controls = new ImmediateFirstPersonControls( this.camera, this.renderer.domElement );
        controls.movementSpeed = 5;
        controls.lookSpeed = 10;
        controls.lookVertical = true;
        controls.verticalMovement = false;
        controls.immediateLook = true;

        return controls;
    }

    updatePosition() {
        this.controls.update(this.clock.getDelta())
        this.checkCollisions()
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