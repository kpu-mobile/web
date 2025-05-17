<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.tabbar.style',
  },
})
const router = useRouter()

const tabbarBorder = ref(false)
const tabbarRadius = ref(false)
const tabbarMask = ref(false)
watch(tabbarRadius, (value) => {
  value && (tabbarMask.value = false)
})
watch(tabbarMask, (value) => {
  value && (tabbarRadius.value = false)
})
</script>

<template>
  <KmPageLayout :navbar="false" tabbar :tabbar-border :tabbar-radius :tabbar-mask>
    <div class="flex flex-col gap-4 p-4">
      <div class="flex gap-2">
        <p>边框</p>
        <KmSwitch v-model="tabbarBorder" />
      </div>
      <div class="flex gap-2">
        <p>圆角</p>
        <KmSwitch v-model="tabbarRadius" />
      </div>
      <div class="flex gap-2">
        <p>渐变遮罩</p>
        <KmSwitch v-model="tabbarMask" />
      </div>
      <p>由于圆角使用了 <code>overflow-hidden</code> 属性，会影响渐变遮罩效果，故两者不建议同时使用。</p>
      <KmButton @click="router.back()">
        返回
      </KmButton>
      <div v-for="(index) in 50" :key="index" class="text-center">
        {{ index }}
      </div>
    </div>
  </KmPageLayout>
</template>
