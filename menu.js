import {PointerLockControls} from "three/addons/controls/PointerLockControls.js";

export class MainMenu {
    constructor(htmlElement, camera, controls) {
        this.mainMenu = document.getElementById("main-menu")
        this.controls = controls
        this.connect()
    }

    connect() {
        this.mainMenu.addEventListener('click', () => {
            this.controls.lock()
        })

        this.controls.addEventListener( 'lock', () => {
            this.mainMenu.style.display = 'none';
        });

        this.controls.addEventListener( 'unlock', () => {
            this.mainMenu.style.display = 'block';
        });
    }
}