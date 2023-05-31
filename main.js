import * as THREE from "three";

let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  //perspective projection camera
  //takes in fov, aspect, near, far
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //antialias makes the edges look sharper
  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  //creates cube. parameters are width, height, and depth
  const geometry = new THREE.BoxGeometry(2, 2, 2);

  //needs an 8 digit hex code. Why? Last 2 digits are alpha transparency
//   const material = new THREE.MeshBasicMaterial({ color: 949494e8 });
  const texture = new THREE.TextureLoader().load('/textures/murphy.jpg')
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  //by default, the coordinates will put the camera and cube inside of each other. We need to reposition the camera.
  camera.position.z = 5;
}

//redraws scene. Typical monitor is 60 frames per second.
function animate() {
  requestAnimationFrame(animate);

  //speed of rotation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

//this will keep the cube in the middle when we resize the screen
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//false means the event will be handled during the bubbling phase
window.addEventListener("resize", onWindowResize, false);

init();
animate();


