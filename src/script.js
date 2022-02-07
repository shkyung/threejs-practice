import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
//mesh.position.y = 1 // UP

//mesh.position.x = 0.7
//mesh.position.y = -0.6
//mesh.position.z = 1 // forward

//mesh.position.set(0.7,-0.6,1)
//scene.add(mesh)

//console.error(mesh.position.length()) // 센터와 거리 1.36...
//mesh.position.normalize()
//console.error(mesh.position.length()) // 센터와 거리 1 after normalize

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//mesh.scale.x = 2
//mesh.scale.y = 0.5
//mesh.scale.z = 0.5
//mesh.scale.set(2,0.5,0.5)

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
cube2.position.x = -2
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'green'})
)
group.add(cube2)
cube3.position.x = 2


group.add(cube3)
group.position.y = 1
group.scale.y= 2

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

console.error(mesh.position.distanceTo(camera.position)) // 카메라와의 거리

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)