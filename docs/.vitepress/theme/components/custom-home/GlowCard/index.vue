<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    className?: string
    edgeSensitivity?: number
    glowColor?: string
    backgroundColor?: string
    borderRadius?: number
    glowRadius?: number
    glowIntensity?: number
    coneSpread?: number
    animated?: boolean
    colors?: string[]
    fillOpacity?: number
  }>(),
  {
    className: '',
    edgeSensitivity: 30,
    glowColor: '40 80 80',
    backgroundColor: '#060010',
    borderRadius: 28,
    glowRadius: 40,
    glowIntensity: 1,
    coneSpread: 25,
    animated: false,
    colors: () => (['#c084fc', '#f472b6', '#38bdf8']),
    fillOpacity: 0.5,
  },
)

const cardRef = useTemplateRef('cardRef')
const isHovered = ref(false)
const angle = ref(45)
const proximity = ref(0)
const isAnimating = ref(false)

// 工具函数
function parseHsl(str) {
  // eslint-disable-next-line regexp/no-misleading-capturing-group
  const match = str.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/)
  return match
    ? {
        h: Number.parseFloat(match[1]),
        s: Number.parseFloat(match[2]),
        l: Number.parseFloat(match[3]),
      }
    : { h: 40, s: 80, l: 80 }
}

function glowShadowStyle(color, intensity) {
  const { h, s, l } = parseHsl(color)
  const hsl = `${h}deg ${s}% ${l}%`
  const shadows = [
    [0, 0, 0, 1, 100, true],
    [0, 0, 1, 0, 60, true],
    [0, 0, 3, 0, 50, true],
    [0, 0, 6, 0, 40, true],
    [0, 0, 15, 0, 30, true],
    [0, 0, 25, 2, 20, true],
    [0, 0, 50, 2, 10, true],
    [0, 0, 1, 0, 60, false],
    [0, 0, 3, 0, 50, false],
    [0, 0, 6, 0, 40, false],
    [0, 0, 15, 0, 30, false],
    [0, 0, 25, 2, 20, false],
    [0, 0, 50, 2, 10, false],
  ].map(([x, y, blur, spread, alpha, isInset]) => {
    const opa = Math.min(alpha * intensity, 100)
    return `${isInset ? 'inset' : ''} ${x}px ${y}px ${blur}px ${spread}px hsl(${hsl} / ${opa}%)`
  })
  return shadows.join(', ')
}

// 渐变角度与遮罩
const conicMask = computed(() => {
  const deg = angle.value.toFixed(3)
  const s = props.coneSpread
  return `conic-gradient(from ${deg}deg at center, black ${s}%, transparent ${s + 15}%, transparent ${100 - s - 15}%, black ${100 - s}%)`
})

const glowMask = computed(() => {
  const deg = angle.value.toFixed(3)
  return `conic-gradient(from ${deg}deg at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`
})

const compositeMask = computed(() => {
  const deg = angle.value.toFixed(3)
  return [
    'linear-gradient(to bottom, black, black)',
    'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
    'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
    'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
    'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
    'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
    `conic-gradient(from ${deg}deg at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
  ].join(', ')
})

// 渐变背景
const radialPositions = [
  '80% 55%',
  '69% 34%',
  '8% 6%',
  '41% 38%',
  '86% 85%',
  '82% 18%',
  '51% 4%',
]
const colorIndices = [0, 1, 2, 0, 1, 2, 1]

const backgroundGradients = computed(() => {
  const gradients = []
  for (let i = 0; i < 7; i++) {
    const pos = radialPositions[i]
    const color = props.colors[colorIndices[i]]
    gradients.push(`radial-gradient(at ${pos}, ${color} 0px, transparent 50%)`)
  }
  gradients.push(`linear-gradient(${props.colors[0]} 0 100%)`)
  return gradients.map(g => `${g} border-box`)
})

// 动画与透明度
const isActive = computed(() => isHovered.value || isAnimating.value)
const edgePlus = computed(() => props.edgeSensitivity + 20)

const opacity1 = computed(() => {
  if (!isActive.value) {
    return 0
  }
  const v = proximity.value * 100
  return Math.max(0, (v - edgePlus.value) / (100 - edgePlus.value))
})

const opacity2 = computed(() => {
  if (!isActive.value) {
    return 0
  }
  const v = proximity.value * 100
  return Math.max(0, (v - props.edgeSensitivity) / (100 - props.edgeSensitivity))
})

const glowShadow = computed(() =>
  glowShadowStyle(props.glowColor, props.glowIntensity),
)

// 鼠标位置计算
function getCenter(el) {
  const { width, height } = el.getBoundingClientRect()
  return [width / 2, height / 2]
}

function getProximity(el, x, y) {
  const [cx, cy] = getCenter(el)
  const dx = x - cx
  const dy = y - cy
  let rx = 1e5
  let ry = 1e5
  if (dx !== 0) {
    rx = cx / Math.abs(dx)
  }
  if (dy !== 0) {
    ry = cy / Math.abs(dy)
  }
  const min = Math.min(rx, ry)
  return Math.min(Math.max(1 / min, 0), 1)
}

function getAngle(el, x, y) {
  const [cx, cy] = getCenter(el)
  const dx = x - cx
  const dy = y - cy
  if (dx === 0 && dy === 0) {
    return 0
  }
  let a = Math.atan2(dy, dx) * (180 / Math.PI) + 90
  if (a < 0) {
    a += 360
  }
  return a
}

function handlePointerMove(e) {
  if (!cardRef.value) {
    return
  }
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  proximity.value = getProximity(cardRef.value, x, y)
  angle.value = getAngle(cardRef.value, x, y)
}

// 自动动画
function animate() {
  if (!props.animated) {
    return
  }
  isAnimating.value = true
  const startAngle = 110
  const endAngle = 465

  // 淡入
  animateValue(500, v => (proximity.value = v / 100))

  // 旋转
  animateValue(1500, (v) => {
    angle.value = (endAngle - startAngle) * (v / 100) + startAngle
  }, { ease: cubic })

  // 继续旋转
  animateValue(2250, (v) => {
    angle.value = (endAngle - startAngle) * (v / 100) + startAngle
  }, { delay: 1500, ease: easeOut })

  // 淡出
  animateValue(1500, v => (proximity.value = v / 100), {
    delay: 2500,
    start: 100,
    end: 0,
    ease: cubic,
    onEnd: () => (isAnimating.value = false),
  })
}

watch(
  () => props.animated,
  () => animate(),
  { immediate: true, deep: true },
)

onMounted(() => {
  if (props.animated) {
    animate()
  }
})

// 动画工具
function easeOut(x) {
  return 1 - (1 - x) ** 3
}
function cubic(x) {
  return x ** 3
}
function animateValue(duration, update, opt = {}) {
  const start = opt.start ?? 0
  const end = opt.end ?? 100
  const delay = opt.delay ?? 0
  const ease = opt.ease ?? easeOut
  const onEnd = opt.onEnd
  const begin = performance.now() + delay

  function run() {
    const t = performance.now() - begin
    const p = Math.min(t / duration, 1)
    update(start + (end - start) * ease(p))
    if (p < 1) {
      requestAnimationFrame(run)
    }
    else { onEnd?.() }
  }
  setTimeout(requestAnimationFrame, delay, run)
}
</script>

<template>
  <div
    ref="cardRef"
    class="border border-white/15 grid relative isolate"
    :class="className"
    :style="{
      background: backgroundColor,
      borderRadius: `${borderRadius}px`,
      transform: 'translate3d(0, 0, 0.01px)',
    }"
    @pointermove="handlePointerMove"
    @pointerenter="isHovered = true"
    @pointerleave="isHovered = false"
  >
    <!-- 渐变光效层 1 -->
    <div
      class="rounded-[inherit] inset-0 absolute -z-[1]"
      :style="{
        border: '1px solid transparent',
        background: [
          `linear-gradient(${backgroundColor} 0 100%) padding-box`,
          'linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box',
          ...backgroundGradients,
        ].join(', '),
        opacity: opacity1,
        maskImage: conicMask,
        WebkitMaskImage: conicMask,
        transition: isActive
          ? 'opacity 0.25s ease-out'
          : 'opacity 0.75s ease-in-out',
      }"
    />

    <!-- 渐变光效层 2 -->
    <div
      class="rounded-[inherit] inset-0 absolute -z-[1]"
      :style="{
        border: '1px solid transparent',
        background: backgroundGradients.join(', '),
        maskImage: compositeMask,
        WebkitMaskImage: compositeMask,
        maskComposite: 'subtract, add, add, add, add, add',
        WebkitMaskComposite:
          'source-out, source-over, source-over, source-over, source-over, source-over',
        opacity: opacity1 * fillOpacity,
        mixBlendMode: 'soft-light',
        transition: isActive
          ? 'opacity 0.25s ease-out'
          : 'opacity 0.75s ease-in-out',
      }"
    />

    <!-- 外发光阴影 -->
    <span
      class="rounded-[inherit] pointer-events-none absolute z-[1]"
      :style="{
        inset: `-${glowRadius}px`,
        maskImage: glowMask,
        WebkitMaskImage: glowMask,
        opacity: opacity2,
        mixBlendMode: 'plus-lighter',
        transition: isActive
          ? 'opacity 0.25s ease-out'
          : 'opacity 0.75s ease-in-out',
      }"
    >
      <span
        class="rounded-[inherit] absolute"
        :style="{
          inset: `${glowRadius}px`,
          boxShadow: glowShadow,
        }"
      />
    </span>

    <!-- 内容容器 -->
    <div class="flex flex-col relative z-[1] overflow-auto">
      <slot />
    </div>
  </div>
</template>
