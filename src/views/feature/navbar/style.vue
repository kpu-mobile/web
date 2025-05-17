<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.style',
  },
})
const router = useRouter()

const navbarBorder = ref(false)
const navbarRadius = ref(false)
const navbarMask = ref(false)
watch(navbarRadius, (value) => {
  value && (navbarMask.value = false)
})
watch(navbarMask, (value) => {
  value && (navbarRadius.value = false)
})
</script>

<template>
  <KmPageLayout navbar :navbar-border :navbar-radius :navbar-mask>
    <div class="flex flex-col gap-4 p-4">
      <div class="flex gap-2">
        <p>边框</p>
        <KmSwitch v-model="navbarBorder" />
      </div>
      <div class="flex gap-2">
        <p>圆角</p>
        <KmSwitch v-model="navbarRadius" />
      </div>
      <div class="flex gap-2">
        <p>渐变遮罩</p>
        <KmSwitch v-model="navbarMask" />
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
