<script setup lang="ts">
import { computed, ref } from 'vue'
import GlowCard from './GlowCard/index.vue'
import PhoneFrame from './PhoneFrame/index.vue'
// 技术栈
const techList = [
  'Vue 3.6',
  'Vite 8',
  'Vue Router',
  'Pinia',
  'UnoCSS',
  'TypeScript',
]

// 技能列表
const skillList = [
  {
    name: 'km-framework-settings',
    href: '/guide/skills/km-framework-settings',
    title: '框架设置',
    detail: '集中管理默认语言、明暗模式、导航栏、标签栏、页面动画和版权信息。涉及全局体验时，可以直接落到统一配置入口。',
  },
  {
    name: 'km-i18n-manager',
    href: '/guide/skills/km-i18n-manager',
    title: '国际化管理',
    detail: '给页面和组件补齐多语言能力，同步维护翻译 key、语言文件和路由标题，减少漏翻与结构不一致。',
  },
  {
    name: 'km-page-optimizer',
    href: '/guide/skills/km-page-optimizer',
    title: '页面优化',
    detail: '用框架内建组件替换原生 HTML 和重复实现，统一交互风格，同时保留原有业务逻辑。',
  },
  {
    name: 'km-store-generator',
    href: '/guide/skills/km-store-generator',
    title: 'Store 生成',
    detail: '快速生成 Pinia store，处理共享状态、持久化字段和常见派生逻辑，让跨页面数据更稳定。',
  },
  {
    name: 'km-theme-customizer',
    href: '/guide/skills/km-theme-customizer',
    title: '主题定制',
    detail: '围绕品牌色或设计风格生成 light / dark 两套主题配色，保证框架主题切换时始终完整可用。',
  },
]

// 版本切换
const edition = ref('pro')
const previewUrl = computed(() =>
  edition.value === 'basic'
    ? 'https://kpu-mobile.github.io/web-example/'
    : 'https://kpu-mobile.github.io/web-example/',
)
</script>

<template>
  <section class="text-zinc-950 bg-zinc-50 relative overflow-hidden isolate dark:text-zinc-50 dark:bg-zinc-950">
    <!-- 背景装饰 -->
    <div class="pointer-events-none inset-0 absolute overflow-hidden">
      <div
        class="bg-[linear-gradient(to_right,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.06)_1px,transparent_1px)] bg-[size:84px_84px] opacity-72 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] inset-0 absolute dark:bg-[linear-gradient(to_right,rgba(244,244,245,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,244,245,0.09)_1px,transparent_1px)] dark:opacity-48"
      />
      <div
        class="rounded-full bg-[#ae3ff5]/18 h-56 w-56 right-[8%] top-[8%] absolute blur-3xl dark:bg-[#ae3ff5]/14"
      />
      <div
        class="rounded-full bg-[#ae3ff5]/14 h-[28rem] w-[28rem] right-[8%] top-[32%] absolute blur-[140px] dark:bg-[#ae3ff5]/10"
      />
    </div>

    <!-- 主内容区 -->
    <div class="mx-auto px-6 py-16 gap-14 grid grid-cols-1 max-w-[1400px] items-center relative lg:px-12 md:px-10 xl:px-16 lg:gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(460px,0.96fr)]">
      <!-- 左侧文字 -->
      <div class="max-w-[760px] order-2 lg:pr-10 lg:order-1">
        <div
          class="text-[11px] text-zinc-600 tracking-[0.24em] font-medium px-3 py-2 border border-zinc-200/80 rounded-full bg-white/80 inline-flex gap-3 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] items-center backdrop-blur-sm dark:text-zinc-300 dark:border-white/10 dark:bg-white/6 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <span class="rounded-full bg-[#ae3ff5] h-2 w-2" />
          <span>H5 Framework</span>
        </div>

        <h1
          class="text-3xl text-zinc-950 leading-none tracking-[-0.07em] font-semibold mt-7 text-pretty md:text-5xl sm:text-4xl xl:text-[4.5rem] dark:text-zinc-50"
        >
          让你的 H5 项目拥有稳固的工程底座
        </h1>

        <p class="text-sm text-zinc-600 leading-8 mt-4 max-w-[62ch] dark:text-zinc-300">
          {{ techList.join(' · ') }}
        </p>

        <!-- 按钮组 -->
        <div class="mt-8 flex flex-col gap-3">
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="/guide/intro"
              class="group text-sm text-white tracking-tight font-medium px-5 py-3 rounded-full bg-[#ae3ff5] inline-flex shadow-[0_16px_40px_-22px_rgba(174,63,245,0.72)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] items-center justify-center hover:bg-[#9630d8] active:translate-y-px active:scale-[0.985]"
            >
              <span>开始使用</span>
              <span
                class="i-lucide-arrow-right ml-2 opacity-70 shrink-0 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/guide/why"
              class="group text-sm text-zinc-900 tracking-tight font-medium px-5 py-3 border border-zinc-300/80 rounded-full bg-white/72 inline-flex shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] items-center justify-center backdrop-blur-sm dark:text-zinc-100 dark:border-white/10 hover:border-[#ae3ff5]/40 dark:bg-white/6 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] active:translate-y-px active:scale-[0.985] dark:hover:border-[#ae3ff5]/40"
            >
              <span>为什么选择我们</span>
              <span
                class="i-lucide-arrow-right ml-2 opacity-70 shrink-0 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://kpu-mobile.github.io/basic-example/"
              target="_blank"
              rel="noreferrer"
              class="group text-sm text-zinc-600 tracking-tight font-medium px-1 py-2 rounded-full inline-flex gap-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] items-center justify-center dark:text-zinc-300 hover:text-[#ae3ff5] dark:hover:text-[#d7a4fb]"
            >
              <span>在线预览</span>
              <span
                class="i-lucide-arrow-up-right opacity-70 shrink-0 h-4 w-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- 右侧预览图 -->
      <div class="hidden lg:block lg:order-2">
        <div class="mx-auto pb-6 pt-10 max-w-[680px] w-full relative lg:pb-0 lg:pt-0">
          <div
            class="mx-auto w-fit relative z-[1] lg:[perspective-origin:80%_82%] lg:[perspective:1400px]"
          >
            <div
              class="origin-center scale-[0.72] lg:translate-x-6 lg:scale-[0.92] sm:scale-[0.82] xl:scale-[0.98] lg:transform-gpu lg:[filter:drop-shadow(30px_36px_56px_rgb(0_0_0_/_0.2))] lg:[transform-style:preserve-3d] lg:[transform:rotateX(10deg)_rotateY(-10deg)_rotateZ(10deg)]"
            >
              <!-- 基础版 / 专业版 切换 -->
              <!-- <button
                type="button"
                class="text-[12px] px-4 py-2 border rounded-full inline-flex gap-2 shadow-[0_18px_40px_-28px_rgba(24,24,27,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] items-center left-12 top-7 absolute backdrop-blur-md dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] active:translate-y-px active:scale-[0.985]" :class="[
                  edition === 'basic'
                    ? 'border-[#ae3ff5]/40 bg-[#ae3ff5] text-white shadow-[0_18px_40px_-24px_rgba(174,63,245,0.48)] dark:border-[#ae3ff5]/40 dark:bg-[#ae3ff5] dark:text-white'
                    : 'border-zinc-200/80 bg-white/86 text-zinc-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300',
                ]"
                @click="edition = 'basic'"
              >
                <span
                  class="rounded-full h-2 w-2" :class="[
                    edition === 'basic' ? 'bg-white' : 'bg-[#ae3ff5]',
                  ]"
                />
                基础版
              </button> -->

              <!-- <button
                type="button"
                class="text-[12px] px-4 py-2 border rounded-full inline-flex gap-2 shadow-[0_18px_40px_-28px_rgba(24,24,27,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] items-center right-12 top-7 absolute backdrop-blur-md dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] active:translate-y-px active:scale-[0.985]" :class="[
                  edition === 'pro'
                    ? 'border-[#ae3ff5]/40 bg-[#ae3ff5] text-white shadow-[0_18px_40px_-24px_rgba(174,63,245,0.48)] dark:border-[#ae3ff5]/40 dark:bg-[#ae3ff5] dark:text-white'
                    : 'border-zinc-200/80 bg-white/86 text-zinc-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300',
                ]"
                @click="edition = 'pro'"
              >
                <span
                  class="rounded-full h-2 w-2" :class="[
                    edition === 'pro' ? 'bg-white' : 'bg-[#ae3ff5]',
                  ]"
                />
                专业版
              </button> -->

              <!-- 预览 iframe -->
              <PhoneFrame :src="previewUrl" class="border-0" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI 技能区块 -->
    <div class="mx-auto mt-4 px-6 pb-16 max-w-[1400px] relative lg:px-12 md:px-10 xl:px-16">
      <div
        class="mb-10 p-6 border border-zinc-200/80 rounded-[2.25rem] bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-sm dark:border-white/10 dark:bg-white/4 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      >
        <div>
          <div class="text-[11px] text-zinc-500 tracking-[0.22em] uppercase dark:text-zinc-400">
            AI Skills
          </div>
          <h2 class="text-2xl text-zinc-950 tracking-tight font-semibold mt-3 dark:text-zinc-50">
            不只是框架，更是把日常开发高频动作沉淀成了可调用的技能
          </h2>
          <p class="text-sm text-zinc-600 leading-7 mt-3 dark:text-zinc-300">
            针对设置、国际化、页面优化、状态管理和主题定制这些高频任务，已经整理成可复用的 AI 技能，减少重复沟通和手工整理。
          </p>
        </div>

        <!-- 技能卡片 -->
        <div class="mt-6 gap-4 grid grid-cols-1 xl:grid-cols-[repeat(5,minmax(0,1fr))] md:grid-cols-2">
          <a
            v-for="item in skillList"
            :key="item.name"
            :href="item.href"
            class="group block"
          >
            <GlowCard
              :border-radius="24"
              :glow-radius="32"
              :fill-opacity="0.36"
              glow-color="277 90 62"
              background-color="oklch(var(--background) 0.72)"
              :colors="['#ae3ff5', '#e879f9', '#c084fc']"
              class-name="h-full rounded-[1.5rem]"
            >
              <div
                class="p-4 border border-zinc-200/80 rounded-[1.5rem] bg-zinc-50/80 h-full min-h-[180px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] relative dark:border-white/10 group-hover:border-[#ae3ff5]/28 dark:bg-zinc-900/36"
              >
                <span
                  class="text-zinc-400 opacity-0 translate-x-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] right-4 top-4 absolute dark:text-zinc-500 group-hover:opacity-100 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
                >↗</span>
                <div class="text-sm text-zinc-950 tracking-tight font-medium pr-8 dark:text-zinc-50">
                  {{ item.title }}
                </div>
                <p class="text-[13px] text-zinc-600 leading-6 mt-2 dark:text-zinc-300">
                  {{ item.detail }}
                </p>
              </div>
            </GlowCard>
          </a>
        </div>
      </div>

      <!-- 底部下载/购买 -->
      <div class="gap-4 grid grid-cols-1">
        <a
          href="https://github.com/kpu-mobile/web/releases"
          target="_blank"
          rel="noreferrer"
          class="group p-6 border border-zinc-200/80 rounded-[2rem] bg-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-sm dark:border-white/10 hover:border-zinc-300/90 dark:bg-white/4 hover:bg-white/86 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:bg-white/6"
        >
          <div class="flex gap-4 items-start justify-between">
            <div>
              <div class="text-[11px] text-zinc-500 tracking-[0.22em] uppercase dark:text-zinc-400">
                Basic Edition
              </div>
              <h2 class="text-2xl text-zinc-950 tracking-tight font-semibold mt-3 dark:text-zinc-50">
                下载基础版
              </h2>
              <p class="text-sm text-zinc-600 leading-7 mt-2 dark:text-zinc-300">
                基于 MIT 许可协议，开源且免费，适合快速开始、自由扩展和自行搭建项目基线。
              </p>
            </div>
            <span
              class="i-lucide-arrow-up-right text-zinc-300 mt-1 shrink-0 h-5 w-5 transition-transform duration-300 dark:text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
