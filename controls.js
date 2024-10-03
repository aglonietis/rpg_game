import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export class Controls {
    constructor(camera) {
        this.controls = new PointerLockControls( camera, document.body );
        this.connect()
    }

    connect() {

    }

    update() {

    }
}