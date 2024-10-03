import * as THREE from "three";

export class HomeEnvironment {
    constructor(scene) {
        this.scene = scene;
    }

    addCube(x, y, z, color) {
        const geometry = new THREE.BoxGeometry( 5, 5, 5 );
        const material = new THREE.MeshBasicMaterial( { color } );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.set(x+2.5,y+2.5,z+2.5)
        this.scene.add( cube );

        const edges = new THREE.EdgesGeometry(geometry);  // Extract the edges of the cube
        const outlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });  // Black outline
        const outline = new THREE.LineSegments(edges, outlineMaterial);
        outline.position.copy(cube.position);  // Ensure the outline matches the cube's position

        this.scene.add(outline);
    }

    addPlane() {
        const geometry = new THREE.PlaneGeometry(500, 500);
        const material = new THREE.MeshBasicMaterial({ color: 0x41980a, side: THREE.DoubleSide });
        const ground = new THREE.Mesh(geometry, material);
        ground.rotation.x = - Math.PI / 2;
        this.scene.add(ground);
    }

    build() {
        this.addCube(0,0,0, 0x674107)
        this.addCube(15,0,0, 0x00ff00)
        this.addCube(0,0,15, 0xff0000)
        this.addCube(-15,0,0, 0x0000ff)
        this.addCube(0,0,-15, 0xdddddd)
        this.addPlane()
    }
}