import * as THREE from 'three';
import { ImmediateFirstPersonControls } from './controls';
import {Environment} from "./environment";
import {Character} from "./character";

const clock = new THREE.Clock();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const environment = new Environment(scene)
const character = new Character(camera, scene, clock, renderer)
character.init()
environment.build()

function animate() {
    character.updatePosition()
    renderer.render( scene, camera );
}



