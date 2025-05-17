<script setup lang="ts">
import { showToast } from 'vant'

definePage({
  meta: {
    title: 'pages.navbar.custom-area',
  },
})

const router = useRouter()

const checked = ref(false)

const show = ref(false)
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
]
function onSelect(item: any) {
  // 默认情况下点击选项时不会自动收起
  // 可以通过 close-on-click-action 属性开启自动收起
  show.value = false
  showToast(item.name)
}
</script>

<template>
  <KmPageLayout navbar>
    <template #navbar-start>
      <KmSwitch v-model="checked" size="16px" />
    </template>
    <template #navbar-end>
      <KmButton size="sm" @click="show = true">
        操作按钮
      </KmButton>
      <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
    </template>
    <div class="flex flex-col gap-4 p-4">
      <div>
        Switch: {{ checked }}
      </div>
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
