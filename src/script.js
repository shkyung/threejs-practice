import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const textureLoader = new THREE.TextureLoader()

const tex1 = textureLoader.load("/textures/door/color.jpg")
const tex2 = textureLoader.load("/textures/door/alpha.jpg")
const tex3 = textureLoader.load("/textures/door/ambientOcclusion.jpg")
const tex4 = textureLoader.load("/textures/door/height.jpg")
const tex5 = textureLoader.load("/textures/door/normal.jpg")
const tex6 = textureLoader.load("/textures/door/metalness.jpg")
const tex7 = textureLoader.load("/textures/door/roughness.jpg")

const tex8 = textureLoader.load("/textures/matcaps/1.png")
const tex9 = textureLoader.load("/textures/gradients/3.jpg")

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//const material = new THREE.MeshBasicMaterial()
// material.color= new THREE.Color('red')
// material.map = tex1
// material.color = new THREE.Color(0x00ff00)
// material.wireframe = true
// material.transparent= true
// material.opacity = 0.5

// const material = new THREE.MeshNormalMaterial()
// material.wireframe = true

// const material = new THREE.MeshMatcapMaterial()
// material.matcap = tex8

const material = new THREE.MeshDepthMaterial()

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5,16,16),
    material)

sphere.position.x = -1.5

const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1,1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusBufferGeometry(0.3,0.2,16,32),
    material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)

const ambientLight = new THREE.AmbientLight(0xffffff, 0,5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff,0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4

scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = elapsedTime * 0.1
    plane.rotation.y = elapsedTime * 0.1
    torus.rotation.y = elapsedTime * 0.1

    sphere.rotation.x = elapsedTime * 0.15
    plane.rotation.x = elapsedTime * 0.15
    torus.rotation.x = elapsedTime * 0.15

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()