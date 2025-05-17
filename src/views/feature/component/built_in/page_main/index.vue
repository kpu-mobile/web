<script setup lang="ts">
definePage({
  meta: {
    title: '内容块',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div>
      <KmPageMain>
        PageMain 是最常用的页面组件，几乎所有页面都会使用到
      </KmPageMain>
      <KmPageMain title="你可以设置一个自定义的标题">
        这里放页面内容
      </KmPageMain>
      <KmPageMain>
        <template #title>
          <div class="flex items-center justify-between">
            通过 slot 设置标题
            <KmButton size="sm" variant="outline">
              自定义按钮
            </KmButton>
          </div>
        </template>
        这里放页面内容
      </KmPageMain>
      <KmPageMain title="带展开/收起功能" collaspe height="20vh">
        <h1 class="text-2xl font-bold">
          Kpu-mobile
        </h1>
        <img src="@/assets/images/logo.png" class="w-40">
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>
