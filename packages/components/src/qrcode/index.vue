<script setup lang="ts">
import type { BaseProps as Props } from './index'
import QRCode from 'qrcode'
import { computed, onMounted, ref, watch } from 'vue'
import { cn } from '../../utils'
import { CANVAS_SIZE } from './index'

defineOptions({
  name: 'KmQrcode',
})

const props = withDefaults(defineProps<Props>(), {
  size: 200,
  errorCorrectionLevel: 'H',
  logoSize: 0.2,
  logoBackgroundColor: '#ffffff',
  foregroundColor: '#000000',
  backgroundColor: '#ffffff',
})
const emit = defineEmits<{
  (e: 'statusRender', status: string): void
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const currentStatus = ref<string>('')
const hasStatus = computed(() => !!props.status)

watch(
  () => props.status,
  (newStatus) => {
    if (newStatus) {
      currentStatus.value = newStatus
      emit('statusRender', newStatus)
    }
  },
  { immediate: true },
)

// 绘制二维码
async function drawQrcode() {
  if (!canvasRef.value || !props.value) {
    return
  }

  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) {
    return
  }

  // 清空画布
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

  // 绘制背景
  ctx.fillStyle = props.backgroundColor
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

  try {
    // 生成二维码DataURL
    const qrcodeDataUrl = await QRCode.toDataURL(props.value, {
      width: CANVAS_SIZE,
      errorCorrectionLevel: props.errorCorrectionLevel,
      color: {
        dark: props.foregroundColor,
        light: props.backgroundColor,
      },
      margin: 2,
    })

    // 绘制二维码
    const qrcodeImage = new Image()
    qrcodeImage.src = qrcodeDataUrl
    await new Promise((resolve) => {
      qrcodeImage.onload = resolve
    })
    ctx.drawImage(qrcodeImage, 0, 0)

    // 绘制Logo（如果有）
    if (props.logo) {
      await drawLogo(ctx, props.logo)
    }
  }
  catch (error) {
    console.error('生成二维码失败:', error)
  }
}

// 绘制Logo（带圆角和阴影）
async function drawLogo(ctx: CanvasRenderingContext2D, logoUrl: string) {
  const logoImage = new Image()
  logoImage.crossOrigin = 'anonymous'
  logoImage.src = logoUrl

  await new Promise((resolve, reject) => {
    logoImage.onload = resolve
    logoImage.onerror = reject
  })

  // Logo尺寸计算
  const logoBaseSize = CANVAS_SIZE * props.logoSize
  const logoOffsetX = (CANVAS_SIZE - logoBaseSize) / 2
  const logoOffsetY = (CANVAS_SIZE - logoBaseSize) / 2
  const logoPadding = logoBaseSize * 0.1
  const logoTotalSize = logoBaseSize + logoPadding * 2
  const logoFinalX = logoOffsetX - logoPadding
  const logoFinalY = logoOffsetY - logoPadding
  const borderRadius = logoTotalSize * 0.15

  // 绘制Logo背景（带圆角和阴影）
  ctx.save()
  ctx.fillStyle = props.logoBackgroundColor
  ctx.shadowColor = 'rgba(0, 0, 0, 0.1)'
  ctx.shadowBlur = 8
  ctx.shadowOffsetY = 2

  // 绘制圆角矩形路径
  ctx.beginPath()
  ctx.moveTo(logoFinalX + borderRadius, logoFinalY)
  ctx.lineTo(logoFinalX + logoTotalSize - borderRadius, logoFinalY)
  ctx.quadraticCurveTo(
    logoFinalX + logoTotalSize,
    logoFinalY,
    logoFinalX + logoTotalSize,
    logoFinalY + borderRadius,
  )
  ctx.lineTo(logoFinalX + logoTotalSize, logoFinalY + logoTotalSize - borderRadius)
  ctx.quadraticCurveTo(
    logoFinalX + logoTotalSize,
    logoFinalY + logoTotalSize,
    logoFinalX + logoTotalSize - borderRadius,
    logoFinalY + logoTotalSize,
  )
  ctx.lineTo(logoFinalX + borderRadius, logoFinalY + logoTotalSize)
  ctx.quadraticCurveTo(
    logoFinalX,
    logoFinalY + logoTotalSize,
    logoFinalX,
    logoFinalY + logoTotalSize - borderRadius,
  )
  ctx.lineTo(logoFinalX, logoFinalY + borderRadius)
  ctx.quadraticCurveTo(
    logoFinalX,
    logoFinalY,
    logoFinalX + borderRadius,
    logoFinalY,
  )
  ctx.closePath()
  ctx.fill()
  ctx.restore()

  // 绘制Logo图片（裁剪为圆角）
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(logoFinalX + borderRadius, logoFinalY)
  ctx.lineTo(logoFinalX + logoTotalSize - borderRadius, logoFinalY)
  ctx.quadraticCurveTo(
    logoFinalX + logoTotalSize,
    logoFinalY,
    logoFinalX + logoTotalSize,
    logoFinalY + borderRadius,
  )
  ctx.lineTo(logoFinalX + logoTotalSize, logoFinalY + logoTotalSize - borderRadius)
  ctx.quadraticCurveTo(
    logoFinalX + logoTotalSize,
    logoFinalY + logoTotalSize,
    logoFinalX + logoTotalSize - borderRadius,
    logoFinalY + logoTotalSize,
  )
  ctx.lineTo(logoFinalX + borderRadius, logoFinalY + logoTotalSize)
  ctx.quadraticCurveTo(
    logoFinalX,
    logoFinalY + logoTotalSize,
    logoFinalX,
    logoFinalY + logoTotalSize - borderRadius,
  )
  ctx.lineTo(logoFinalX, logoFinalY + borderRadius)
  ctx.quadraticCurveTo(
    logoFinalX,
    logoFinalY,
    logoFinalX + borderRadius,
    logoFinalY,
  )
  ctx.closePath()
  ctx.clip() // 裁剪路径
  ctx.drawImage(logoImage, logoFinalX, logoFinalY, logoTotalSize, logoTotalSize)
  ctx.restore()
}

watch(
  [
    () => props.value,
    () => props.errorCorrectionLevel,
    () => props.logo,
    () => props.logoSize,
    () => props.foregroundColor,
    () => props.backgroundColor,
  ],
  () => {
    drawQrcode()
  },
  { deep: true },
)

onMounted(() => {
  drawQrcode()
})

// 下载二维码
function download(fileName = 'qrcode.png') {
  if (!canvasRef.value) {
    return
  }

  const link = document.createElement('a')
  link.download = fileName
  link.href = canvasRef.value.toDataURL('image/png')
  link.click()
}

defineExpose({
  download,
})
</script>

<template>
  <div
    :class="cn('inline-block relative', props.class)"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <!-- 二维码Canvas -->
    <canvas
      ref="canvasRef"
      width="400"
      height="400"
      class="size-full"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />

    <!-- 状态遮罩层 -->
    <div
      v-if="hasStatus"
      key="0"
      class="bg-background/80 flex items-center inset-0 justify-center absolute backdrop-blur-xs"
    >
      <!-- 状态插槽 -->
      <slot
        name="statusRender"
        :status="currentStatus || ''"
      >
        <!-- 默认加载状态 -->
        <div
          v-if="currentStatus === 'loading'"
          key="0"
          class="border-2 border-primary border-t-transparent rounded-full size-6 animate-spin"
        />
      </slot>
    </div>
  </div>
</template>
