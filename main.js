import * as THREE from 'three';

const scene = new THREE.Scene()

//perspective projection camera
//takes in fov, aspect, near, far
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)