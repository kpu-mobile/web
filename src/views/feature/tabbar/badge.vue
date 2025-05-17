<script setup lang="ts">
import useTabbarBadgeStore from '@/store/modules/tabbarBadge.ts'

definePage({
  meta: {
    title: 'pages.tabbar.badge',
  },
})

const router = useRouter()
const tabbarBadge = useTabbarBadgeStore()
</script>

<template>
  <KmPageLayout :navbar="false" tabbar tabbar-name="third">
    <div class="flex flex-col gap-4 p-4">
      <div>角标可以搭配 Pinia 一起使用，实现动态控制。</div>
      <KmPageMain title="点标记" class="m-0">
        <KmButton @click="tabbarBadge.switchDot">
          切换
        </KmButton>
      </KmPageMain>
      <KmPageMain title="数字标记，小于等于 0 时隐藏" class="m-0" main-class="flex gap-2">
        <KmButton @click="tabbarBadge.setNumber(tabbarBadge.number + 1)">
          <KmIcon name="i-ep:plus" />
          1
        </KmButton>
        <KmButton @click="tabbarBadge.setNumber(tabbarBadge.number - 1)">
          <KmIcon name="i-ep:minus" />
          1
        </KmButton>
      </KmPageMain>
      <KmPageMain title="文字标记" class="m-0" main-class="flex gap-2">
        <KmButton @click="tabbarBadge.setText(tabbarBadge.text === '热门' ? '促销' : '热门')">
          切换
        </KmButton>
        <KmButton @click="tabbarBadge.setText('')">
          清空
        </KmButton>
      </KmPageMain>
      <KmPageMain title="标记变体" class="m-0" main-class="flex gap-2">
        <KmButton :disabled="tabbarBadge.variant === 'default'" @click="tabbarBadge.setVariant('default')">
          default
        </KmButton>
        <KmButton :disabled="tabbarBadge.variant === 'secondary'" @click="tabbarBadge.setVariant('secondary')">
          secondary
        </KmButton>
        <KmButton :disabled="tabbarBadge.variant === 'destructive'" @click="tabbarBadge.setVariant('destructive')">
          destructive
        </KmButton>
      </KmPageMain>
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
