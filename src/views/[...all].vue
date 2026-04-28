<script setup lang="ts">
definePage({
  meta: {
    title: '找不到页面',
  },
})

const router = useRouter()

const data = ref({
  inter: Number.NaN,
  countdown: 5,
})

onUnmounted(() => {
  data.value.inter && window.clearInterval(data.value.inter)
})

onMounted(() => {
  data.value.inter = window.setInterval(() => {
    data.value.countdown--
    if (data.value.countdown === 0) {
      data.value.inter && window.clearInterval(data.value.inter)
      goBack()
    }
  }, 1000)
})

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col min-h-screen items-center justify-center">
    <KmIcon name="404" class="text-[300px] -mt-9xl" />
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-6xl font-sans m-0">
        404
      </h1>
      <div class="text-stone-5 text-xl mx-0">
        抱歉，你访问的页面不存在
      </div>
      <KmButton @click="goBack">
        {{ data.countdown }} 秒后，返回首页
      </KmButton>
    </div>
  </div>
</template>
