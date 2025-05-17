<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.function.title',
  },
})
const page = usePage()
// 标题设置为「 测试标题 」
function setCustomTitle() {
  page.setCustomTitle('测试标题')
}
function resetCustomTitle() {
  page.resetCustomTitle()
}
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain main-class="flex gap-2">
      <KmButton @click="setCustomTitle">
        标题设置为「 测试标题 」
      </KmButton>
      <KmButton @click="resetCustomTitle">
        标题重置
      </KmButton>
    </KmPageMain>
  </KmPageLayout>
</template>
