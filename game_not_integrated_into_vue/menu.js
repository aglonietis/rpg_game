import {PointerLockControls} from "three/addons/controls/PointerLockControls.js";

export class MainMenu {
    touchStartEvent = {
        x: 0,
        y: 0,
        timestamp: 0,
    }
    constructor(htmlElement, camera, controls) {
        this.mainMenu = document.getElementById("main-menu")
        this.controls = controls
        this.htmlElement = htmlElement

        if('ontouchstart' in window) { // Mobile device detection
            this.controls.isLocked = true
        }
        this.connect()
    }

    connect() {
        this.mainMenu.addEventListener('click', () => {
            this.controls.lock()
        })

        this.mainMenu.addEventListener('touchstart', (event) => {
            if(this.controls.isLocked) {
                this.controls.isLocked = false
                this.mainMenu.style.display = 'none'
            }
        })

        this.htmlElement.addEventListener('touchstart', (event) => {
            if(!this.controls.isLocked) {
                this.touchStartEvent = {
                    x: event.touches[0].pageX,
                    y: event.touches[0].pageY,
                    timestamp: event.timeStamp,
                }
            }
        })

        this.htmlElement.addEventListener('touchend', (event) => {
            if(!this.controls.isLocked && (event.timeStamp - this.touchStartEvent.timestamp < 1000)  && (this.touchStartEvent.x - 20) > event.changedTouches[0].pageX) {
                this.controls.isLocked = true
                this.mainMenu.style.display = 'block'
            }
        })

        this.controls.addEventListener( 'lock', () => {
            this.mainMenu.style.display = 'none'
        });

        this.controls.addEventListener( 'unlock', () => {
            this.mainMenu.style.display = 'block'
        });
    }
}