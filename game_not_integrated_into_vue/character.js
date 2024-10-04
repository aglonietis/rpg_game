import * as THREE from "three";
import {MovementControls} from "./character/movement";
import {Raycaster, Vector3} from "three";

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
        this.camera.position.set(52, 257, 2)
        this.camera.lookAt(0, 257, 0)
    }

    updatePosition() {
        this.movementControls.updatePosition()
        this.checkCollisions()
    }

    checkCollisions() {
        // const camPosition = this.camera.position;
        // if (!this.oldPosition) {
        //     this.oldPosition = camPosition.clone();
        //     return;
        // }
        // const direction = new THREE.Vector3();
        // direction.subVectors(camPosition, this.oldPosition).normalize();
        // const raycaster = new Raycaster( new Vector3(), direction, 0, 100 );
        //
        // const intersectedObjects = raycaster.intersectObjects(this.scene.children, false);
        // let minIntersectionDistance = 100
        // intersectedObjects.forEach(function (intersection) {
        //     if (intersection.distance < minIntersectionDistance) {
        //         minIntersectionDistance = intersection.distance
        //     }
        // })
        // console.log("Intersection:", intersectedObjects.length, minIntersectionDistance)
        // if (intersectedObjects.length > 0 && intersectedObjects[0].distance < 2) {
        //     const obj = intersectedObjects[0];
        //     const moveV = new THREE.Vector3();
        //     moveV.subVectors(camPosition, obj.point).normalize();
        //     // this.camera.position.set(this.oldPosition.x, this.oldPosition.y, this.oldPosition.z);
        // }
        // this.oldPosition = camPosition.clone();
    }
}