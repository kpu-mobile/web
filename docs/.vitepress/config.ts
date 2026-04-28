import { fileURLToPath, URL } from 'node:url'
import taskLists from 'markdown-it-task-lists'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kpu-mobile 官方文档',
  description: '自成一派的移动端 H5 框架，采用 Vue3 + Vite 技术栈。',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['meta', { name: 'keywords', content: 'vue,vite,router,vuex,pinia,typescript,template,h5,mobile,移动端,模板' }],
    ['keywords', { content: 'vue,vite,router,vuex,pinia,typescript,template,h5,mobile,移动端,模板' }],
    ['description', { content: '自成一派的移动端 H5 框架，采用 Vue3 + Vite 技术栈。' }],
    ['script', {}, `
var _hmt = _hmt || [];
_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
  shouldTrackUrlChange: function(newPath, oldPath) {
    return newPath && oldPath;
  }
}]);
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d7f6dd1733b48011a6bf797914549256";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
    `],
  ],
  markdown: {
    config: (md) => {
      md.use(taskLists)
    },
  },
  themeConfig: {
    logo: '/logo.png',
    footer: {
      copyright: 'Copyright © 2024-present Kpu-mobile',
    },
    nav: [
      {
        text: '文档 <img src="https://img.shields.io/github/v/release/kpu-mobile/web?style=flat-square&label=%20&color=%23AE3FF5" style="display: inline-block; margin-top: -2px; margin-left: 4px; vertical-align: middle;" />',
        items: [
          {
            text: '指南',
            link: '/guide/intro',
          },
          {
            text: '组件',
            link: '/components/index',
          },
          {
            text: '历史版本文档',
            items: [
              { text: 'v0', link: 'https://kpu-moblegithub.io/v0-docs/' },
            ],
          },
        ],
      },
      {
        text: '在线演示',
        items: [
          {
            text: '地址',
            link: 'https://kpu-mobile.github.io/web-example',
          },
          {
            text: '备用地址',
            link: 'https://kpu-moble.pages.dev/web-example',
          },
        ],
      },
      {
        text: '技术支持',
        link: '/support',
      },
      {
        text: '下载',
        items: [
          {
            text: '下载基础版',
            link: 'https://github.com/kpu-mobile/web/releases',
          },
        ],
      },
      {
        text: '💖 友情推荐',
        items: [
          {
            text: '交换友链 ?',
            link: '/links',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>',
        },
        link: 'https://gitee.com/kpu-mobile/web',
      },
      {
        icon: 'github',
        link: 'https://github.com/kpu-mobile/web',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '文档说明', link: '/guide/intro' },
            { text: '为什么选择我们 ?', link: '/guide/why' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
          collapsed: false,
        },
        {
          text: 'AI 技能 (Skills)',
          items: [
            { text: '介绍', link: '/guide/skills/' },
            { text: 'km-framework-settings', link: '/guide/skills/km-framework-settings' },
            { text: 'km-i18n-manager', link: '/guide/skills/km-i18n-manager' },
            { text: 'km-page-optimizer', link: '/guide/skills/km-page-optimizer' },
            { text: 'km-store-generator', link: '/guide/skills/km-store-generator' },
            { text: 'km-theme-customizer', link: '/guide/skills/km-theme-customizer' },
          ],
          collapsed: true,
        },
        {
          text: '入门',
          items: [
            { text: '准备工作', link: '/guide/ready' },
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '配置', link: '/guide/configure' },
            { text: '开发者工具', link: '/guide/devtools' },
            { text: '路由', link: '/guide/router' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '资源', link: '/guide/resources' },
            { text: '图标', link: '/guide/icon' },
            { text: '构建与预览', link: '/guide/build' },
          ],
          collapsed: false,
        },
        {
          text: '进阶',
          items: [
            { text: '浏览器适配', link: '/guide/viewport' },
            { text: '页面布局', link: '/guide/page-layout' },
            { text: '登录', link: '/guide/login' },
            { text: '权限认证', link: '/guide/auth' },
            { text: '主题', link: '/guide/theme' },
            { text: '动态标题', link: '/guide/title' },
          ],
          collapsed: false,
        },
        {
          text: '高级',
          items: [
            { text: '页面保活', link: '/guide/keep-alive' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '常用 API', link: '/guide/api' },
            { text: '私有 Storage 数据', link: '/guide/storage' },
            { text: '页面水印', link: '/guide/watermark' },
            { text: '错误日志', link: '/guide/error-log' },
            { text: '自定义字体', link: '/guide/font' },
            { text: '其他 UI 组件库', link: '/guide/other-ui' },
            { text: 'Composition API', link: '/guide/composition-api' },
          ],
          collapsed: false,
        },
        {
          text: '其它',
          items: [
            { text: '框架更新', link: '/guide/upgrade' },
            { text: '常见问题', link: '/guide/q-a' },
          ],
          collapsed: false,
        },
      ],
      '/components/': [
        { text: '组件介绍', link: '/components/' },
        {
          text: '内建组件',
          items: [
            { text: 'KmAnimatedCountTo', link: '/components/KmAnimatedCountTo' },
            { text: 'KmAnimatedCountToGroup', link: '/components/KmAnimatedCountToGroup' },
            { text: 'KmAvatar', link: '/components/KmAvatar' },
            { text: 'KmBadge', link: '/components/KmBadge' },
            { text: 'KmBlurReveal', link: '/components/KmBlurReveal' },
            { text: 'KmBorderBeam', link: '/components/KmBorderBeam' },
            { text: 'KmButton', link: '/components/KmButton' },
            { text: 'KmButtonGroup', link: '/components/KmButtonGroup' },
            { text: 'KmCard', link: '/components/KmCard' },
            { text: 'KmCheckbox', link: '/components/KmCheckbox' },
            { text: 'KmCode', link: '/components/KmCode' },
            { text: 'KmCodePreview', link: '/components/KmCodePreview' },
            { text: 'KmCountTo', link: '/components/KmCountTo' },
            { text: 'KmDigitalCard', link: '/components/KmDigitalCard' },
            { text: 'KmDivider', link: '/components/KmDivider' },
            { text: 'KmDrawer', link: '/components/KmDrawer' },
            { text: 'KmEmpty', link: '/components/KmEmpty' },
            { text: 'KmFlipWords', link: '/components/KmFlipWords' },
            { text: 'KmGradientButton', link: '/components/KmGradientButton' },
            { text: 'KmIcon', link: '/components/KmIcon' },
            { text: 'KmInput', link: '/components/KmInput' },
            { text: 'KmLoading', link: '/components/KmLoading' },
            { text: 'KmMarquee', link: '/components/KmMarquee' },
            { text: 'KmModal', link: '/components/KmModal' },
            { text: 'KmMultiStepLoader', link: '/components/KmMultiStepLoader' },
            { text: 'KmPageMain', link: '/components/KmPageMain' },
            { text: 'KmParticlesBg', link: '/components/KmParticlesBg' },
            { text: 'KmPatternBg', link: '/components/KmPatternBg' },
            { text: 'KmQrcode', link: '/components/KmQrcode' },
            { text: 'KmScratchOff', link: '/components/KmScratchOff' },
            { text: 'KmScrollArea', link: '/components/KmScrollArea' },
            { text: 'KmScrollingText', link: '/components/KmScrollingText' },
            { text: 'KmSelect', link: '/components/KmSelect' },
            { text: 'KmSlider', link: '/components/KmSlider' },
            { text: 'KmSmoothSwipe', link: '/components/KmSmoothSwipe' },
            { text: 'KmSparklesText', link: '/components/KmSparklesText' },
            { text: 'KmSparkline', link: '/components/KmSparkline' },
            { text: 'KmSpringDrawer', link: '/components/KmSpringDrawer' },
            { text: 'KmSwitch', link: '/components/KmSwitch' },
            { text: 'KmTabs', link: '/components/KmTabs' },
            { text: 'KmTextHighlight', link: '/components/KmTextHighlight' },
            { text: 'KmTimeAgo', link: '/components/KmTimeAgo' },
            { text: 'KmTimeline', link: '/components/KmTimeline' },
            { text: 'KmToast', link: '/components/KmToast' },
            { text: 'KmTrend', link: '/components/KmTrend' },
          ],
        },
      ],
      '/': [
        {
          text: '',
          items: [
            { text: '技术支持', link: '/support' },
          ],
        },
      ],
    },
    outline: 'deep',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/custom-home/index.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      UnoCSS() as any,
    ],
  },
})
