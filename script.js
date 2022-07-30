import * as THREE from "three";
import { OrbitControls } from "OrbitControls";

// Scene
const scene = new THREE.Scene()

// Object
const cube = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
const cylinder = new THREE.SphereGeometry(1, 32, 32)
const plane = new THREE.PlaneGeometry(1, 1)
const torus = new THREE.TorusGeometry(0.5, 0.3, 12, 32)

const material = new THREE.MeshBasicMaterial({
    // color: 0x6242ea,
    // wireframe: true,
    opacity: 0.5,
    transparent: true,
    side: THREE.DoubleSide,
})

const meshCube = new THREE.Mesh(cube, material)
meshCube.position.x = -3
const meshSphere = new THREE.Mesh(cylinder , material)
meshSphere.position.x = -1
const meshPlane = new THREE.Mesh(plane , material)
meshPlane.position.x = 1
const meshTorus = new THREE.Mesh(torus, material)
meshTorus.position.x = 3

scene.add(meshCube, meshSphere, meshPlane, meshTorus)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 10000)
camera.position.set(0, -1, 5)
scene.add(camera)

// Canvas
const canvas = document.querySelector('.webgl')

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.update()

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Animation
const clock = new THREE.Clock()

const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    meshCube.rotation.x += 0.01
    meshCube.rotation.y += 0.01
    meshSphere.rotation.x += 0.01
    meshSphere.rotation.y += 0.01
    meshPlane.rotation.x += 0.01
    meshPlane.rotation.y += 0.01
    meshTorus.rotation.x += 0.01
    meshTorus.rotation.y += 0.01

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()