import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement); 

const controls = new OrbitControls(camera, renderer.domElement);

const geometry1 = new THREE.BoxGeometry(1,2,1);
const material1 = new THREE.MeshLambertMaterial({color: 0x4da6ff});
const cube1 = new THREE.Mesh(geometry1,material1);
scene.add(cube1);
cube1.position.x = -5

const geometry2 = new THREE.BoxGeometry(1,2,1);
const material2 = new THREE.MeshLambertMaterial({color: 0xff4d4d});
const cube2 = new THREE.Mesh(geometry2,material2);
scene.add(cube2);

const Light = new THREE.PointLight(0xffffff, 100);
scene.add(Light);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

cube2.position.x = 5

camera.position.z = 5; 

const sphereGeometry = new THREE.SphereGeometry(2,64,64);
const sphereMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);

    cube1.rotation.x += 0.20;
    cube1.rotation.y += 0.20;
    cube2.rotation.x += 0.20;
    cube2.rotation.y += 0.20;

    renderer.render(scene,camera);

}
animate();

