import * as THREE from 'three';
import { ImmediateFirstPersonControls } from './ImmediateFirstPersonControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Load the textures
const textureLoader = new THREE.TextureLoader();

function addCube() {
    const geometry = new THREE.BoxGeometry( 5, 5, 5 );
    const material = new THREE.MeshBasicMaterial( { color: 0x674107 } );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.y = 5;
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

addCube()
addPlane()


camera.position.set(0, 1.8, 10)
camera.lookAt(0, 1.8, 0);

const clock = new THREE.Clock();

const controls = new ImmediateFirstPersonControls( camera, renderer.domElement );
controls.movementSpeed = 1;
controls.lookSpeed = 1;
controls.lookVertical = true;

function animate() {
    controls.update( clock.getDelta() );
    renderer.render( scene, camera );
}