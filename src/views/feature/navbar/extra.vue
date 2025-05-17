<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.extra',
  },
})
const router = useRouter()

const a = ref(0)
const l = ref('a')
const v = [
  {
    text: '全部商品',
    value: 0,
  },
  {
    text: '新款商品',
    value: 1,
  },
  {
    text: '活动商品',
    value: 2,
  },
]
const c = [
  {
    text: '默认排序',
    value: 'a',
  },
  {
    text: '好评排序',
    value: 'b',
  },
  {
    text: '销量排序',
    value: 'c',
  },
]
</script>

<template>
  <KmPageLayout navbar>
    <template #navbar-extra>
      <van-dropdown-menu>
        <van-dropdown-item v-model="a" :options="v" />
        <van-dropdown-item v-model="l" :options="c" />
      </van-dropdown-menu>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <p>
        额外区域位于导航栏下方，可以放置任何内容，例如搜索框、下拉菜单等。
      </p>
      <KmButton @click="router.back()">
        返回
      </KmButton>
      <div v-for="(index) in 50" :key="index" class="text-center">
        {{ index }}
      </div>
    </div>
  </KmPageLayout>
</template>
