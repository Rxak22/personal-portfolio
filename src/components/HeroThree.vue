<template>
  <div ref="container" class="three-container w-full h-full"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let renderer, scene, camera, frameId
let plane, points

onMounted(() => {
  const el = container.value
  const width = el.clientWidth || window.innerWidth
  const height = el.clientHeight || window.innerHeight

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(width, height)
  renderer.outputEncoding = THREE.sRGBEncoding
  el.appendChild(renderer.domElement)

  // Scene & Camera
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000)
  camera.position.set(0, 0, 500)

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambient)
  const dir = new THREE.DirectionalLight(0xffffff, 0.6)
  dir.position.set(0.5, 1, 0.5)
  scene.add(dir)

  // Particles
  const particleCount = 600
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    const r = 600
    positions[i * 3 + 0] = (Math.random() - 0.5) * r
    positions[i * 3 + 1] = (Math.random() - 0.5) * r * 0.6
    positions[i * 3 + 2] = (Math.random() - 0.5) * r
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const sprite = new THREE.TextureLoader().load('/social_placeholder.svg')
  const mat = new THREE.PointsMaterial({
    size: 3.0,
    color: 0xffffff,
    transparent: true,
    opacity: 0.7,
    map: sprite,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })
  points = new THREE.Points(geo, mat)
  scene.add(points)

  // Floating textured plane (hero)
  const loader = new THREE.TextureLoader()
  const texture = loader.load('/hero.png')
  texture.encoding = THREE.sRGBEncoding
  const planeGeo = new THREE.PlaneGeometry(360, 480, 32, 32)
  const planeMat = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0.0,
    roughness: 0.6,
    transparent: true
  })
  plane = new THREE.Mesh(planeGeo, planeMat)
  plane.position.set(220, -20, 0)
  plane.rotation.y = THREE.MathUtils.degToRad(12)
  plane.castShadow = true
  plane.receiveShadow = true
  scene.add(plane)

  // Responsive
  const onResize = () => {
    const w = el.clientWidth || window.innerWidth
    const h = el.clientHeight || window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  // Pointer interaction
  const pointer = { x: 0, y: 0 }
  const onPointer = (e) => {
    const rect = el.getBoundingClientRect()
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }
  el.addEventListener('pointermove', onPointer)

  // Animation
  let t = 0
  function animate() {
    t += 0.01
    // gentle floating
    plane.position.y = -20 + Math.sin(t * 0.9) * 12
    plane.rotation.x = Math.sin(t * 0.4) * 0.03
    plane.rotation.z = Math.sin(t * 0.2) * 0.02

    // particles slow drift
    points.rotation.y += 0.0008
    points.rotation.x = Math.sin(t * 0.05) * 0.01

    // subtle pointer-based parallax
    plane.rotation.y = THREE.MathUtils.lerp(plane.rotation.y, THREE.MathUtils.degToRad(12) - pointer.x * 0.25, 0.06)
    plane.position.x = THREE.MathUtils.lerp(plane.position.x, 220 + pointer.x * 60, 0.06)
    plane.position.z = THREE.MathUtils.lerp(plane.position.z, pointer.y * 80, 0.04)

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  // store cleanup
  onBeforeUnmount(() => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('resize', onResize)
    el.removeEventListener('pointermove', onPointer)
    renderer.dispose()
    geo.dispose()
    mat.dispose()
    planeGeo.dispose()
    planeMat.dispose()
  })
})
</script>

<style scoped>
.three-container { position: absolute; inset: 0; z-index: 0; }
</style>
