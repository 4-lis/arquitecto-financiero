<template>
  <canvas
    ref="canvas"
    class="absolute inset-0 w-full h-full pointer-events-none"
    aria-hidden="true"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Faithful port of the "Tech Network" canvas effect from the v3 prototype:
// moving nodes joined by fading links, each node wrapped in a soft glow halo.
const props = defineProps({
  count: { type: Number, default: 55 },
  linkDistance: { type: Number, default: 155 },
})

const canvas = ref(null)
let ctx = null
let pts = []
let raf = null
let ro = null
let W = 0
let H = 0
let dpr = 1
let reduced = false

function resize() {
  const cv = canvas.value
  if (!cv) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  W = cv.clientWidth
  H = cv.clientHeight || 600
  cv.width = Math.floor(W * dpr)
  cv.height = Math.floor(H * dpr)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function initPts() {
  pts = []
  for (let i = 0; i < props.count; i++) {
    pts.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2.2 + 1.4,
    })
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H)
  const DIST = props.linkDistance

  // Links
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i]
    if (!reduced) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
    }
    for (let j = i + 1; j < pts.length; j++) {
      const q = pts[j]
      const dx = p.x - q.x
      const dy = p.y - q.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < DIST) {
        const a = (1 - d / DIST) * 0.3
        ctx.beginPath()
        ctx.strokeStyle = `rgba(66,165,245,${a})`
        ctx.lineWidth = 0.7
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.stroke()
      }
    }
  }

  // Nodes + glow halo
  for (const p of pts) {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(110,190,255,0.8)'
    ctx.fill()
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r + 2.5, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(66,165,245,0.15)'
    ctx.fill()
  }

  if (!reduced) raf = requestAnimationFrame(draw)
}

onMounted(() => {
  const cv = canvas.value
  if (!cv) return
  ctx = cv.getContext('2d')
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  resize()
  initPts()
  draw()

  ro = new ResizeObserver(() => {
    resize()
    initPts()
    if (reduced) draw()
  })
  ro.observe(cv)
})

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
  if (ro) ro.disconnect()
})
</script>
