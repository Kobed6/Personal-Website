import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import galaxyBg from './assets/galaxy.jpg';
import galaxyTexture from './assets/galaxyTexture.jpg';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(15, 0, 20)

renderer.render(scene, camera);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const ballTexture = new THREE.TextureLoader().load(galaxyTexture)
const ball = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({map: ballTexture})
);

ball.position.set(16, 0, 0)

scene.add(ball);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);

// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

const spaceTexture = new THREE.TextureLoader().load(galaxyBg);
scene.background = spaceTexture;

function moveCamera() {

  const t = document.body.getBoundingClientRect().top;

  ball.position.y = t * -0.02;

}

document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);

  ball.rotation.x += 0.01;
  ball.rotation.y += 0.005;
  ball.rotation.z += 0.005;

  controls.update();

  renderer.render(scene, camera);
}

animate()
