// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
// fov, aspect
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

console.error(`camera.position.x :  ${camera.position.x},
            camera.position.y :  ${camera.position.y},
            camera.position.z :  ${camera.position.z}`)
camera.position.z = 3
camera.position.x= 2
camera.position.y = 2

console.error(`camera.position.x :  ${camera.position.x},
            camera.position.y :  ${camera.position.y},
            camera.position.z :  ${camera.position.z}`)
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
console.error(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas 
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
