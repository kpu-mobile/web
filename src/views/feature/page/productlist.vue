<script setup lang="ts">
import FaScrollArea from '@/ui/components/KmScrollArea/index.vue'

const n = ref(0)
const list = ref([{
  name: '为你推荐',
}, {
  name: '超低折扣',
}, {
  name: '新品上架',
}, {
  name: '分类1',
}, {
  name: '分类2',
}, {
  name: '分类3',
}, {
  name: '分类4',
}, {
  name: '分类5',
}, {
  name: '分类6',
}, {
  name: '分类7',
}, {
  name: '分类8',
}, {
  name: '分类9',
}, {
  name: '分类10',
}, {
  name: '分类11',
}, {
  name: '分类12',
}, {
  name: '分类13',
}, {
  name: '分类14',
}, {
  name: '分类15',
}])
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back" :copyright="false">
    <FaScrollArea
      class="category-list w-[80px]"
      mask
      :scrollbar="false"
    >
      <div
        v-for="(item, index) in list" :key="index"
        class="relative w-full px-2 py-4 text-center text-xs" :class="{
          'active-item bg-background': n === index,
          'cursor-pointer': n !== index,
        }"
        @click="n = index"
      >
        <div class="truncate">
          {{ item.name }}
        </div>
      </div>
    </FaScrollArea>
    <div class="product-list ms-[80px] flex flex-col gap-4 of-auto overscroll-none bg-background p-4">
      <div v-for="i in 20" :key="i" class="flex gap-2">
        <img
          src="https://fakeimg.pl/80/282828/?retina=1"
          class="block h-[80px] w-[80px]"
        >
        <div class="flex flex-col gap-1">
          <div class="line-clamp-2 font-bold leading-tight">
            大红番茄500g，大红番茄500g，大红番茄500g
          </div>
          <div class="text-xs c-stone">
            大山里的美味 | 番茄味浓郁
          </div>
          <div class="flex items-baseline justify-between">
            <div class="flex items-baseline gap-2">
              <div class="text-xs c-red font-bold">
                ￥<span class="text-lg">8</span>.99
              </div>
              <div class="text-xs c-stone/50 line-through">
                ￥12.99
              </div>
            </div>
            <div class="flex-center rounded-md bg-red p-1 c-white">
              <KmIcon name="i-typcn:plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </KmPageLayout>
</template>

<style scoped>
.category-list {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  .active-item {
    &::before,
    &::after {
      position: absolute;
      right: 0;
      width: 20px;
      height: 20px;
      content: "";
      border-radius: 100%;
      box-shadow: 0 0 0 20px hsl(var(--background));
      transition: box-shadow 0.3s;
    }

    &::before {
      top: -20px;
      clip-path: inset(50% -10px 0 50%);
    }

    &::after {
      bottom: -20px;
      clip-path: inset(0 -10px 50% 50%);
    }
  }
}

.product-list {
  position: absolute;
  inset: 0;
}
</style>
