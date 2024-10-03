import * as THREE from "three";

export class HomeEnvironment {
    constructor(scene) {
        this.scene = scene;
    }

    addCube(x, y, z, size, color, angle = undefined) {
        const geometry = new THREE.BoxGeometry( size, size, size);
        const material = new THREE.MeshBasicMaterial( { color } );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.set(x+size/2,y+size/2,z+size/2)
        if(angle !== undefined) {
            cube.rotation.y = angle
        }
        this.scene.add( cube );

        const edges = new THREE.EdgesGeometry(geometry);  // Extract the edges of the cube
        const outlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });  // Black outline
        const outline = new THREE.LineSegments(edges, outlineMaterial);
        outline.position.copy(cube.position);  // Ensure the outline matches the cube's position
        if(angle !== undefined) {
            outline.rotation.copy(cube.rotation)
        }

        this.scene.add(outline);
    }

    addPlane() {
        const geometry = new THREE.PlaneGeometry(500, 500);
        const material = new THREE.MeshBasicMaterial({ color: 0x41980a, side: THREE.DoubleSide });
        const ground = new THREE.Mesh(geometry, material);
        ground.rotation.x = - Math.PI / 2;
        this.scene.add(ground);
    }

    createManyCubesInCircle(numCubes, angleOffset, color, angleStep, radius, heightIncrement) {
        for (let i = 0; i < numCubes; i++) {
            const angle = i * angleStep + angleOffset; // Current angle for the circle

            // x and z coordinates for circular placement
            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);

            // y coordinate for vertical staircase effect
            const y = i * heightIncrement;

            // Add the position to the list
            this.addCube(x,y,z, 4,color, angle)
        }
    }

    build() {
        const radius = 50;
        const heightIncrement = 0.5;
        const numCubes = 500;
        const fullCircle = Math.PI * 2; // Full circle in radians
        const angleStep = fullCircle / numCubes; // Angle between each cube

        this.createManyCubesInCircle(500, 0, 0x674107, angleStep, radius, heightIncrement)
        this.createManyCubesInCircle(500, Math.PI / 4, 0x674107, angleStep, radius, heightIncrement)
        this.createManyCubesInCircle(500, Math.PI / 4 * 2, 0x674107, angleStep, radius, heightIncrement)
        this.createManyCubesInCircle(500, Math.PI / 4 * 3, 0x674107, angleStep, radius, heightIncrement)
        this.createManyCubesInCircle(500, Math.PI / 4 * 4, 0x674107, angleStep, radius, heightIncrement)
        this.createManyCubesInCircle(500, Math.PI / 4 * 5, 0x674107, angleStep, radius, heightIncrement)
        this.createManyCubesInCircle(500, Math.PI / 4 * 6, 0x674107, angleStep, radius, heightIncrement)
        this.createManyCubesInCircle(500, Math.PI / 4 * 7, 0x674107, angleStep, radius, heightIncrement)
        this.addCilinder(0, 100, 0, 46, 5, 0xffffff)
        this.addHollowCilinder(0, 254, 0, 53, 200, 0xffffff)


        this.addCube(0,0,0, 2,0x674107)
        this.addCube(4,0,0, 4,0x674107)
        this.addCube(-8,-2,0, 4,0x674107)
        this.addCube(-4,0,0, 4,0x674107)
        this.addCube(0,2,0, 4,0x674107)
        this.addCube(4,4,0, 4,0x674107)
        this.addCube(8,6,0, 4,0x674107)
        this.addCube(12,8,0, 4,0x674107)
        this.addCube(16,10,0, 4,0x674107)
        this.addCube(20,12,0, 4,0x674107)
        this.addCube(15,0,0, 5,0x00ff00)
        this.addCube(0,0,15,5,  0xff0000)
        this.addCube(-15,0,0,5, 0x0000ff)
        this.addCube(0,0,-15, 5,0xdddddd)
        this.addCube(0,0,-15, 5,0xdddddd)
        this.addPlane()
    }

    addCilinder(x, y, z, radius, height, color) {
        const geometry = new THREE.CylinderGeometry( radius, radius, height, 32 );
        const material = new THREE.MeshBasicMaterial( {color, opacity: 0.5, transparent: true} );
        const cylinder = new THREE.Mesh( geometry, material );
        cylinder.position.set(x,y,z)
        this.scene.add( cylinder );
    }

    addHollowCilinder(x, y, z, innerRadius, outterRadius, color) {
        const geometry = new THREE.CylinderGeometry( outterRadius, innerRadius, 1, 32, 32, true );
        const material = new THREE.MeshBasicMaterial( {color, opacity: 0.5, transparent: true, side: THREE.DoubleSide } );
        const cylinder = new THREE.Mesh( geometry, material );
        cylinder.position.set(x,y,z)
        this.scene.add( cylinder );
    }
}