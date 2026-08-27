<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import {
  ArrowRight,
  ArrowLeft,
  Box,
  Check,
  CircleAlert,
  Coffee,
  Download,
  Heart,
  ImagePlus,
  Leaf,
  Maximize2,
  Move,
  MousePointer2,
  Orbit,
  Package,
  RotateCw,
  ScanLine,
  ShieldCheck,
  Shirt,
  Smartphone,
  Sparkles,
  Undo2,
  UploadCloud,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-vue-next'
import { patterns } from '../data'

const emit = defineEmits(['navigate', 'select-category'])
const initialPatternId = new URLSearchParams(window.location.search).get('pattern')
const initialView = new URLSearchParams(window.location.search).get('view')
const animalPatterns = patterns.filter((pattern) => pattern.category === 'animal')
const page = ref(initialView === 'studio' ? 'studio' : 'home')
const selectedPatternId = ref(patterns.some((pattern) => pattern.id === initialPatternId) ? initialPatternId : animalPatterns[0]?.id || patterns[0]?.id || '')
const selectedModel = ref('vase')
const toast = ref('')
const fileAlert = ref('')
const fileInput = ref(null)
const uploadedPreview = ref('')
const extractedPreview = ref('')
const uploadedPattern = ref(null)
const uploadedFileName = ref('')
const uploadStatus = ref('等待上传图片')
const isAnalyzing = ref(false)
const canvasHost = ref(null)
const renderReady = ref(false)
const dragTextureMode = ref(false)
const textureDrag = reactive({ active: false, x: 0, y: 0 })
const favoriteIds = ref(new Set())
const params = reactive({
  scale: 100,
  rotate: 0,
  offset: 0,
  patternSize: 100,
  repeatX: 1,
  textureOffsetX: 0,
  textureOffsetY: 0,
  gloss: 45,
})

const modelOptions = [
  { key: 'vase', label: '花瓶', icon: Package },
  { key: 'cup', label: '茶杯', icon: Coffee },
  { key: 'box', label: '包装盒', icon: Box },
  { key: 'silk', label: '丝巾', icon: Shirt },
  { key: 'phone', label: '手机壳', icon: Smartphone },
]

const GROUND_Y = -1.305
const modelViewPresets = {
  vase: { camera: [0, 1.6, 5.35], target: [0, 0.08, 0], shadow: [1.7, 0.72, -0.08, 0.08] },
  cup: { camera: [0, 0.25, 3.75], target: [0, -0.92, 0], shadow: [1.2, 0.58, -0.05, 0.06] },
  box: { camera: [0, 0.15, 4.25], target: [0, -0.88, 0], shadow: [2.1, 1.25, 0, 0.08] },
  silk: { camera: [0, 0.38, 4.65], target: [0, -0.18, 0], shadow: [2.25, 0.72, 0, 0.08] },
  phone: { camera: [0, 0.18, 4.05], target: [0, -0.48, 0], shadow: [1.05, 0.52, 0, 0.06] },
}

const palette = ['#b85c38', '#5a7d5a', '#c9a227', '#7a6048', '#6c8295', '#a08060']

const demoPatterns = patterns.map((pattern, index) => ({
  ...pattern,
  region: ['大临村', '江南工坊', '桐乡', '民间布样'][index % 4],
  color: palette[index % palette.length],
  likes: 64 + index * 23,
  image: pattern.previewImage,
}))

const studioPatterns = computed(() => uploadedPattern.value ? [uploadedPattern.value, ...landingPatterns.value] : landingPatterns.value)
const selectedPattern = computed(() => uploadedPattern.value?.id === selectedPatternId.value ? uploadedPattern.value : demoPatterns.find((pattern) => pattern.id === selectedPatternId.value) || demoPatterns[0])

const landingPatterns = computed(() =>
  animalPatterns
    .map((pattern) => demoPatterns.find((item) => item.id === pattern.id))
    .filter(Boolean),
)
const landingFeatures = [
  { title: '纹样智能采集', description: '上传图片，智能提取纹样结构与视觉特征', action: '立即体验', page: 'upload', icon: ImagePlus },
  { title: '蓝印纹库', description: '返回主站查看动物纹实拍图与文化档案', action: '查看动物纹', actionType: 'library', icon: ArrowLeft },
  { title: '纹样 3D 创作', description: '选择器物载体，实时预览纹理与形态效果', action: '进入 3D 工坊', page: 'studio', icon: Box },
]

let toastTimer
let fileAlertTimer
let analysisTimer
let renderer
let scene
let camera
let controls
let modelGroup
let modelMinY = -1.2
let texture
let contactShadow
let animationFrame
let resizeObserver
let textureRequestId = 0
const wireframeMode = ref(false)

const studioParameters = [
  { key: 'scale', label: '缩放', min: 50, max: 150, step: 1 },
  { key: 'rotate', label: '旋转', min: 0, max: 360, step: 1 },
  { key: 'offset', label: '位置', min: -50, max: 50, step: 1 },
  { key: 'patternSize', label: '纹样大小', min: 55, max: 180, step: 1 },
  { key: 'repeatX', label: '横向重复', min: 0.6, max: 3, step: 0.1 },
  { key: 'gloss', label: '光泽度', min: 0, max: 100, step: 1 },
]

const studioCapabilities = [
  { title: '非遗纹样 · 数字新生', description: '让千年纹样走进现代创作', icon: Leaf },
  { title: '高清渲染', description: '高分辨率 PNG 输出', icon: Box },
  { title: '多角度展示', description: '360° 旋转预览', icon: Orbit },
  { title: '一键导出', description: 'PNG 渲染图', icon: Download },
  { title: '商用可用', description: '版权信息可追溯', icon: ShieldCheck },
]

function showToast(message) {
  toast.value = message
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => {
    toast.value = ''
  }, 2600)
}

function showFileAlert(message) {
  fileAlert.value = message
  window.clearTimeout(fileAlertTimer)
  fileAlertTimer = window.setTimeout(() => {
    fileAlert.value = ''
  }, 5200)
}

function dismissFileAlert() {
  window.clearTimeout(fileAlertTimer)
  fileAlert.value = ''
}

function goTo(nextPage) {
  page.value = nextPage
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goAnimalLibrary() {
  emit('select-category', 'animal')
  emit('navigate', '/library')
}

function openPatternDetail(pattern) {
  emit('navigate', `/pattern/${pattern.id}`)
}

function useLandingFeature(feature) {
  if (feature.actionType === 'library') goAnimalLibrary()
  else goTo(feature.page)
}

function cycleLandingPattern() {
  const currentIndex = landingPatterns.value.findIndex((pattern) => pattern.id === selectedPatternId.value)
  const nextPattern = landingPatterns.value[(currentIndex + 1) % landingPatterns.value.length]
  if (nextPattern) selectedPatternId.value = nextPattern.id
}

function resetSceneView() {
  params.scale = 100
  params.rotate = 0
  params.offset = 0
  params.patternSize = 100
  params.repeatX = 1
  params.textureOffsetX = 0
  params.textureOffsetY = 0
  params.gloss = 45
  wireframeMode.value = false
  modelGroup?.traverse((object) => {
    const materials = Array.isArray(object.material) ? object.material : object.material ? [object.material] : []
    materials.forEach((material) => {
      material.wireframe = false
      material.needsUpdate = true
    })
  })
  applyModelView()
}

function applyModelView() {
  const preset = modelViewPresets[selectedModel.value] || modelViewPresets.vase
  if (camera) camera.position.set(...preset.camera)
  controls?.target.set(...preset.target)
  controls?.update()
  if (contactShadow) {
    const [width, depth, x, z] = preset.shadow
    contactShadow.scale.set(width, depth, 1)
    contactShadow.position.set(x, GROUND_Y + 0.015, z)
  }
}

function zoomScene(direction) {
  if (!camera || !controls) return
  const offset = camera.position.clone().sub(controls.target)
  const nextDistance = THREE.MathUtils.clamp(offset.length() + direction * 0.45, controls.minDistance, controls.maxDistance)
  camera.position.copy(controls.target).add(offset.setLength(nextDistance))
  controls?.update()
}

function toggleWireframe() {
  wireframeMode.value = !wireframeMode.value
  modelGroup?.traverse((object) => {
    const materials = Array.isArray(object.material) ? object.material : object.material ? [object.material] : []
    materials.forEach((material) => {
      material.wireframe = wireframeMode.value
      material.needsUpdate = true
    })
  })
}

function toggleSceneFullscreen() {
  if (!canvasHost.value) return
  if (document.fullscreenElement) document.exitFullscreen?.()
  else canvasHost.value.requestFullscreen?.()
}

function selectPattern(pattern) {
  selectedPatternId.value = pattern.id
  goTo('studio')
  showToast(`已选择：${pattern.name}`)
}

function toggleFavorite(pattern) {
  const next = new Set(favoriteIds.value)
  const isFavorite = next.has(pattern.id)
  isFavorite ? next.delete(pattern.id) : next.add(pattern.id)
  favoriteIds.value = next
  showToast(isFavorite ? '已取消收藏' : '已收藏到你的纹样夹')
}

function openFilePicker() {
  fileInput.value?.click()
}

function handleDrop(event) {
  const file = event.dataTransfer?.files?.[0]
  if (file) handleFile(file)
}

function handleFileInput(event) {
  const file = event.target.files?.[0]
  if (file) handleFile(file)
}

function extractPatternImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      const maxSize = 640
      const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight))
      const width = Math.max(1, Math.round(image.naturalWidth * scale))
      const height = Math.max(1, Math.round(image.naturalHeight * scale))
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const context = canvas.getContext('2d', { willReadFrequently: true })
      context.drawImage(image, 0, 0, width, height)
      const imageData = context.getImageData(0, 0, width, height)
      const { data } = imageData
      const samplePoints = [
        [0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1],
        [Math.floor(width / 2), 0], [Math.floor(width / 2), height - 1],
      ]
      const background = samplePoints.reduce((total, [x, y]) => {
        const index = (y * width + x) * 4
        return [total[0] + data[index], total[1] + data[index + 1], total[2] + data[index + 2]]
      }, [0, 0, 0]).map((value) => value / samplePoints.length)

      for (let index = 0; index < data.length; index += 4) {
        const distance = Math.hypot(data[index] - background[0], data[index + 1] - background[1], data[index + 2] - background[2])
        if (distance < 42) data[index + 3] = 0
        else if (distance < 70) data[index + 3] = Math.round(((distance - 42) / 28) * 255)
      }
      context.putImageData(imageData, 0, 0)
      resolve(canvas.toDataURL('image/png'))
    }
    image.onerror = reject
    image.src = dataUrl
  })
}

function handleFile(file) {
  if (!file.type.startsWith('image/')) {
    showFileAlert('仅支持图片文件（JPG、PNG、WebP 等）')
    return
  }

  window.clearTimeout(analysisTimer)
  uploadedFileName.value = file.name
  uploadStatus.value = '正在读取本地图片...'
  isAnalyzing.value = true
  const reader = new FileReader()
  reader.onload = (event) => {
    uploadedPreview.value = String(event.target.result || '')
    extractedPreview.value = ''
    uploadStatus.value = '正在提取纹样轮廓...'
    analysisTimer = window.setTimeout(async () => {
      try {
        extractedPreview.value = await extractPatternImage(uploadedPreview.value)
        uploadStatus.value = '本地提取完成，可保存到纹样库'
      } catch {
        uploadStatus.value = '提取失败，已保留原图，请重试'
      } finally {
        isAnalyzing.value = false
      }
    }, 900)
  }
  reader.onerror = () => {
    uploadStatus.value = '图片读取失败，请重试'
    isAnalyzing.value = false
  }
  reader.readAsDataURL(file)
}

function resetUpload() {
  window.clearTimeout(analysisTimer)
  uploadedPreview.value = ''
  extractedPreview.value = ''
  uploadedFileName.value = ''
  uploadStatus.value = '等待上传图片'
  isAnalyzing.value = false
  if (fileInput.value) fileInput.value.value = ''
}

function saveUpload() {
  if (!extractedPreview.value) {
    showToast('请先完成图片提取')
    return
  }
  uploadedPattern.value = {
    ...demoPatterns[0],
    id: 'uploaded-pattern',
    name: uploadedFileName.value.replace(/\.[^.]+$/, '') || '我的纹样',
    categoryName: '我的采集',
    meaning: '本次上传并提取的自定义纹样',
    image: extractedPreview.value,
  }
  selectedPatternId.value = uploadedPattern.value.id
  showToast(`「${uploadedPattern.value.name}」已用于 3D 创作`)
  goTo('studio')
}

function displayValue(key) {
  if (key === 'scale') return `${params.scale}%`
  if (key === 'rotate') return `${params.rotate}°`
  if (key === 'patternSize') return `${params.patternSize}%`
  if (key === 'repeatX') return `${Number(params.repeatX).toFixed(1)}×`
  if (key === 'gloss') return `${params.gloss}%`
  return params[key]
}

function getSurfaceFinish(kind) {
  const gloss = params.gloss / 100
  const finishes = {
    ceramic: { roughness: THREE.MathUtils.lerp(0.62, 0.12, gloss), clearcoat: 0.72, clearcoatRoughness: THREE.MathUtils.lerp(0.34, 0.08, gloss) },
    paper: { roughness: THREE.MathUtils.lerp(0.94, 0.64, gloss), clearcoat: 0.02, clearcoatRoughness: 0.72 },
    textile: { roughness: THREE.MathUtils.lerp(1, 0.76, gloss), clearcoat: 0, clearcoatRoughness: 1 },
    polymer: { roughness: THREE.MathUtils.lerp(0.58, 0.2, gloss), clearcoat: 0.46, clearcoatRoughness: THREE.MathUtils.lerp(0.32, 0.12, gloss) },
  }
  return finishes[kind] || finishes.ceramic
}

function createSurfaceMaterial(kind = 'ceramic', options = {}) {
  const finish = getSurfaceFinish(kind)
  const material = new THREE.MeshPhysicalMaterial({
    color: options.color ?? 0xffffff,
    map: options.useTexture === false ? null : texture || null,
    roughness: finish.roughness,
    metalness: options.metalness ?? 0,
    clearcoat: finish.clearcoat,
    clearcoatRoughness: finish.clearcoatRoughness,
    ior: kind === 'ceramic' ? 1.47 : 1.42,
    sheen: kind === 'textile' ? 0.68 : 0,
    sheenColor: kind === 'textile' ? new THREE.Color(0xf4ead9) : new THREE.Color(0x000000),
    sheenRoughness: kind === 'textile' ? 0.82 : 1,
    side: options.side ?? THREE.FrontSide,
  })
  material.userData.studioSurface = true
  material.userData.surfaceKind = kind
  return material
}

function createVase() {
  const group = new THREE.Group()
  const silhouette = new THREE.SplineCurve([
    new THREE.Vector2(0.215, -1.22),
    new THREE.Vector2(0.275, -1.17),
    new THREE.Vector2(0.315, -0.98),
    new THREE.Vector2(0.39, -0.72),
    new THREE.Vector2(0.485, -0.38),
    new THREE.Vector2(0.515, -0.08),
    new THREE.Vector2(0.485, 0.18),
    new THREE.Vector2(0.405, 0.43),
    new THREE.Vector2(0.29, 0.65),
    new THREE.Vector2(0.225, 0.82),
    new THREE.Vector2(0.205, 1.05),
    new THREE.Vector2(0.215, 1.24),
  ])
  const bodyGeometry = new THREE.LatheGeometry(silhouette.getPoints(64), 128)
  bodyGeometry.computeVertexNormals()
  const body = new THREE.Mesh(bodyGeometry, createSurfaceMaterial('ceramic'))
  body.rotation.y = Math.PI

  const foot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.23, 0.205, 0.075, 96),
    createSurfaceMaterial('ceramic', { color: 0xf8f1e5, useTexture: false }),
  )
  foot.position.y = -1.245

  const footRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.205, 0.022, 20, 96),
    createSurfaceMaterial('ceramic', { color: 0xf5ecdf, useTexture: false }),
  )
  footRing.rotation.x = Math.PI / 2
  footRing.position.y = -1.282

  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(0.19, 0.027, 24, 128),
    createSurfaceMaterial('ceramic', { color: 0xfffbf2, useTexture: false }),
  )
  rim.rotation.x = Math.PI / 2
  rim.position.y = 1.245

  const cavityMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x172435,
    roughness: 0.78,
    metalness: 0,
    side: THREE.DoubleSide,
  })
  const innerNeck = new THREE.Mesh(
    new THREE.CylinderGeometry(0.168, 0.178, 0.54, 96, 1, true),
    cavityMaterial,
  )
  innerNeck.position.y = 1.0

  const cavityBase = new THREE.Mesh(
    new THREE.CircleGeometry(0.178, 96),
    cavityMaterial.clone(),
  )
  cavityBase.rotation.x = -Math.PI / 2
  cavityBase.position.y = 0.735

  group.add(body, foot, footRing, rim, innerNeck, cavityBase)
  return group
}

function createCup() {
  const group = new THREE.Group()
  const profile = new THREE.SplineCurve([
    new THREE.Vector2(0.2, -0.6),
    new THREE.Vector2(0.31, -0.56),
    new THREE.Vector2(0.39, -0.34),
    new THREE.Vector2(0.42, 0.04),
    new THREE.Vector2(0.4, 0.3),
  ])
  const cup = new THREE.Mesh(new THREE.LatheGeometry(profile.getPoints(34), 96), createSurfaceMaterial('ceramic'))
  const saucer = new THREE.Mesh(
    new THREE.CylinderGeometry(0.53, 0.42, 0.055, 72),
    createSurfaceMaterial('ceramic', { color: 0xf3eadc, useTexture: false }),
  )
  saucer.position.y = -0.645
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(0.39, 0.026, 18, 96),
    createSurfaceMaterial('ceramic', { color: 0xfffbf2, useTexture: false }),
  )
  rim.rotation.x = Math.PI / 2
  rim.position.y = 0.31
  const inner = new THREE.Mesh(
    new THREE.CircleGeometry(0.365, 72),
    new THREE.MeshPhysicalMaterial({ color: 0x172435, roughness: 0.76, side: THREE.DoubleSide }),
  )
  inner.rotation.x = -Math.PI / 2
  inner.position.y = 0.292
  const handleCurve = new THREE.CubicBezierCurve3(
    new THREE.Vector3(0.37, 0.18, 0),
    new THREE.Vector3(0.78, 0.2, 0),
    new THREE.Vector3(0.78, -0.4, 0),
    new THREE.Vector3(0.34, -0.44, 0),
  )
  const handle = new THREE.Mesh(
    new THREE.TubeGeometry(handleCurve, 56, 0.052, 16, false),
    createSurfaceMaterial('ceramic', { color: 0xf7efe3, useTexture: false }),
  )
  group.add(cup, saucer, rim, inner, handle)
  return group
}

function createBox() {
  const group = new THREE.Group()
  const body = new THREE.Mesh(
    new RoundedBoxGeometry(1.7, 0.56, 1.28, 4, 0.055),
    createSurfaceMaterial('paper', { color: 0xf6eedf }),
  )
  const lid = new THREE.Mesh(
    new RoundedBoxGeometry(1.78, 0.15, 1.35, 4, 0.045),
    createSurfaceMaterial('paper', { color: 0xfff7e9 }),
  )
  lid.position.y = 0.35
  const seal = new THREE.Mesh(
    new THREE.CylinderGeometry(0.105, 0.105, 0.025, 40),
    new THREE.MeshStandardMaterial({ color: 0xc95839, roughness: 0.7 }),
  )
  seal.position.set(0, 0.435, 0)
  group.add(body, lid, seal)
  return group
}

function createSilk() {
  const geometry = new THREE.PlaneGeometry(2.35, 2.15, 36, 36)
  const position = geometry.attributes.position
  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index)
    const y = position.getY(index)
    position.setZ(index, Math.sin(x * 2.6) * 0.06 + Math.sin(y * 3.2) * 0.05 - Math.pow(Math.max(Math.abs(x / 1.18), Math.abs(y / 1.08)), 2) * 0.16)
  }
  geometry.computeVertexNormals()
  const material = createSurfaceMaterial('textile', { color: 0xf8f1e6, side: THREE.DoubleSide })
  return new THREE.Mesh(geometry, material)
}

function createPhone() {
  const group = new THREE.Group()
  const frame = new THREE.Mesh(
    new RoundedBoxGeometry(0.88, 1.72, 0.13, 5, 0.11),
    createSurfaceMaterial('polymer', { color: 0x183047, useTexture: false }),
  )
  const caseFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.79, 1.61),
    createSurfaceMaterial('polymer', { color: 0xffffff }),
  )
  caseFace.position.z = 0.071
  const cameraIsland = new THREE.Mesh(
    new RoundedBoxGeometry(0.28, 0.34, 0.035, 4, 0.055),
    createSurfaceMaterial('polymer', { color: 0x10253a, useTexture: false }),
  )
  cameraIsland.position.set(-0.23, 0.56, 0.088)
  const lensMaterial = new THREE.MeshPhysicalMaterial({ color: 0x08111b, metalness: 0.45, roughness: 0.18 })
  const lensTop = new THREE.Mesh(new THREE.CircleGeometry(0.062, 32), lensMaterial)
  lensTop.position.set(-0.23, 0.64, 0.108)
  const lensBottom = new THREE.Mesh(new THREE.CircleGeometry(0.062, 32), lensMaterial.clone())
  lensBottom.position.set(-0.23, 0.49, 0.108)
  group.add(frame, caseFace, cameraIsland, lensTop, lensBottom)
  return group
}

function buildModel() {
  if (!scene) return
  if (modelGroup) {
    scene.remove(modelGroup)
    modelGroup.traverse((object) => {
      object.geometry?.dispose()
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material]
        materials.forEach((material) => material.dispose())
      }
    })
  }
  modelGroup = new THREE.Group()
  const model = { vase: createVase, cup: createCup, box: createBox, silk: createSilk, phone: createPhone }[selectedModel.value]()
  model.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true
      object.receiveShadow = true
    }
  })
  modelMinY = new THREE.Box3().setFromObject(model).min.y
  modelGroup.add(model)
  scene.add(modelGroup)
  updateSceneParams()
  modelGroup.traverse((object) => {
    const materials = Array.isArray(object.material) ? object.material : object.material ? [object.material] : []
    materials.forEach((material) => {
      material.wireframe = wireframeMode.value
      material.needsUpdate = true
    })
  })
}

function updateSceneParams() {
  if (modelGroup) {
    const scale = params.scale / 100
    modelGroup.scale.setScalar(scale)
    modelGroup.rotation.y = (params.rotate * Math.PI) / 180
    modelGroup.position.y = GROUND_Y - modelMinY * scale + params.offset / 60
  }
  modelGroup?.traverse((object) => {
    const materials = Array.isArray(object.material) ? object.material : object.material ? [object.material] : []
    materials.forEach((material) => {
      if (material.isMeshStandardMaterial && material.userData.studioSurface) {
        const finish = getSurfaceFinish(material.userData.surfaceKind)
        material.roughness = finish.roughness
        if (material.isMeshPhysicalMaterial) {
          material.clearcoat = finish.clearcoat
          material.clearcoatRoughness = finish.clearcoatRoughness
        }
        material.needsUpdate = true
      }
    })
  })
  if (texture) {
    const sizeRepeat = 100 / params.patternSize
    texture.repeat.set(params.repeatX * sizeRepeat, sizeRepeat)
    texture.offset.set(params.textureOffsetX / 100, params.textureOffsetY / 100)
    texture.needsUpdate = true
  }
}

function handleCanvasPointerDown(event) {
  if (!dragTextureMode.value) return
  textureDrag.active = true
  textureDrag.x = event.clientX
  textureDrag.y = event.clientY
  event.currentTarget.setPointerCapture?.(event.pointerId)
}

function handleCanvasPointerMove(event) {
  if (!textureDrag.active) return
  params.textureOffsetX -= (event.clientX - textureDrag.x) * 0.35
  params.textureOffsetY += (event.clientY - textureDrag.y) * 0.35
  params.textureOffsetX = Math.max(-100, Math.min(100, params.textureOffsetX))
  params.textureOffsetY = Math.max(-100, Math.min(100, params.textureOffsetY))
  textureDrag.x = event.clientX
  textureDrag.y = event.clientY
}

function handleCanvasPointerUp() {
  textureDrag.active = false
}

function createIndigoTexture(image, pattern) {
  const size = 1024
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d', { willReadFrequently: true })
  const crop = THREE.MathUtils.clamp(pattern?.textureCrop || 0, 0, 0.3)
  const imageWidth = image.naturalWidth || image.width
  const imageHeight = image.naturalHeight || image.height
  const sourceX = imageWidth * crop
  const sourceY = imageHeight * crop
  const sourceWidth = imageWidth * (1 - crop * 2)
  const sourceHeight = imageHeight * (1 - crop * 2)
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, size, size)
  const imageData = context.getImageData(0, 0, size, size)
  const { data } = imageData
  const ivory = [246, 240, 228]
  const indigo = [16, 54, 92]
  const useLightMotif = pattern?.texturePolarity === 'light'

  for (let index = 0; index < data.length; index += 4) {
    const sourceAlpha = data[index + 3] / 255
    const luminance = (data[index] * 0.2126 + data[index + 1] * 0.7152 + data[index + 2] * 0.0722) / 255
    const lightness = THREE.MathUtils.smoothstep(luminance, 0.28, 0.8)
    const motifStrength = (useLightMotif ? lightness : 1 - lightness) * sourceAlpha
    data[index] = Math.round(THREE.MathUtils.lerp(ivory[0], indigo[0], motifStrength))
    data[index + 1] = Math.round(THREE.MathUtils.lerp(ivory[1], indigo[1], motifStrength))
    data[index + 2] = Math.round(THREE.MathUtils.lerp(ivory[2], indigo[2], motifStrength))
    data[index + 3] = 255
  }

  context.putImageData(imageData, 0, 0)
  const processedTexture = new THREE.CanvasTexture(canvas)
  processedTexture.wrapS = THREE.RepeatWrapping
  processedTexture.wrapT = THREE.RepeatWrapping
  processedTexture.colorSpace = THREE.SRGBColorSpace
  processedTexture.anisotropy = renderer ? Math.min(8, renderer.capabilities.getMaxAnisotropy()) : 1
  return processedTexture
}

function createContactShadowTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const context = canvas.getContext('2d')
  const gradient = context.createRadialGradient(256, 128, 8, 256, 128, 235)
  gradient.addColorStop(0, 'rgba(34, 42, 48, .42)')
  gradient.addColorStop(0.34, 'rgba(45, 50, 53, .22)')
  gradient.addColorStop(1, 'rgba(65, 62, 57, 0)')
  context.fillStyle = gradient
  context.fillRect(0, 0, canvas.width, canvas.height)
  return new THREE.CanvasTexture(canvas)
}

function loadSelectedTexture() {
  if (!selectedPattern.value?.image || !scene) return
  const requestId = ++textureRequestId
  const loader = new THREE.TextureLoader()
  loader.load(
    selectedPattern.value.image,
    (nextTexture) => {
      if (requestId !== textureRequestId) {
        nextTexture.dispose()
        return
      }
      const processedTexture = createIndigoTexture(nextTexture.image, selectedPattern.value)
      nextTexture.dispose()
      texture?.dispose()
      texture = processedTexture
      buildModel()
    },
    undefined,
    () => {
      if (requestId !== textureRequestId) return
      texture?.dispose()
      texture = null
      buildModel()
    },
  )
}

function initScene() {
  if (renderer || !canvasHost.value) return
  const width = canvasHost.value.clientWidth || 640
  const height = canvasHost.value.clientHeight || 520
  scene = new THREE.Scene()
  scene.background = new THREE.Color(page.value === 'home' ? 0x102c4d : 0xf4eee4)
  camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100)
  camera.position.set(...modelViewPresets[selectedModel.value].camera)
  renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.VSMShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = page.value === 'home' ? 1.05 : 1.12
  canvasHost.value.appendChild(renderer.domElement)

  scene.add(new THREE.HemisphereLight(page.value === 'home' ? 0xf7f2e8 : 0xfff8ed, page.value === 'home' ? 0x173b64 : 0x607180, 1.05))
  const keyLight = new THREE.DirectionalLight(0xffedd2, page.value === 'home' ? 2.8 : 2.7)
  keyLight.position.set(3.6, 5.2, 4.5)
  keyLight.castShadow = true
  keyLight.shadow.mapSize.set(2048, 2048)
  keyLight.shadow.camera.left = -2.8
  keyLight.shadow.camera.right = 2.8
  keyLight.shadow.camera.top = 3.2
  keyLight.shadow.camera.bottom = -2.4
  keyLight.shadow.bias = -0.00005
  keyLight.shadow.normalBias = 0.025
  keyLight.shadow.radius = 7
  keyLight.shadow.blurSamples = 12
  scene.add(keyLight)

  const fillLight = new THREE.RectAreaLight(0xd8e9f5, page.value === 'home' ? 1.8 : 2.2, 3.2, 4.2)
  fillLight.position.set(-3.4, 1.7, 3.2)
  fillLight.lookAt(0, 0, 0)
  scene.add(fillLight)
  const rimLight = new THREE.DirectionalLight(0xdce9ff, 1.15)
  rimLight.position.set(-2.4, 3.4, -3.2)
  scene.add(rimLight)

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.ShadowMaterial({ opacity: page.value === 'home' ? 0.3 : 0.17 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = GROUND_Y
  ground.receiveShadow = true
  scene.add(ground)

  contactShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: createContactShadowTexture(),
      transparent: true,
      opacity: page.value === 'home' ? 0.38 : 0.25,
      depthWrite: false,
    }),
  )
  contactShadow.rotation.x = -Math.PI / 2
  contactShadow.rotation.z = -0.1
  scene.add(contactShadow)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 3
  controls.maxDistance = 8
  controls.target.set(...modelViewPresets[selectedModel.value].target)
  controls.addEventListener('start', () => { dragTextureMode.value = false })
  resizeObserver = new ResizeObserver(() => {
    if (!renderer || !canvasHost.value) return
    const nextWidth = canvasHost.value.clientWidth
    const nextHeight = canvasHost.value.clientHeight
    camera.aspect = nextWidth / nextHeight
    camera.updateProjectionMatrix()
    renderer.setSize(nextWidth, nextHeight)
  })
  resizeObserver.observe(canvasHost.value)
  renderReady.value = true
  buildModel()
  applyModelView()
  loadSelectedTexture()
  animate()
}

function animate() {
  animationFrame = window.requestAnimationFrame(animate)
  controls?.update()
  renderer?.render(scene, camera)
}

function exportRender() {
  if (!renderer) return
  renderer.render(scene, camera)
  const link = document.createElement('a')
  link.download = `patternx-${selectedPattern.value.name}-${selectedModel.value}.png`
  link.href = renderer.domElement.toDataURL('image/png')
  link.click()
  showToast('渲染图已导出')
}

function disposeScene() {
  textureRequestId += 1
  window.cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  controls?.dispose()
  texture?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
  renderer = null
  scene = null
  camera = null
  controls = null
  modelGroup = null
  contactShadow = null
  texture = null
}

watch(selectedPatternId, () => {
  if (page.value === 'home' || page.value === 'studio') loadSelectedTexture()
})
watch(selectedModel, () => {
  buildModel()
  applyModelView()
})
watch(params, updateSceneParams, { deep: true })
watch(dragTextureMode, (enabled) => {
  if (controls) controls.enabled = !enabled
})
watch(page, (nextPage) => {
  disposeScene()
  renderReady.value = false
  if (nextPage === 'home' || nextPage === 'studio') nextTick(initScene)
})

onMounted(() => {
  if (page.value === 'home' || page.value === 'studio') nextTick(initScene)
})

onBeforeUnmount(() => {
  window.clearTimeout(toastTimer)
  window.clearTimeout(fileAlertTimer)
  window.clearTimeout(analysisTimer)
  disposeScene()
})
</script>

<template>
  <section class="patternx-page">
    <div class="patternx-shell">
      <main class="patternx-main">
        <nav class="patternx-workspace-nav" aria-label="纹脉工坊工作区">
          <strong>纹脉工坊</strong>
          <div role="tablist" aria-label="工坊功能">
            <button v-for="item in [{ key: 'home', label: '工坊首页' }, { key: 'studio', label: '3D 创作' }, { key: 'upload', label: '智能采集' }]" :key="item.key" type="button" role="tab" :aria-selected="page === item.key" :class="{ active: page === item.key }" @click="goTo(item.key)">
              {{ item.label }}
            </button>
          </div>
        </nav>

        <section v-if="page === 'home'" class="patternx-home">
          <section class="patternx-landing-hero">
            <div class="patternx-landing-copy">
              <p class="patternx-kicker">HERITAGE · PATTERN · FUTURE</p>
              <h1>让千年纹样<br />重新流动<span class="patternx-seal">非<br />遗</span></h1>
              <div class="patternx-landing-subtitle"><i></i><strong>非遗纹样数字资产平台</strong><i></i></div>
              <p class="patternx-landing-description">采集、溯源、再设计，让传统纹样进入现代创作。<br />以数字之名，传承东方美学，赋能当代设计。</p>
              <div class="patternx-actions landing-actions">
                <button class="patternx-button primary" type="button" @click="goAnimalLibrary">从蓝印纹库选纹 <ArrowRight :size="17" /></button>
                <button class="patternx-button secondary" type="button" @click="goTo('studio')">进入 3D 工坊 <Box :size="17" /></button>
              </div>
            </div>

            <div class="patternx-live-preview">
              <div class="patternx-preview-badge"><Box :size="16" /> 3D 实时预览</div>
              <div class="patternx-preview-rings" aria-hidden="true"><i></i><i></i></div>
              <div
                ref="canvasHost"
                class="patternx-landing-canvas patternx-canvas"
                @pointerdown="handleCanvasPointerDown"
                @pointermove="handleCanvasPointerMove"
                @pointerup="handleCanvasPointerUp"
                @pointercancel="handleCanvasPointerUp"
                @pointerleave="handleCanvasPointerUp"
              >
                <div v-if="!renderReady" class="patternx-canvas-loading"><span class="patternx-spinner"></span><p>正在准备 3D 预览...</p></div>
              </div>

              <aside class="patternx-preview-info">
                <div><h2>{{ selectedPattern.name }}</h2><button type="button" aria-label="收藏纹样" @click="toggleFavorite(selectedPattern)"><Heart :size="18" :fill="favoriteIds.has(selectedPattern.id) ? 'currentColor' : 'none'" /></button></div>
                <p><span>年代</span>{{ selectedPattern.era }}</p>
                <p><span>分类</span>{{ selectedPattern.categoryName }}</p>
                <p><span>寓意</span>{{ selectedPattern.meaning }}</p>
                <p><span>应用</span>{{ selectedPattern.modernUse.slice(0, 2).join(' / ') }}</p>
              </aside>

              <button class="patternx-pattern-switch" type="button" @click="cycleLandingPattern">
                <img :src="selectedPattern.image" :alt="selectedPattern.name" />
                <span>更换纹样</span>
              </button>

              <div class="patternx-preview-tools">
                <button type="button" title="旋转模型" @click="params.rotate = (params.rotate + 45) % 360"><RotateCw :size="18" /><span>旋转</span></button>
                <button type="button" title="重置视角" @click="resetSceneView"><MousePointer2 :size="18" /><span>重置</span></button>
                <button type="button" title="全屏预览" @click="toggleSceneFullscreen"><Maximize2 :size="18" /><span>全屏</span></button>
              </div>
              <p class="patternx-preview-hint"><MousePointer2 :size="14" /> 拖拽旋转 · 滚轮缩放 · 点击更换纹样</p>
            </div>
          </section>

          <section class="patternx-feature-band" aria-label="平台功能">
            <button v-for="feature in landingFeatures" :key="feature.title" type="button" @click="useLandingFeature(feature)">
              <span class="patternx-feature-icon"><component :is="feature.icon" :size="28" /></span>
              <span><strong>{{ feature.title }}</strong><small>{{ feature.description }}</small><em>{{ feature.action }} <ArrowRight :size="14" /></em></span>
            </button>
          </section>

          <section class="patternx-popular-section">
            <div class="patternx-section-title"><div><h2>动物纹创作精选</h2><p>图片与蓝印纹库保持一致</p></div><button type="button" class="patternx-text-button" @click="goAnimalLibrary">查看动物纹 <ArrowRight :size="15" /></button></div>
            <div class="patternx-popular-grid">
              <article v-for="pattern in landingPatterns" :key="pattern.id" class="patternx-popular-card" @click="openPatternDetail(pattern)">
                <button type="button" class="patternx-popular-image" @click.stop="openPatternDetail(pattern)"><img :src="pattern.image" :alt="pattern.name" /></button>
                <div><h3>{{ pattern.name }}</h3><small>{{ pattern.era }} · {{ pattern.categoryName }}</small><p>{{ pattern.meaning }}</p><footer><span><Heart :size="14" /> {{ pattern.likes }}</span><button type="button" aria-label="查看纹样详情" @click.stop="openPatternDetail(pattern)"><ArrowRight :size="15" /></button></footer></div>
              </article>
            </div>
          </section>
        </section>

        <section v-else-if="page === 'upload'" class="patternx-subpage">
          <header class="patternx-page-header compact-header"><p class="patternx-kicker">COLLECT / EXTRACT / PRESERVE</p><h1>上传纹样</h1><p>拍摄或上传一张带有传统纹样的图片，开始你的数字采集。</p></header>
          <div v-if="!uploadedPreview" class="patternx-upload-zone" role="button" tabindex="0" @click="openFilePicker" @keydown.enter="openFilePicker" @dragover.prevent @drop.prevent="handleDrop">
            <UploadCloud :size="42" /><h2>拖拽图片到这里，或点击上传</h2><p>支持 JPG、PNG 等常见图片格式，建议纹样清晰、主体完整</p><span>选择本地文件</span>
          </div>
          <input ref="fileInput" class="patternx-hidden-input" type="file" accept="image/*" @change="handleFileInput" />
          <div v-if="uploadedPreview" class="patternx-upload-result">
            <div class="patternx-card upload-preview-card"><div class="patternx-card-title"><ImagePlus :size="18" /> 原图</div><div class="patternx-image-preview"><img :src="uploadedPreview" :alt="uploadedFileName" /></div></div>
            <div class="patternx-card upload-preview-card"><div class="patternx-card-title"><Sparkles :size="18" /> 纹样提取结果</div><div class="patternx-image-preview extraction"><img v-if="extractedPreview" :src="extractedPreview" alt="纹样提取结果" /><span v-else class="patternx-spinner"></span></div><p class="patternx-status" :class="{ complete: !isAnalyzing }">{{ uploadStatus }}</p></div>
          </div>
          <div v-if="uploadedPreview" class="patternx-actions upload-actions"><button class="patternx-button primary" type="button" :disabled="isAnalyzing" @click="saveUpload">用于 3D 创作 <Check :size="17" /></button><button class="patternx-button secondary" type="button" @click="resetUpload">重新上传 <X :size="17" /></button></div>
        </section>

        <section v-else class="patternx-subpage studio-page">
          <header class="patternx-studio-header">
            <p class="patternx-kicker">TEXTURE / FORM / MOTION</p>
            <h1>3D 工坊</h1>
            <p>选择纹样和载体，实时预览三维效果。拖拽画布旋转载体，滚轮缩放查看细节。</p>
          </header>

          <div class="patternx-studio-layout">
            <aside class="patternx-sidebar">
              <section class="patternx-studio-panel pattern-panel">
                <div class="patternx-card-title"><Sparkles :size="18" /> 选择纹样</div>
                <div class="patternx-studio-patterns">
                  <button v-for="pattern in studioPatterns" :key="pattern.id" type="button" :class="{ selected: selectedPatternId === pattern.id }" @click="selectPattern(pattern)">
                    <span class="patternx-mini-thumb"><img v-if="pattern.image" :src="pattern.image" :alt="pattern.name" /></span>
                    <span>{{ pattern.name }}</span>
                    <Check v-if="selectedPatternId === pattern.id" :size="15" />
                  </button>
                </div>
                <button class="patternx-library-return" type="button" @click="goAnimalLibrary"><ArrowLeft :size="14" /> 返回蓝印纹库选纹</button>
              </section>

              <section class="patternx-studio-panel">
                <div class="patternx-card-title"><Package :size="18" /> 选择载体</div>
                <div class="patternx-model-grid">
                  <button v-for="model in modelOptions" :key="model.key" type="button" :class="{ selected: selectedModel === model.key }" @click="selectedModel = model.key">
                    <component :is="model.icon" :size="22" /><span>{{ model.label }}</span>
                  </button>
                </div>
              </section>

              <section class="patternx-studio-panel parameter-panel">
                <div class="patternx-card-title"><ScanLine :size="18" /> 调整参数</div>
                <label v-for="item in studioParameters" :key="item.key" class="patternx-slider">
                  <span>{{ item.label }}</span>
                  <input v-model.number="params[item.key]" type="range" :min="item.min" :max="item.max" :step="item.step" />
                  <output>{{ displayValue(item.key) }}</output>
                </label>
              </section>
            </aside>

            <div class="patternx-studio-main">
              <div
                ref="canvasHost"
                class="patternx-canvas studio-workspace"
                :class="[`model-${selectedModel}`, { 'texture-drag-active': dragTextureMode }]"
                @pointerdown="handleCanvasPointerDown"
                @pointermove="handleCanvasPointerMove"
                @pointerup="handleCanvasPointerUp"
                @pointercancel="handleCanvasPointerUp"
                @pointerleave="handleCanvasPointerUp"
              >
                <div v-if="!renderReady" class="patternx-canvas-loading"><span class="patternx-spinner"></span><p>正在准备 3D 工坊...</p></div>

                <div class="studio-top-tools" aria-label="场景工具">
                  <button type="button" title="重置场景" aria-label="重置场景" @pointerdown.stop @click="resetSceneView"><Undo2 :size="19" /></button>
                  <i></i>
                  <button type="button" title="实体视图" aria-label="实体视图" :class="{ active: !wireframeMode }" @pointerdown.stop @click="wireframeMode && toggleWireframe()"><Box :size="18" /></button>
                  <button type="button" title="线框视图" aria-label="线框视图" :class="{ active: wireframeMode }" @pointerdown.stop @click="toggleWireframe"><ScanLine :size="18" /></button>
                  <i></i>
                  <button type="button" title="全屏预览" aria-label="全屏预览" @pointerdown.stop @click="toggleSceneFullscreen"><Maximize2 :size="19" /></button>
                </div>

                <div class="studio-side-tools" aria-label="视图控制">
                  <button type="button" title="放大" aria-label="放大" @pointerdown.stop @click="zoomScene(-1)"><ZoomIn :size="19" /><span>缩放</span></button>
                  <button type="button" title="缩小" aria-label="缩小" @pointerdown.stop @click="zoomScene(1)"><ZoomOut :size="19" /><span>缩小</span></button>
                  <button type="button" title="旋转 45 度" aria-label="旋转 45 度" @pointerdown.stop @click="params.rotate = (params.rotate + 45) % 360"><RotateCw :size="19" /><span>旋转</span></button>
                  <button type="button" :title="dragTextureMode ? '完成纹样平移' : '平移纹样'" :aria-label="dragTextureMode ? '完成纹样平移' : '平移纹样'" :class="{ active: dragTextureMode }" @pointerdown.stop @click="dragTextureMode = !dragTextureMode"><Move :size="19" /><span>{{ dragTextureMode ? '完成' : '纹样' }}</span></button>
                  <button type="button" title="复位" aria-label="复位" @pointerdown.stop @click="resetSceneView"><MousePointer2 :size="19" /><span>复位</span></button>
                </div>

                <div class="patternx-canvas-label">
                  <div><strong>{{ selectedPattern.name }}</strong><small>{{ modelOptions.find((model) => model.key === selectedModel)?.label }} · 实时预览</small></div>
                  <img :src="selectedPattern.image" :alt="selectedPattern.name" />
                </div>
              </div>

              <div class="patternx-studio-footer">
                <div><strong>{{ selectedPattern.name }}</strong><span>{{ selectedPattern.meaning }}</span><i></i></div>
                <button class="patternx-button primary" type="button" @click="exportRender"><Download :size="18" /> 导出渲染图</button>
              </div>
            </div>
          </div>

          <footer class="patternx-capability-band" aria-label="工坊能力">
            <article v-for="item in studioCapabilities" :key="item.title">
              <span><component :is="item.icon" :size="24" /></span>
              <div><strong>{{ item.title }}</strong><small>{{ item.description }}</small></div>
            </article>
          </footer>
        </section>
      </main>
    </div>

    <Transition name="file-alert">
      <div v-if="fileAlert" class="patternx-file-alert" role="alert">
        <span class="patternx-file-alert-icon"><CircleAlert :size="18" /></span>
        <span class="patternx-file-alert-message">{{ fileAlert }}</span>
        <button type="button" aria-label="关闭文件格式提示" @click="dismissFileAlert"><X :size="20" /></button>
      </div>
    </Transition>
    <div v-if="toast" class="patternx-toast" role="status">{{ toast }}</div>
  </section>
</template>

<style scoped>
.patternx-page {
  --patternx-bg: #fdf8f3;
  --patternx-bg2: #f5ede4;
  --patternx-ink: #2c1810;
  --patternx-muted: #8c7b6b;
  --patternx-rule: #d4c4b0;
  --patternx-accent: #b85c38;
  --patternx-green: #5a7d5a;
  --patternx-gold: #c9a227;
  min-height: 100vh;
  color: var(--patternx-ink);
  background: var(--patternx-bg);
  font-family: "Instrument Sans", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}

.patternx-shell { width: min(1200px, 100%); min-height: 100vh; margin: 0 auto; background: var(--patternx-bg); }
.patternx-text-button { border: 0; color: inherit; background: transparent; cursor: pointer; }
.patternx-main { padding: 28px; }
.patternx-page-header { margin-bottom: 24px; }
.patternx-page-header h1 { margin: 10px 0 12px; font-family: Georgia, "Songti SC", serif; font-size: clamp(38px, 5vw, 62px); line-height: 1.08; letter-spacing: -.03em; }
.patternx-page-header h1 i { color: var(--patternx-accent); font-style: normal; }
.patternx-page-header p:not(.patternx-kicker) { max-width: 620px; color: var(--patternx-muted); line-height: 1.8; }
.patternx-kicker { margin: 0; color: var(--patternx-accent); font-size: 11px; font-weight: 800; letter-spacing: .14em; }
.compact-header { max-width: 760px; margin: 0 auto 30px 0; }
.compact-header h1 { font-size: clamp(36px, 5vw, 52px); }
.patternx-feature-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 26px 0; }
.patternx-feature-list article { display: grid; gap: 7px; min-height: 130px; padding: 15px; border: 1px solid var(--patternx-rule); border-radius: 11px; background: #fff; }
.patternx-feature-list svg { color: var(--patternx-accent); }
.patternx-feature-list strong { font-size: 14px; }
.patternx-feature-list span { color: var(--patternx-muted); font-size: 12px; line-height: 1.5; }
.patternx-actions { display: flex; flex-wrap: wrap; gap: 10px; }
.patternx-button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 0 17px; border: 1px solid transparent; border-radius: 8px; cursor: pointer; font-weight: 800; transition: transform .2s, background .2s, box-shadow .2s; }
.patternx-button:hover { transform: translateY(-2px); }
.patternx-button.primary { color: #fff; background: var(--patternx-accent); box-shadow: 0 9px 20px rgba(184, 92, 56, .2); }
.patternx-button.primary:hover { background: #a04e2e; }
.patternx-button.secondary { border-color: var(--patternx-rule); color: var(--patternx-ink); background: var(--patternx-bg2); }
.patternx-button:disabled { cursor: not-allowed; opacity: .55; transform: none; }
.patternx-card { border: 1px solid var(--patternx-rule); border-radius: 12px; background: #fff; }
.hot-card { padding: 20px; }.patternx-section-title { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 18px; }.patternx-section-title h2 { margin-top: 4px; font-family: Georgia, serif; font-size: 25px; }.patternx-text-button { color: var(--patternx-accent); font-weight: 800; }.patternx-text-button span { font-size: 18px; }
.patternx-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }.patternx-grid.compact { grid-template-columns: repeat(4, 1fr); }
.patternx-pattern-card { min-width: 0; overflow: hidden; border: 1px solid var(--patternx-rule); border-radius: 10px; color: inherit; background: #fff; text-align: left; cursor: pointer; transition: transform .2s, box-shadow .2s; }.patternx-pattern-card:hover { transform: translateY(-3px); box-shadow: 0 9px 20px rgba(65,45,30,.1); }
.patternx-thumb { position: relative; display: flex; width: 100%; aspect-ratio: 1; align-items: center; justify-content: center; overflow: hidden; border: 0; background: var(--patternx-bg2); cursor: pointer; }.patternx-thumb img { width: 100%; height: 100%; object-fit: cover; }.patternx-pattern-info { display: grid; gap: 6px; padding: 12px; }.patternx-pattern-info strong, .patternx-pattern-info h3 { overflow: hidden; margin: 0; font-size: 14px; text-overflow: ellipsis; white-space: nowrap; }.patternx-pattern-info small { color: var(--patternx-muted); font-size: 12px; }.patternx-tags { display: flex; flex-wrap: wrap; gap: 6px; color: var(--patternx-muted); font-size: 11px; }.accent-tag { padding: 2px 7px; border-radius: 999px; color: #fff; background: var(--patternx-accent); }
.patternx-subpage { max-width: 1160px; margin: 0 auto; }.patternx-upload-zone { display: grid; justify-items: center; gap: 10px; padding: 78px 28px; border: 2px dashed var(--patternx-rule); border-radius: 13px; color: var(--patternx-muted); background: var(--patternx-bg2); text-align: center; cursor: pointer; transition: border-color .2s, background .2s; }.patternx-upload-zone:hover, .patternx-upload-zone:focus-visible { border-color: var(--patternx-accent); background: #fffaf5; outline: none; }.patternx-upload-zone svg { color: var(--patternx-accent); }.patternx-upload-zone h2 { color: var(--patternx-ink); font-family: Georgia, serif; font-size: 24px; }.patternx-upload-zone p { font-size: 13px; }.patternx-upload-zone span { margin-top: 8px; padding: 8px 14px; border-radius: 7px; color: #fff; background: var(--patternx-accent); font-size: 13px; font-weight: 800; }.patternx-hidden-input { display: none; }.patternx-upload-result { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }.upload-preview-card { padding: 18px; }.patternx-card-title { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; font-weight: 800; }.patternx-card-title svg { color: var(--patternx-accent); }.patternx-image-preview { display: grid; min-height: 320px; place-items: center; overflow: hidden; border-radius: 8px; background: var(--patternx-bg2); }.patternx-image-preview img { max-width: 100%; max-height: 360px; object-fit: contain; }.patternx-image-preview.extraction { background: repeating-conic-gradient(#f5f0eb 0 25%, #fff 0 50%) 50% / 20px 20px; }.patternx-status { margin: 12px 0 0; color: var(--patternx-muted); font-size: 13px; text-align: center; }.patternx-status.complete { color: var(--patternx-green); font-weight: 700; }.upload-actions { margin-top: 18px; }
.patternx-studio-layout { display: grid; grid-template-columns: 285px minmax(0, 1fr); gap: 18px; align-items: start; }.patternx-sidebar { display: grid; gap: 14px; }.patternx-sidebar .patternx-card { padding: 16px; }.patternx-studio-patterns { display: grid; grid-template-columns: 1fr; gap: 7px; max-height: 285px; overflow: auto; }.patternx-studio-patterns button { position: relative; display: grid; grid-template-columns: 38px 1fr auto; align-items: center; gap: 9px; min-width: 0; padding: 6px; border: 1px solid transparent; border-radius: 7px; color: var(--patternx-ink); background: var(--patternx-bg2); cursor: pointer; font-size: 11px; text-align: left; }.patternx-studio-patterns button.selected { border-color: var(--patternx-accent); background: #fff4ed; }.patternx-studio-patterns button > span:last-of-type { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.patternx-studio-patterns button svg { color: var(--patternx-accent); }.patternx-mini-thumb { display: block; width: 38px; height: 38px; overflow: hidden; border-radius: 5px; background: var(--patternx-bg2); }.patternx-mini-thumb img { width: 100%; height: 100%; object-fit: cover; }.patternx-model-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; }.patternx-model-grid button { display: grid; justify-items: center; gap: 5px; padding: 10px 4px; border: 1px solid var(--patternx-rule); border-radius: 7px; color: var(--patternx-muted); background: #fff; cursor: pointer; font-size: 11px; }.patternx-model-grid button.selected { color: #fff; border-color: var(--patternx-accent); background: var(--patternx-accent); }.patternx-slider { display: grid; grid-template-columns: 62px 1fr 38px; align-items: center; gap: 8px; margin: 12px 0; color: var(--patternx-muted); font-size: 11px; }.patternx-slider input { width: 100%; accent-color: var(--patternx-accent); }.patternx-slider output { color: var(--patternx-ink); font-family: ui-monospace, monospace; text-align: right; }.patternx-studio-main { min-width: 0; }.patternx-canvas { position: relative; min-height: 590px; overflow: hidden; border-radius: 13px; background: #f0e8dc; box-shadow: inset 0 0 0 1px rgba(120,90,60,.1); }.patternx-canvas canvas { display: block; width: 100%; height: 100%; }.patternx-canvas-loading { position: absolute; inset: 0; z-index: 2; display: grid; place-content: center; justify-items: center; color: var(--patternx-muted); background: #f0e8dc; }.patternx-spinner { display: block; width: 34px; height: 34px; border: 3px solid var(--patternx-rule); border-top-color: var(--patternx-accent); border-radius: 50%; animation: patternx-spin 1s linear infinite; }.patternx-canvas-label { position: absolute; right: 18px; bottom: 18px; z-index: 3; display: grid; gap: 3px; padding: 10px 13px; border: 1px solid rgba(255,255,255,.55); border-radius: 8px; color: var(--patternx-ink); background: rgba(255,250,240,.72); backdrop-filter: blur(8px); }.patternx-canvas-label span { font-weight: 800; }.patternx-canvas-label small { color: var(--patternx-muted); }.patternx-drag-toggle { position: absolute; top: 16px; right: 16px; z-index: 3; padding: 8px 11px; border: 1px solid rgba(44,24,16,.14); border-radius: 7px; color: var(--patternx-muted); background: rgba(255,255,255,.66); cursor: pointer; font-size: 11px; }.patternx-drag-toggle.active { color: #fff; background: var(--patternx-green); }.patternx-studio-footer { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 14px; padding: 15px 0; }.patternx-studio-footer div { display: grid; gap: 4px; }.patternx-studio-footer span { color: var(--patternx-muted); font-size: 13px; }
.patternx-library-return { display: inline-flex; align-items: center; gap: 6px; margin-top: 12px; padding: 8px 0 0; border: 0; color: var(--patternx-accent); background: transparent; font-size: 11px; font-weight: 800; }
.patternx-toast { position: fixed; left: 50%; bottom: 26px; z-index: 200; padding: 11px 17px; border-radius: 8px; color: #fff; background: var(--patternx-ink); box-shadow: 0 8px 25px rgba(0,0,0,.18); transform: translateX(-50%); }
.patternx-file-alert { position: fixed; top: 88px; right: clamp(16px, 4vw, 52px); z-index: 210; display: grid; grid-template-columns: 26px minmax(0, 1fr) 24px; align-items: center; gap: 13px; width: min(560px, calc(100vw - 32px)); min-height: 68px; padding: 12px 15px 12px 16px; border: 1px solid rgba(255,255,255,.1); border-radius: 16px; color: #f2f3f5; background: rgba(30, 32, 34, .96); box-shadow: 0 18px 46px rgba(0,0,0,.26); backdrop-filter: blur(14px); }
.patternx-file-alert-icon { display: grid; width: 24px; height: 24px; place-items: center; border-radius: 50%; color: #fff; background: #ff5b3c; }
.patternx-file-alert-message { min-width: 0; font-size: 16px; font-weight: 700; line-height: 1.55; overflow-wrap: anywhere; }
.patternx-file-alert button { display: grid; width: 30px; height: 30px; place-items: center; padding: 0; border: 0; border-radius: 50%; color: #c7c9cc; background: transparent; cursor: pointer; }
.patternx-file-alert button:hover { color: #fff; background: rgba(255,255,255,.1); }
.file-alert-enter-active, .file-alert-leave-active { transition: opacity .22s ease, transform .22s ease; }
.file-alert-enter-from, .file-alert-leave-to { opacity: 0; transform: translateY(-10px); }

/* Heritage Indigo landing page */
.patternx-page {
  --patternx-bg: #fbf8f2;
  --patternx-bg2: #f2ede5;
  --patternx-ink: #102b49;
  --patternx-muted: #6e6c68;
  --patternx-rule: #ded8ce;
  --patternx-accent: #c34f30;
  --patternx-green: #557963;
  --patternx-gold: #b47b3d;
  padding-top: 74px;
  background:
    linear-gradient(rgba(16, 43, 73, .018) 1px, transparent 1px) 0 0 / 64px 64px,
    #fbf8f2;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.patternx-shell {
  width: 100%;
  background: transparent;
}

.patternx-main {
  width: min(1320px, calc(100% - 48px));
  margin: 0 auto;
  padding: 26px 0 96px;
}

.patternx-workspace-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(16, 43, 73, .12);
}

.patternx-workspace-nav strong {
  color: var(--patternx-ink);
  font-family: "Noto Serif SC", "Songti SC", serif;
  font-size: 18px;
}

.patternx-workspace-nav div {
  display: flex;
  gap: 6px;
}

.patternx-workspace-nav button {
  min-height: 36px;
  padding: 0 13px;
  border: 0;
  border-radius: 6px;
  color: #5f6973;
  background: transparent;
  font-size: 13px;
  font-weight: 800;
}

.patternx-workspace-nav button:hover {
  color: var(--patternx-ink);
  background: rgba(16, 43, 73, .06);
}

.patternx-workspace-nav button.active {
  color: #fff;
  background: var(--patternx-ink);
}

.patternx-landing-hero {
  display: grid;
  grid-template-columns: minmax(330px, .82fr) minmax(580px, 1.28fr);
  gap: clamp(36px, 5vw, 72px);
  align-items: center;
}

.patternx-landing-copy {
  padding-left: 2px;
}

.patternx-landing-copy .patternx-kicker {
  margin-bottom: 20px;
  color: #b16d36;
  font-family: Georgia, serif;
  font-size: 12px;
  letter-spacing: .14em;
}

.patternx-landing-copy h1 {
  position: relative;
  width: fit-content;
  margin: 0;
  color: var(--patternx-ink);
  font-family: "Noto Serif SC", "Songti SC", serif;
  font-size: clamp(54px, 5.4vw, 78px);
  font-weight: 900;
  line-height: 1.15;
}

.patternx-seal {
  position: absolute;
  right: -56px;
  bottom: 8px;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 2px solid var(--patternx-accent);
  border-radius: 50%;
  color: var(--patternx-accent);
  background: rgba(251, 248, 242, .82);
  font-size: 13px;
  line-height: 1;
  transform: rotate(7deg);
}

.patternx-landing-subtitle {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 34px;
  color: var(--patternx-ink);
  font-size: 17px;
  letter-spacing: .08em;
}

.patternx-landing-subtitle i {
  width: 28px;
  height: 1px;
  background: #c18a55;
}

.patternx-landing-description {
  margin: 22px 0 0;
  color: #5f6467;
  font-size: 15px;
  line-height: 1.9;
}

.landing-actions {
  margin-top: 30px;
}

.patternx-button {
  min-height: 48px;
  padding: 0 24px;
  border-radius: 6px;
}

.patternx-button.primary {
  background: var(--patternx-accent);
  box-shadow: 0 12px 26px rgba(195, 79, 48, .18);
}

.patternx-button.secondary {
  border-color: rgba(16, 43, 73, .7);
  color: var(--patternx-ink);
  background: transparent;
}

.patternx-live-preview {
  position: relative;
  min-width: 0;
  height: clamp(520px, 51vw, 650px);
  overflow: hidden;
  border-radius: 18px;
  background: #102c4d;
  box-shadow: 0 28px 60px rgba(16, 43, 73, .2);
}

.patternx-live-preview::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 50% 40%, transparent 24%, rgba(4, 16, 32, .16) 68%, rgba(4, 16, 32, .42));
}

.patternx-landing-canvas {
  position: absolute;
  inset: 0;
  min-height: 0;
  border-radius: 0;
  background: #102c4d;
  box-shadow: none;
}

.patternx-landing-canvas canvas {
  position: relative;
  z-index: 1;
}

.patternx-preview-rings i {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  border: 1px solid rgba(231, 238, 244, .14);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.patternx-preview-rings i:first-child { width: 62%; aspect-ratio: 1; border-style: dashed; }
.patternx-preview-rings i:last-child { width: 86%; aspect-ratio: 1; }

.patternx-preview-badge,
.patternx-preview-info,
.patternx-pattern-switch,
.patternx-preview-tools,
.patternx-preview-hint {
  position: absolute;
  z-index: 5;
}

.patternx-preview-badge {
  top: 24px;
  left: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 8px;
  color: rgba(255,255,255,.9);
  background: rgba(255,255,255,.09);
  backdrop-filter: blur(12px);
  font-size: 13px;
}

.patternx-preview-info {
  top: 72px;
  right: 24px;
  width: 228px;
  padding: 20px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 10px;
  color: #fff;
  background: rgba(11, 29, 51, .72);
  backdrop-filter: blur(16px);
}

.patternx-preview-info > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 13px;
  margin-bottom: 13px;
  border-bottom: 1px solid rgba(255,255,255,.12);
}

.patternx-preview-info h2 { margin: 0; font-family: "Noto Serif SC", serif; font-size: 18px; }
.patternx-preview-info button { padding: 0; border: 0; color: rgba(255,255,255,.8); background: transparent; }
.patternx-preview-info p { display: grid; grid-template-columns: 44px 1fr; gap: 8px; margin: 8px 0; color: rgba(255,255,255,.74); font-size: 12px; line-height: 1.5; }
.patternx-preview-info p span { color: rgba(255,255,255,.44); }

.patternx-pattern-switch {
  bottom: 54px;
  left: 24px;
  display: grid;
  justify-items: center;
  gap: 6px;
  padding: 7px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 9px;
  color: #fff;
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(12px);
  font-size: 11px;
}

.patternx-pattern-switch img { width: 58px; height: 58px; border: 2px solid #fff; border-radius: 7px; object-fit: cover; }

.patternx-preview-tools {
  right: 24px;
  bottom: 54px;
  display: grid;
  gap: 6px;
  padding: 8px 6px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 10px;
  background: rgba(8, 24, 45, .5);
  backdrop-filter: blur(12px);
}

.patternx-preview-tools button { display: grid; justify-items: center; gap: 2px; min-width: 42px; padding: 6px 4px; border: 0; color: rgba(255,255,255,.75); background: transparent; font-size: 9px; }
.patternx-preview-tools button:hover { color: #fff; }

.patternx-preview-hint {
  right: 0;
  bottom: 18px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 0;
  color: rgba(255,255,255,.7);
  font-size: 11px;
  letter-spacing: .04em;
}

.patternx-feature-band {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 28px;
  border: 1px solid var(--patternx-rule);
  background: rgba(255,255,255,.46);
  box-shadow: 0 18px 48px rgba(16, 43, 73, .06);
}

.patternx-feature-band > button {
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 20px;
  align-items: start;
  min-width: 0;
  padding: 30px;
  border: 0;
  color: var(--patternx-ink);
  background: transparent;
  text-align: left;
}

.patternx-feature-band > button + button { border-left: 1px solid var(--patternx-rule); }
.patternx-feature-band > button:hover { background: rgba(255,255,255,.7); }

.patternx-feature-icon {
  display: grid;
  width: 62px;
  height: 62px;
  place-items: center;
  border-radius: 8px;
  color: #fff;
  background: #173f6e;
}

.patternx-feature-band > button:nth-child(2) .patternx-feature-icon { background: #28527d; }
.patternx-feature-band > button:nth-child(3) .patternx-feature-icon { background: #16438d; }
.patternx-feature-band > button > span:last-child { display: grid; gap: 7px; }
.patternx-feature-band strong { font-family: "Noto Serif SC", serif; font-size: 18px; }
.patternx-feature-band small { max-width: 230px; color: var(--patternx-muted); font-size: 12px; line-height: 1.6; }
.patternx-feature-band em { display: inline-flex; align-items: center; gap: 5px; margin-top: 3px; color: var(--patternx-accent); font-size: 12px; font-style: normal; font-weight: 800; }

.patternx-popular-section { padding-top: 72px; }
.patternx-popular-section .patternx-section-title { padding: 0; margin: 0 0 22px; }
.patternx-popular-section .patternx-section-title h2 { margin: 0; color: var(--patternx-ink); font-family: "Noto Serif SC", serif; font-size: 30px; }
.patternx-popular-section .patternx-section-title p { margin: 5px 0 0; color: var(--patternx-muted); font-size: 12px; letter-spacing: .08em; }
.patternx-text-button { display: inline-flex; align-items: center; gap: 6px; color: var(--patternx-accent); font-weight: 800; }

.patternx-popular-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.patternx-popular-card {
  min-width: 0;
  padding: 14px;
  border: 1px solid var(--patternx-rule);
  border-radius: 10px;
  background: rgba(255,255,255,.68);
  cursor: pointer;
  transition: transform 240ms ease, box-shadow 240ms ease;
}

.patternx-popular-card:hover { transform: translateY(-5px); box-shadow: 0 22px 50px rgba(16,43,73,.1); }
.patternx-popular-image { display: block; width: 100%; padding: 0; overflow: hidden; border: 0; border-radius: 7px; aspect-ratio: 1.22; background: #ece6dc; }
.patternx-popular-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 420ms ease; }
.patternx-popular-card:hover .patternx-popular-image img { transform: scale(1.04); }
.patternx-popular-card > div { position: relative; padding: 16px 5px 4px; }
.patternx-popular-card h3 { margin: 0 0 5px; color: var(--patternx-ink); font-family: "Noto Serif SC", serif; font-size: 18px; }
.patternx-popular-card small { color: var(--patternx-muted); font-size: 10px; }
.patternx-popular-card p { min-height: 38px; margin: 12px 0; color: #35485b; font-size: 12px; line-height: 1.6; }
.patternx-popular-card footer { display: flex; align-items: center; gap: 13px; color: var(--patternx-muted); font-size: 10px; }
.patternx-popular-card footer span { display: inline-flex; align-items: center; gap: 4px; }
.patternx-popular-card footer button { display: grid; width: 30px; height: 30px; margin-left: auto; place-items: center; border: 1px solid var(--patternx-rule); border-radius: 50%; color: var(--patternx-accent); background: transparent; }

/* 3D studio workbench */
.studio-page {
  --studio-panel: #efedeb;
  --studio-canvas: #f3eee6;
  --studio-rule: #ded8d0;
  --studio-indigo: #123352;
  --studio-accent: #cf5233;
  max-width: none;
}

.patternx-studio-header {
  margin-bottom: 34px;
}

.patternx-studio-header h1 {
  margin: 7px 0 8px;
  color: var(--studio-indigo);
  font-family: "Noto Serif SC", "Songti SC", serif;
  font-size: clamp(44px, 5vw, 66px);
  font-weight: 900;
  line-height: 1.08;
}

.patternx-studio-header > p:last-child {
  margin: 0;
  color: #737678;
  font-size: 14px;
  line-height: 1.7;
}

.studio-page .patternx-studio-layout {
  grid-template-columns: 310px minmax(0, 1fr);
  gap: 26px;
  align-items: stretch;
}

.studio-page .patternx-sidebar {
  align-content: start;
  gap: 16px;
}

.patternx-studio-panel {
  min-width: 0;
  padding: 22px;
  border: 1px solid var(--studio-rule);
  border-radius: 18px;
  background: rgba(239, 237, 235, .88);
}

.studio-page .patternx-card-title {
  margin-bottom: 17px;
  color: var(--studio-indigo);
  font-family: "Noto Serif SC", "Songti SC", serif;
  font-size: 17px;
}

.studio-page .patternx-card-title svg {
  color: var(--studio-accent);
}

.studio-page .patternx-studio-patterns {
  grid-template-columns: 1fr;
  gap: 10px;
  max-height: none;
  overflow: visible;
}

.studio-page .patternx-studio-patterns button {
  grid-template-columns: 38px minmax(0, 1fr) 14px;
  min-height: 54px;
  gap: 8px;
  padding: 7px;
  border-color: transparent;
  border-radius: 11px;
  background: rgba(255, 255, 255, .72);
  font-size: 11px;
}

.studio-page .patternx-studio-patterns button.selected {
  color: var(--studio-accent);
  border: 2px solid var(--studio-accent);
  background: rgba(255, 255, 255, .9);
}

.studio-page .patternx-mini-thumb {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}

.studio-page .patternx-model-grid {
  gap: 9px;
}

.studio-page .patternx-model-grid button {
  min-height: 76px;
  padding: 11px 5px;
  border-color: rgba(18, 51, 82, .11);
  border-radius: 10px;
  color: #5f6670;
  background: rgba(255, 255, 255, .66);
}

.studio-page .patternx-model-grid button.selected {
  color: #fff;
  border-color: var(--studio-accent);
  background: var(--studio-accent);
  box-shadow: 0 12px 26px rgba(207, 82, 51, .15);
}

.studio-page .patternx-slider {
  grid-template-columns: 62px minmax(80px, 1fr) 48px;
  gap: 10px;
  margin: 15px 0;
  color: #62666a;
  font-size: 12px;
}

.studio-page .patternx-slider input {
  accent-color: var(--studio-indigo);
}

.studio-page .patternx-slider output {
  color: var(--studio-indigo);
}

.studio-page .patternx-library-return {
  color: var(--studio-accent);
}

.studio-page .patternx-studio-main {
  display: grid;
  grid-template-rows: minmax(610px, 1fr) auto;
  min-width: 0;
}

.studio-page .studio-workspace {
  min-height: clamp(610px, 57vw, 760px);
  border: 1px solid var(--studio-rule);
  border-radius: 22px;
  background: var(--studio-canvas);
  box-shadow: none;
}

.studio-page .studio-workspace::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: .15;
  background:
    radial-gradient(circle at 12% 72%, rgba(18, 51, 82, .08), transparent 19%),
    radial-gradient(circle at 88% 28%, rgba(207, 82, 51, .07), transparent 17%);
}

.studio-page .studio-workspace canvas {
  position: relative;
  z-index: 1;
}

.studio-top-tools,
.studio-side-tools,
.studio-page .patternx-canvas-label {
  position: absolute;
  z-index: 4;
}

.studio-top-tools {
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 9px;
  border: 1px solid rgba(18, 51, 82, .08);
  border-radius: 12px;
  background: rgba(255, 255, 255, .84);
  box-shadow: 0 10px 28px rgba(18, 51, 82, .06);
  backdrop-filter: blur(12px);
}

.studio-top-tools button {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 6px;
  color: #727985;
  background: transparent;
}

.studio-top-tools button:hover,
.studio-top-tools button.active {
  color: var(--studio-indigo);
  background: #f1efeb;
}

.studio-top-tools i {
  width: 1px;
  height: 20px;
  margin: 0 3px;
  background: var(--studio-rule);
}

.studio-side-tools {
  top: 50%;
  right: 20px;
  display: grid;
  gap: 1px;
  padding: 8px 6px;
  border: 1px solid rgba(18, 51, 82, .08);
  border-radius: 13px;
  background: rgba(255, 255, 255, .86);
  box-shadow: 0 10px 28px rgba(18, 51, 82, .06);
  backdrop-filter: blur(12px);
  transform: translateY(-50%);
}

.studio-side-tools button {
  display: grid;
  width: 38px;
  min-height: 44px;
  place-items: center;
  gap: 1px;
  padding: 5px 2px;
  border: 0;
  border-radius: 6px;
  color: #67707b;
  background: transparent;
  font-size: 8px;
}

.studio-side-tools button:hover,
.studio-side-tools button.active {
  color: var(--studio-accent);
  background: #f2eee9;
}

.studio-page .patternx-canvas-label {
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px 11px 16px;
  border-color: rgba(18, 51, 82, .08);
  border-radius: 11px;
  background: rgba(255, 255, 255, .84);
}

.studio-page .patternx-canvas-label div {
  display: grid;
  gap: 3px;
}

.studio-page .patternx-canvas-label strong {
  color: var(--studio-indigo);
  font-family: "Noto Serif SC", serif;
  font-size: 15px;
}

.studio-page .patternx-canvas-label img {
  width: 46px;
  height: 46px;
  border-radius: 7px;
  object-fit: cover;
}

.studio-page .patternx-studio-footer {
  margin-top: 0;
  padding: 25px 8px 0;
}

.studio-page .patternx-studio-footer strong {
  color: var(--studio-indigo);
  font-family: "Noto Serif SC", serif;
  font-size: 24px;
}

.studio-page .patternx-studio-footer i {
  width: 36px;
  height: 2px;
  margin-top: 5px;
  background: var(--studio-accent);
}

.studio-page .patternx-studio-footer .patternx-button {
  width: auto;
  min-height: 52px;
  padding-inline: 25px;
  background: var(--studio-accent);
}

.patternx-capability-band {
  display: grid;
  grid-template-columns: 1.25fr repeat(4, 1fr);
  margin-top: 42px;
  padding: 24px 28px;
  border: 1px solid var(--studio-rule);
  border-radius: 15px;
  background: rgba(239, 237, 235, .78);
}

.patternx-capability-band article {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 13px;
  align-items: center;
  min-width: 0;
  padding: 0 20px;
}

.patternx-capability-band article + article {
  border-left: 1px solid var(--studio-rule);
}

.patternx-capability-band article > span {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 50%;
  color: var(--studio-indigo);
  background: rgba(255, 255, 255, .86);
}

.patternx-capability-band article div {
  display: grid;
  gap: 3px;
}

.patternx-capability-band strong {
  color: var(--studio-indigo);
  font-family: "Noto Serif SC", serif;
  font-size: 13px;
}

.patternx-capability-band small {
  overflow-wrap: anywhere;
  color: #7a7d80;
  font-size: 10px;
  line-height: 1.5;
}

@keyframes patternx-spin { to { transform: rotate(360deg); } }
@media (max-width: 1050px) {
  .patternx-landing-hero { grid-template-columns: 1fr; }
  .patternx-landing-copy { max-width: 700px; padding: 20px 0; }
  .patternx-live-preview { height: 620px; }
  .patternx-popular-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .patternx-studio-layout { grid-template-columns: 1fr; }
  .patternx-studio-main { order: -1; }
  .patternx-canvas { min-height: 480px; }
  .studio-page .patternx-studio-layout { grid-template-columns: 1fr; }
  .studio-page .patternx-studio-main { order: 0; }
  .studio-page .patternx-sidebar { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .studio-page .parameter-panel { grid-column: 1 / -1; }
  .patternx-capability-band { grid-template-columns: repeat(3, 1fr); gap: 20px 0; }
  .patternx-capability-band article:nth-child(4) { border-left: 0; }
}

@media (max-width: 760px) {
  .patternx-page { padding-top: 64px; }
  .patternx-main { width: calc(100% - 32px); padding: 30px 0 64px; }
  .patternx-workspace-nav { align-items: flex-start; flex-direction: column; gap: 10px; margin-bottom: 28px; }
  .patternx-workspace-nav div { width: 100%; }
  .patternx-workspace-nav button { flex: 1; padding-inline: 8px; font-size: 12px; }
  .patternx-landing-hero, .patternx-landing-copy { min-width: 0; width: 100%; }
  .patternx-landing-copy h1 { font-size: clamp(46px, 14vw, 64px); }
  .patternx-seal { right: -48px; }
  .patternx-landing-description br { display: none; }
  .landing-actions { display: grid; grid-template-columns: 1fr; }
  .landing-actions .patternx-button { box-sizing: border-box; min-width: 0; width: 100%; padding-inline: 12px; font-size: 12px; }
  .patternx-live-preview { height: 520px; border-radius: 12px; }
  .patternx-preview-info { top: 14px; right: 14px; width: 132px; padding: 10px 12px; }
  .patternx-preview-info > div { padding: 0; margin: 0; border-bottom: 0; }
  .patternx-preview-info h2 { font-size: 14px; }
  .patternx-preview-info p { display: none; }
  .patternx-preview-badge { top: 14px; left: 14px; }
  .patternx-pattern-switch { bottom: 50px; left: 14px; }
  .patternx-preview-tools { right: 14px; bottom: 50px; display: flex; gap: 2px; }
  .patternx-preview-hint { font-size: 9px; }
  .patternx-feature-band { grid-template-columns: 1fr; }
  .patternx-feature-band > button { grid-template-columns: 52px 1fr; padding: 22px; }
  .patternx-feature-band > button + button { border-top: 1px solid var(--patternx-rule); border-left: 0; }
  .patternx-feature-icon { width: 52px; height: 52px; }
  .patternx-popular-section { padding-top: 52px; }
  .patternx-popular-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .patternx-popular-card { padding: 8px; }
  .patternx-popular-card > div { padding: 12px 2px 2px; }
  .patternx-popular-card h3 { font-size: 15px; }
  .patternx-popular-card p { min-height: 34px; font-size: 10px; }
  .patternx-popular-card footer { gap: 7px; }
  .patternx-subpage { padding-top: 8px; }
  .patternx-feature-list, .patternx-upload-result { grid-template-columns: 1fr; }
  .patternx-grid.compact { grid-template-columns: repeat(2, 1fr); }
  .patternx-canvas { min-height: 390px; }
  .patternx-modal-head { grid-template-columns: 90px 1fr; }
  .patternx-modal-thumb { width: 90px; height: 90px; }
  .patternx-modal { padding: 22px 18px; }
  .patternx-file-alert { top: 18px; right: 16px; grid-template-columns: 24px minmax(0, 1fr) 22px; gap: 10px; min-height: 62px; padding: 10px 11px 10px 13px; border-radius: 14px; }
  .patternx-file-alert-message { font-size: 14px; line-height: 1.45; }
  .patternx-studio-header { margin-bottom: 24px; }
  .patternx-studio-header h1 { font-size: 42px; }
  .studio-page .patternx-sidebar { grid-template-columns: 1fr; }
  .studio-page .parameter-panel { grid-column: auto; }
  .studio-page .patternx-studio-main { order: -1; }
  .patternx-studio-panel { padding: 18px; border-radius: 12px; }
  .studio-page { min-width: 0; max-width: 100%; overflow-x: clip; }
  .studio-page .patternx-studio-layout,
  .studio-page .patternx-studio-main,
  .studio-page .patternx-sidebar,
  .studio-page .patternx-studio-patterns { min-width: 0; max-width: 100%; }
  .studio-page .patternx-studio-patterns { grid-template-columns: 1fr; }
  .studio-page .studio-workspace { min-height: 480px; border-radius: 12px; }
  .studio-top-tools { top: 12px; left: 12px; }
  .studio-side-tools {
    top: auto;
    right: 50%;
    bottom: 12px;
    grid-template-columns: repeat(5, 44px);
    grid-auto-flow: column;
    max-width: calc(100% - 24px);
    padding: 6px;
    transform: translateX(50%);
  }
  .studio-side-tools button { width: 44px; min-height: 42px; }
  .studio-page .patternx-canvas-label { right: 12px; bottom: 72px; max-width: calc(100% - 24px); }
  .studio-page .patternx-slider { grid-template-columns: 68px minmax(0, 1fr) 46px; gap: 7px; margin: 11px 0; }
  .studio-page .patternx-studio-footer { align-items: stretch; flex-direction: column; padding-top: 18px; }
  .studio-page .patternx-studio-footer .patternx-button { width: 100%; }
  .patternx-capability-band { grid-template-columns: 1fr; padding: 20px; }
  .patternx-capability-band article { padding: 12px 0; }
  .patternx-capability-band article + article { border-top: 1px solid var(--studio-rule); border-left: 0; }
}
</style>
