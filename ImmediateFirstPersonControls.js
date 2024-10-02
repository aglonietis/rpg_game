import * as THREE from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';

export class ImmediateFirstPersonControls extends FirstPersonControls {
    constructor(camera, domElement) {
        super(camera, domElement);
    }
}