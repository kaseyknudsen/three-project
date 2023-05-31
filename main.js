import * as THREE from "three";

const scene = new THREE.Scene();

//perspective projection camera
//takes in fov, aspect, near, far
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//creates cube. parameters are width, height, and depth
const geometry = new THREE.BoxGeometry(2, 2, 2);

//needs an 8 digit hex code. Why? Last 2 digits are alpha transparency
const material = new THREE.MeshBasicMaterial({ color: 949494e8 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//by default, the coordinates will put the camera and cube inside of each other. We need to reposition the camera.
camera.position.z = 5;

//redraws scene. Typical monitor is 60 frames per second.
function animate() {
  requestAnimationFrame(animate);

  //speed of rotation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
