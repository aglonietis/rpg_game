import * as THREE from 'three';
import {Environment} from "./environment";
import {Character} from "./character";

const clock = new THREE.Clock();
const gameScene = new THREE.Scene();
gameScene.background = new THREE.Color(0x87CEEB);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const environment = new Environment(gameScene)
const character = new Character(camera, gameScene, clock, renderer)
character.init()
environment.build()

function animate() {
    character.updatePosition()
    renderer.render( gameScene, camera );
}



