import * as THREE from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'

const objects = [];  //list-array
let raycaster; //raygun

let moveForward = false;
let moveBackwards = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now(); //curent time
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

let camera, scene, controls, renderer;

init();
animate();
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = 10;

    controls = new PointerLockControls(camera, document.body);

    const blocker = document.getElementById('blocker');
    const instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function () {
        controls.lock();
    })
    controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });
    controls.addEventListener('unlock', function () {
        blocker.style.display = 'block';
        instructions.style.display = ''
    })

    scene.add(controls.getObject());

    const onKeyDown = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = true;
                break;
            case 'KeyA':
                moveLeft = true;
                break;
            case 'KeyS':
                moveBackwards = true;
                break;
            case 'KeyD':
                moveRight = true;
                break;
            case 'Space':
                if (canJump === true) velocity.y += 20;
                canJump = false;
                break;
        }
    }

    const onKeyUp = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = false;
                break;
            case 'KeyA':
                moveLeft = false;
                break;
            case 'KeyS':
                moveBackwards = false;
                break;
            case 'KeyD':
                moveRight = false;

                break;
        }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 1)

    const planeGeometry = new THREE.PlaneGeometry(15, 15, 70, 70)
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotateX(-1.57)
    scene.add(plane);
    objects.push(plane);


    const geometry1 = new THREE.BoxGeometry(1, 1, 1);
    const material1 = new THREE.MeshLambertMaterial({ color: 0xe60000 });
    const cube1 = new THREE.Mesh(geometry1, material1);
    scene.add(cube1);
    cube1.position.set(0, 1, 0)
    objects.push(cube1)

    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material2 = new THREE.MeshLambertMaterial({ color: 0xff6600 });
    const cube2 = new THREE.Mesh(geometry2, material2);
    scene.add(cube2);
    cube2.position.set(2, 2, 0)
    objects.push(cube2)

    const geometry3 = new THREE.BoxGeometry(1, 1, 1);
    const material3 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    const cube3 = new THREE.Mesh(geometry3, material3);
    scene.add(cube3);
    cube3.position.set(4, 2, 1.5)
    objects.push(cube3)

    const geometry4 = new THREE.BoxGeometry(1, 1, 1);
    const material4 = new THREE.MeshLambertMaterial({ color: 0x33cc33 });
    const cube4 = new THREE.Mesh(geometry4, material4);
    scene.add(cube4);
    cube4.position.set(5, 3, 0.5)
    objects.push(cube4)

    const geometry5 = new THREE.BoxGeometry(1, 1, 1);
    const material5 = new THREE.MeshLambertMaterial({ color: 0x4da6ff });
    const cube5 = new THREE.Mesh(geometry5, material5);
    scene.add(cube5);
    cube5.position.set(6, 3, 2.5)
    objects.push(cube5)

    const geometry6 = new THREE.BoxGeometry(1, 1, 1);
    const material6 = new THREE.MeshLambertMaterial({ color: 0xcc00cc });
    const cube6 = new THREE.Mesh(geometry6, material6);
    scene.add(cube6);
    cube6.position.set(6, 3, 5.5)
    objects.push(cube6)

    const geometry7 = new THREE.BoxGeometry(1, 1, 1);
    const material7 = new THREE.MeshLambertMaterial({ color: 0xcc0000 });
    const cube7 = new THREE.Mesh(geometry7, material7);
    scene.add(cube7);
    cube7.position.set(4, 4, 6.5)
    objects.push(cube7)

    const geometry8 = new THREE.BoxGeometry(1, 1, 1);
    const material8 = new THREE.MeshLambertMaterial({ color: 0xcc6600 });
    const cube8 = new THREE.Mesh(geometry8, material8);
    scene.add(cube8);
    cube8.position.set(2, 5, 6.5)
    objects.push(cube8)

    const geometry9 = new THREE.BoxGeometry(1, 1, 1);
    const material9 = new THREE.MeshLambertMaterial({ color: 0xcccc00 });
    const cube9 = new THREE.Mesh(geometry9, material9);
    scene.add(cube9);
    cube9.position.set(0, 6, 5.5)
    objects.push(cube9)

    const geometry10 = new THREE.BoxGeometry(1, 1, 2);
    const material10 = new THREE.MeshLambertMaterial({ color: 0x00cc00 });
    const cube10 = new THREE.Mesh(geometry10, material10);
    scene.add(cube10);
    cube10.position.set(0, 7, 3.6)
    objects.push(cube10)

    const geometry11 = new THREE.BoxGeometry(1, 1, 1);
    const material11 = new THREE.MeshLambertMaterial({ color: 0x3399ff });
    const cube11 = new THREE.Mesh(geometry11, material11);
    scene.add(cube11);
    cube11.position.set(1, 7, 1.6)
    objects.push(cube11)

    const geometry12 = new THREE.BoxGeometry(1, 1, 1);
    const material12 = new THREE.MeshLambertMaterial({ color: 0xcc66ff });
    const cube12 = new THREE.Mesh(geometry12, material12);
    scene.add(cube12);
    cube12.position.set(1, 7, 0.1)
    objects.push(cube12)

    const geometry13 = new THREE.BoxGeometry(1, 1, 1);
    const material13 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const cube13 = new THREE.Mesh(geometry13, material13);
    scene.add(cube13);
    cube13.position.set(3, 8, 0.1)
    objects.push(cube13)

    const geometry14 = new THREE.BoxGeometry(1, 1, 1);
    const material14 = new THREE.MeshLambertMaterial({ color: 0xff6600 });
    const cube14 = new THREE.Mesh(geometry14, material14);
    scene.add(cube14);
    cube14.position.set(5, 8, 0.1)
    objects.push(cube14)

    const spheregeometry15 = new THREE.SphereGeometry(1, 15, 15);
    const spherematerial15 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    const sphere15 = new THREE.Mesh(spheregeometry15, spherematerial15);
    scene.add(sphere15);
    sphere15.position.set(7, 8, 0.1)
    objects.push(sphere15)

    const geometry16 = new THREE.BoxGeometry(1, 1, 1);
    const material16 = new THREE.MeshLambertMaterial({ color: 0x33cc33 });
    const cube16 = new THREE.Mesh(geometry16, material16);
    scene.add(cube16);
    cube16.position.set(9, 8, 1)
    objects.push(cube16)

    const geometry17 = new THREE.BoxGeometry(1, 1, 1);
    const material17 = new THREE.MeshLambertMaterial({ color: 0x4da6ff });
    const cube17 = new THREE.Mesh(geometry17, material17);
    scene.add(cube17);
    cube17.position.set(10, 8, 3)
    objects.push(cube17)

    const geometry18 = new THREE.BoxGeometry(1, 1, 1);
    const material18 = new THREE.MeshLambertMaterial({ color: 0xcc00cc });
    const cube18 = new THREE.Mesh(geometry18, material18);
    scene.add(cube18);
    cube18.position.set(6, 3, 5.5)
    objects.push(cube18)

    const geometry19 = new THREE.BoxGeometry(1, 1, 1);
    const material19 = new THREE.MeshLambertMaterial({ color: 0xcc00cc });
    const cube19 = new THREE.Mesh(geometry19, material19);
    scene.add(cube19);
    cube19.position.set(7, 3, 5.5)
    objects.push(cube19)

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize',onWindowResize);

}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();
    if(controls.isLocked === true){
        raycaster.ray.origin.copy(controls.getObject().position);
        raycaster.ray.origin.y -= 1;

        const intersections = raycaster.intersectObjects(objects,false);
        const onObject = intersections.length > 0;
        const delta = (time - prevTime) / 1000;
        
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 10.0 * delta;

        direction.z = Number(moveForward) - Number(moveBackwards);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        if(moveForward || moveBackwards) velocity.z -= direction.z * 100.0 * delta;
        if(moveLeft || moveRight) velocity.x -= direction.x * 100.0 * delta;

        if(onObject === true){
            velocity.y = Math.max(0,velocity.y);
            canJump = true;
        }
        controls.moveRight(-velocity.x * delta);
        controls.moveForward(-velocity.z * delta);
        controls.getObject().position.y += (velocity.y * delta);
         if(controls.getObject().position.y < -1){
            velocity.y = 0;
            controls.getObject().position.set(0,5,0);
            canJump = true;
         }
    }
    prevTime = time;
     //cube10.rotation.x += 0.0;
     //cube10.rotation.y += 0.02;
    renderer.render(scene, camera);
}
