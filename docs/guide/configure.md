# 配置

## 环境配置

默认提供三套环境配置，分别为：

::: code-group

```yaml [.env.development 开发环境]
# 应用配置面板
VITE_APP_SETTING = true
# 页面标题
VITE_APP_TITLE = Kpu-mobile
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否开启代理
VITE_ENABLE_PROXY = false
# 是否开启开发者工具
VITE_ENABLE_VUE_DEVTOOLS = false
```

```yaml [.env.test 测试环境]
# 应用配置面板
VITE_APP_SETTING = false
# 页面标题
VITE_APP_TITLE = Kpu-mobile
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时启用假数据
VITE_BUILD_FAKE = true
# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS =
# 是否在打包后生成存档，支持 zip 和 tar
VITE_BUILD_ARCHIVE =
```

```yaml [.env.production 生产环境]
# 应用配置面板
VITE_APP_SETTING = false
# 页面标题
VITE_APP_TITLE = Kpu-mobile
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时启用假数据
VITE_BUILD_FAKE = false
# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = false
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip,brotli
# 是否在打包后生成存档，支持 zip 和 tar
VITE_BUILD_ARCHIVE =
```

:::

其中 `VITE_APP_SETTING` `VITE_APP_TITLE` `VITE_APP_API_BASEURL` `VITE_APP_DEBUG_TOOL` 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。

开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。

::: warning 注意
`VITE_APP_SETTING` 该变量是开启应用配置面板，目的是方便开发者在开发阶段调试，生产环境下默认关闭，也建议关闭。
:::

## 应用配置（框架配置）

请在 `apps/<app>/src/settings.ts` 文件中进行配置。

```ts
// 这是基础版演示源码里的自定义配置示例
import { setSettings } from '@kpu-mobile/settings'

export default setSettings({
  app: {
    auth: true,
    dynamicTitle: true,
  },
  tabbar: {
    list: [
      {
        path: '/feature/',
        icon: 'i-ic:sharp-auto-awesome',
        activeIcon: 'i-ic:twotone-auto-awesome',
        text: '特色',
      },
      {
        path: '/',
        icon: 'i-ic:sharp-home',
        activeIcon: 'i-ic:twotone-home',
        text: '主页',
      },
      {
        path: '/user/',
        icon: 'i-ic:baseline-person',
        activeIcon: 'i-ic:twotone-person',
        text: '我的',
      },
    ],
  },
  copyright: {
    dates: '2024-present',
    company: 'Kpu-mobile',
    website: 'https://kpu-mobile.github.io',
  },
})
```

::: warning 注意
文档中提供的配置介绍，如果在本地的开发环境使用中报错或者无法生效，说明你使用的版本不支持或者配置参数有变动，你可以查看 `packages/settings` 子包中的默认配置与类型定义作为参考。

并且如果你使用的是 Visual Studio Code ，鼠标悬浮到属性上时，会有属性的介绍：

![](/settings.png){data-zoomable}
:::
