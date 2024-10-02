import * as THREE from 'three';
import { ImmediateFirstPersonControls } from './ImmediateFirstPersonControls';

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

function addCube(x, y, z, color) {
    const geometry = new THREE.BoxGeometry( 5, 5, 5 );
    const material = new THREE.MeshBasicMaterial( { color } );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(x+2.5,y+2.5,z+2.5)
    scene.add( cube );

    const edges = new THREE.EdgesGeometry(geometry);  // Extract the edges of the cube
    const outlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });  // Black outline
    const outline = new THREE.LineSegments(edges, outlineMaterial);
    outline.position.copy(cube.position);  // Ensure the outline matches the cube's position

    scene.add(outline);
}

function addPlane() {
    const geometry = new THREE.PlaneGeometry(500, 500);
    const material = new THREE.MeshBasicMaterial({ color: 0x41980a, side: THREE.DoubleSide });
    const ground = new THREE.Mesh(geometry, material);
    ground.rotation.x = - Math.PI / 2;
    scene.add(ground);
}

function createControls() {
    const controls = new ImmediateFirstPersonControls( camera, renderer.domElement );
    controls.movementSpeed = 5;
    controls.lookSpeed = 10;
    controls.lookVertical = true;
    controls.verticalMovement = false;
    controls.immediateLook = true;

    return controls;
}

function createEnvironment() {
    addCube(0,0,0, 0x674107)
    addCube(15,0,0, 0x00ff00)
    addCube(0,0,15, 0xff0000)
    addCube(-15,0,0, 0x0000ff)
    addCube(0,0,-15, 0xdddddd)
    addPlane()
}

let oldPosition = null;
function checkCollision() {
    const camPosition = camera.position;
    if (!oldPosition) {
        oldPosition = camPosition.clone();
        return;
    }
    const direction = new THREE.Vector3();
    direction.subVectors(camPosition, oldPosition).normalize();
    const intersectedObjects = new THREE.Raycaster(camPosition, direction).intersectObjects(scene.children, false);

    if (intersectedObjects.length > 0 && intersectedObjects[0].distance < 2) {
        const obj = intersectedObjects[0];
        const moveV = new THREE.Vector3();
        moveV.subVectors(camPosition, obj.point).normalize();
        camera.position.set(oldPosition.x, oldPosition.y, oldPosition.z);// = oldPosition;
    }
    oldPosition = camPosition.clone();
}



camera.position.set(0, 1.8, 10)
camera.lookAt(0, 0, 0);


const controls = createControls()
createEnvironment()

function animate() {
    checkCollision()
    controls.update( clock.getDelta() );
    renderer.render( scene, camera );
}



