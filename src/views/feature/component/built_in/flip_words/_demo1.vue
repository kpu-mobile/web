<template>
  <div class="flex h-50 items-center justify-center">
    <div class="text-sm text-neutral-600 font-semibold mx-auto dark:text-neutral-400">
      Vue.js 是一款
      <KmFlipWords
        :words="['渐进式', '易上手的', '高性能', '多功能']"
        :duration="3000"
        class="text-sm !text-primary"
      />
      JavaScript 框架
      <div class="mt-4">
        用于构建现代 Web 应用
      </div>
    </div>
  </div>
</template>
