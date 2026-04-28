<script setup lang="ts">
import type { NavbarSideOptions } from '@/components/AppPageLayout/HeaderSide/index.vue'

definePage({
  meta: {
    title: 'pages.navbar.preset',
  },
})
const router = useRouter()
const list: { label: string, value: NavbarSideOptions }[] = [{
  label: '主页',
  value: 'home',
}, {
  label: '返回',
  value: 'back',
}, {
  label: '前进',
  value: 'forward',
}, {
  label: '语言',
  value: 'i18n',
}, {
  label: '明暗模式',
  value: 'colorScheme',
}]
const navbarStartSide = ref<NavbarSideOptions[]>(['home'])
function toggleNavbarStartSide(navbar: NavbarSideOptions) {
  navbarStartSide.value.includes(navbar) ? navbarStartSide.value.splice(navbarStartSide.value.indexOf(navbar), 1) : navbarStartSide.value.push(navbar)
}
const navbarEndSide = ref<NavbarSideOptions[]>(['i18n'])
function toggleNavbarEndSide(navbar: NavbarSideOptions) {
  navbarEndSide.value.includes(navbar) ? navbarEndSide.value.splice(navbarEndSide.value.indexOf(navbar), 1) : navbarEndSide.value.push(navbar)
}
</script>

<template>
  <AppPageLayout navbar :navbar-start-side="navbarStartSide" :navbar-end-side="navbarEndSide">
    <div class="p-4 flex flex-col gap-4">
      <div class="flex gap-4">
        <!--        -->
        <div class="flex-1">
          <div class="mb-2 text-center">
            左侧
          </div>
          <van-checkbox-group v-model="navbarStartSide">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in list"
                :key="index"
                clickable
                :title="item.label"
                @click="toggleNavbarStartSide(item.value)"
              >
                <template #right-icon>
                  <van-checkbox
                    :name="item.value"
                    @click.stop
                  />
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
        <div class="flex-1">
          <div class="mb-2 text-center">
            右侧
          </div>
          <van-checkbox-group v-model="navbarEndSide">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in list"
                :key="index"
                clickable
                :title="item.label"
                @click="toggleNavbarEndSide(item.value)"
              >
                <template #right-icon>
                  <van-checkbox
                    :name="item.value"
                    @click.stop
                  />
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
      </div>
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </AppPageLayout>
</template>
