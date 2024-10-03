import {Raycaster, Vector3} from "three";

export class MovementControls {
    moveForward = false
    moveLeft = false
    moveRight = false
    moveBackward = false
    canJump = true
    velocity = new Vector3()
    direction = new Vector3()
    constructor(htmlElement, scene, controls, clock, elevation) {
        this.controls = controls
        this.htmlElement = htmlElement
        this.clock = clock
        this.scene = scene
        this.speed = 3
        this.mass = 100.0
        this.horizontalDeceleration = 10
        this.verticalDeceleration = 2.5
        this.jumpVelociy = 70
        this.elevation = elevation
        this.connect()
        this.raycaster = new Raycaster( new Vector3(), new Vector3( 0, - 1, 0 ), 0, 100 );
    }

    connect() {
        this.htmlElement.addEventListener( 'keydown', this.onKeyDown.bind(this) );
        this.htmlElement.addEventListener( 'keyup', this.onKeyUp.bind(this) );
        this.htmlElement.addEventListener('touchmove', this.onTouchMove.bind(this));
    }

    updatePosition() {
        const delta = this.clock.getDelta()

        const position = this.controls.getObject().position.clone();
        position.y -= this.elevation;
        this.raycaster.ray.origin.copy(position);

        const intersections = this.raycaster.intersectObjects(this.scene.children, false)
        let minIntersectionDistance = 100
        intersections.forEach(function (intersection) {
            if (intersection.distance < minIntersectionDistance) {
                minIntersectionDistance = intersection.distance
            }
        })
        const onObject = intersections.length > 0 && minIntersectionDistance <= 1;

        this.velocity.x -= this.velocity.x * this.horizontalDeceleration * delta;
        this.velocity.z -= this.velocity.z * this.horizontalDeceleration * delta;
        this.velocity.y -= (this.verticalDeceleration * this.mass * delta); // 100.0 = mass

        this.direction.z = Number( this.moveForward ) - Number( this.moveBackward );
        this.direction.x = Number( this.moveRight ) - Number( this.moveLeft );
        this.direction.normalize(); // this ensures consistent movements in all directions

        if ( this.moveForward || this.moveBackward ) this.velocity.z -= this.direction.z * this.speed * delta;
        if ( this.moveLeft || this.moveRight ) this.velocity.x -= this.direction.x * this.speed * delta;
        if ( onObject === true) {
            this.velocity.y = Math.max( 0, this.velocity.y );
            this.canJump = true;
        }

        this.controls.moveRight( - this.velocity.x);
        this.controls.moveForward( - this.velocity.z);
        const deltaY = this.velocity.y * delta
        this.controls.object.position.y += deltaY > 0 ? deltaY : Math.max(deltaY, -minIntersectionDistance);

        if ( this.controls.object.position.y < this.elevation ) {
            this.velocity.y = 0;
            this.controls.object.position.y = this.elevation;
            this.canJump = true;
        }
        console.log("position:", parseInt(this.controls.object.position.x), parseInt(this.controls.object.position.y), parseInt(this.controls.object.position.z))
    }

    onKeyDown( event ) {
        console.log("key down")
        switch ( event.code ) {
            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = true;
                break;

            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = true;
                break;

            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = true;
                break;

            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = true;
                break;

            case 'Space':
                if ( this.canJump === true ) this.velocity.y += this.jumpVelociy;
                this.canJump = false;
                break;
        }
    };

    onKeyUp ( event ) {
        console.log("key up")
        switch ( event.code ) {
            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = false;
                break;

            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = false;
                break;

            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = false;
                break;

            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = false;
                break;
        }
    };

    onTouchMove(event) {

    }
}