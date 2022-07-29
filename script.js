import * as THREE from "three";
import { OrbitControls } from "OrbitControls";

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x6242ea })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

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

    requestAnimationFrame(animate)
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
}
animate()