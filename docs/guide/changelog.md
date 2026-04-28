# 更新日志

只记录 feat/fix 以及破坏性变更。

## 2.1.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v2.1.0)
🚀 Features

- 增加 varlet 和 nut 组件库演示应用  -  by @hooray [(e5120)](https://github.com/kpu-mobile/web/commit/e5120db)
- 更新 postinstall 脚本以支持技能链接和文件链接  -  by @hooray [(115ce)](https://github.com/kpu-mobile/web/commit/115ce06)
- 增加copyright子包，并给components和copyright子包增加unbuild  -  by @hooray [(ce0cf)](https://github.com/kpu-mobile/web/commit/ce0cf5b)
- 增加多个集成其他 UI 组件库的应用  -  by @hooray [(f5a2d)](https://github.com/kpu-mobile/web/commit/f5a2dd6)

🐞 Bug Fixes

- 修复dev/build/serve脚本无法在 Windows 平台正常执行  -  by @hooray [(821b8)](https://github.com/kpu-mobile/web/commit/821b8fa)
  :::

:::info [专业版](https://github.com/kpu-mobile/pro/releases/tag/v2.1.0)
🚀 Features

- 更新 postinstall 脚本以支持技能链接和文件链接  -  by @hooray [(6a805)](https://github.com/kpu-mobile/pro/commit/6a805ca)
- 增加copyright子包，并给components和copyright子包增加unbuild  -  by @hooray [(a802c)](https://github.com/kpu-mobile/pro/commit/a802ccf)
- 增加多个集成其他 UI 组件库的应用  -  by @hooray [(5b7af)](https://github.com/kpu-mobile/pro/commit/5b7af5f)

🐞 Bug Fixes

- 修复dev/build/serve脚本无法在 Windows 平台正常执行  -  by @hooray [(4da8b)](https://github.com/kpu-mobile/pro/commit/4da8b7a)
  :::

## 2.0.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v2.0.0)
🚨 Breaking Changes

- 假数据使用方式调整  -  by @hooray [(2987a)](https://github.com/kpu-mobile/web/commit/2987a00)
- 配置项结构调整  -  by @hooray [(42d39)](https://github.com/kpu-mobile/web/commit/42d3949)
- 组件更名 `KmAuth`->`AppAuth`、`KmNotAllowed`->`AppNotAllowed`、`KmAppSetting`->`AppSetting`  -  by @hooray [(e2775)](https://github.com/kpu-mobile/web/commit/e2775c7)
- `src/utils/composables/` 目录变更为 `src/composables/`  -  by @hooray [(24568)](https://github.com/kpu-mobile/web/commit/24568ce)
- 迁移 store 到 `src/store/modules/app/` 目录下  -  by @hooray [(8a057)](https://github.com/kpu-mobile/web/commit/8a057b6)
- 更新配置文件结构  -  by @hooray [(4ced2)](https://github.com/kpu-mobile/web/commit/4ced251)
- 移除 plop  -  by @hooray [(d1637)](https://github.com/kpu-mobile/web/commit/d163704)
- 配置项调整  -  by @hooray [(faddf)](https://github.com/kpu-mobile/web/commit/faddfbb)

🚀 Features

- Unocss `presetWind3` 升级到 `presetWind4`  -  by @hooray [(389ad)](https://github.com/kpu-mobile/web/commit/389ad0e)
- 重构为 monorepo 架构，合并演示站源码  -  by @hooray [(77f5e)](https://github.com/kpu-mobile/web/commit/77f5e9f)
- 增加 skills  -  by @hooray [(676b8)](https://github.com/kpu-mobile/web/commit/676b805)
- 更新 skill  -  by @hooray [(3bf66)](https://github.com/kpu-mobile/web/commit/3bf6632)
- 内建组件提取到独立子包中  -  by @hooray [(71a09)](https://github.com/kpu-mobile/web/commit/71a094f)
- 默认配置和类型工具提取到独立子包中  -  by @hooray [(e3798)](https://github.com/kpu-mobile/web/commit/e379802)
- 升级到vite8  -  by @hooray [(ea116)](https://github.com/kpu-mobile/web/commit/ea11660)
- 添加serve脚本  -  by @hooray [(310fe)](https://github.com/kpu-mobile/web/commit/310fe5c)
  :::

:::info [专业版](https://github.com/kpu-mobile/pro/releases/tag/v2.0.0)
🚨 Breaking Changes

- 假数据使用方式调整  -  by @hooray [(f78fa)](https://github.com/kpu-mobile/pro/commit/f78fa7b)
- 配置项结构调整  -  by @hooray [(46455)](https://github.com/kpu-mobile/pro/commit/4645563)
- 组件更名 `KmAuth`->`AppAuth`、`KmNotAllowed`->`AppNotAllowed`、`KmAppSetting`->`AppSetting`  -  by @hooray [(34b68)](https://github.com/kpu-mobile/pro/commit/34b6831)
- `src/utils/composables/` 目录变更为 `src/composables/`  -  by @hooray [(24a7f)](https://github.com/kpu-mobile/pro/commit/24a7f27)
- 迁移 store 到 `src/store/modules/app/` 目录下  -  by @hooray [(4bc02)](https://github.com/kpu-mobile/pro/commit/4bc02b9)
- 更新配置文件结构  -  by @hooray [(1525a)](https://github.com/kpu-mobile/pro/commit/1525a40)
- 移除 plop  -  by @hooray [(51bf1)](https://github.com/kpu-mobile/pro/commit/51bf1ae)
- 配置项调整  -  by @hooray [(20fcc)](https://github.com/kpu-mobile/pro/commit/20fccd7)

🚀 Features

- Unocss `presetWind3` 升级到 `presetWind4`  -  by @hooray [(16e3b)](https://github.com/kpu-mobile/pro/commit/16e3bb3)
- 新增 `KmBlurReveal` / `KmBorderBeam` / `KmEmpty` / `KmFlipWords` / `KmGradientButton` / `KmScrollingText` / `KmSmoothSwipe` / `KmSparklesText` / `KmTextHighlight` / `KmTimeAgo` 组件  -  by @hooray [(771f4)](https://github.com/kpu-mobile/pro/commit/771f40d)
- 重构为 monorepo 架构，合并演示站和文档站源码  -  by @hooray [(fc875)](https://github.com/kpu-mobile/pro/commit/fc87565)
- 增加 skills  -  by @hooray [(dcf07)](https://github.com/kpu-mobile/pro/commit/dcf0782)
- 更新 skill  -  by @hooray [(141e0)](https://github.com/kpu-mobile/pro/commit/141e0be)
- 应用设置里增加默认语言  -  by @hooray [(d96b8)](https://github.com/kpu-mobile/pro/commit/d96b88b)
- 内建组件提取到独立子包中  -  by @hooray [(d55cf)](https://github.com/kpu-mobile/pro/commit/d55cf6d)
- 默认配置和类型工具提取到独立子包中  -  by @hooray [(44137)](https://github.com/kpu-mobile/pro/commit/441372c)
- 升级到vite8  -  by @hooray [(3a656)](https://github.com/kpu-mobile/pro/commit/3a65675)
- 添加serve脚本  -  by @hooray [(d638b)](https://github.com/kpu-mobile/pro/commit/d638b1c)
  :::

## 1.6.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.6.0)
常规更新，无重大变更
:::

:::info [专业版](https://github.com/kpu-mobile/pro/releases/tag/v1.6.0)
常规更新，无重大变更
:::

## 1.5.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.5.0)
🚀 Features

- 引入 vite-plugin-qrcode  -  by @hooray [(e2236)](https://github.com/kpu-mobile/web/commit/e2236ee)
  :::

:::info [专业版](https://github.com/kpu-mobile/pro/releases/tag/v1.5.0)
🚀 Features

- 引入 vite-plugin-qrcode  -  by @hooray [(36dc4)](https://github.com/kpu-mobile/pro/commit/36dc434)
  :::

## 1.4.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.4.0)
常规更新，无重大变更
:::

:::info [专业版](https://github.com/kpu-mobile/pro/releases/tag/v1.4.0)
常规更新，无重大变更
:::

## 1.3.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.3.0)
🚀 Features

- 禁用 index.html 缓存  -  by @hooray [(1c7ba)](https://github.com/kpu-mobile/web/commit/1c7ba74)

🐞 Bug Fixes

- 修复自动生成 store 文件目录错误  -  by @hooray [(53a90)](https://github.com/kpu-mobile/web/commit/53a90db)
  :::

:::info [专业版](https://github.com/kpu-mobile/pro/releases/tag/v1.3.0)
🚀 Features

- 禁用 index.html 缓存  -  by @hooray [(2e630)](https://github.com/kpu-mobile/pro/commit/2e630d8)

🐞 Bug Fixes

- 修复自动生成 store 文件目录错误  -  by @hooray [(90d19)](https://github.com/kpu-mobile/pro/commit/90d19e3)
  :::

## 1.2.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.2.0)
🚨 Breaking Changes

- Pinia store 改为自动导入  -  by @hooray [(b13a8)](https://github.com/kpu-mobile/web/commit/b13a82e)

🚀 Features

- `KmPageLayout` 组件新增 `contentClass` 属性  -  by @hooray [(25b9a)](https://github.com/kpu-mobile/web/commit/25b9a0d)
- `KmModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理  -  by @hooray [(cf3be)](https://github.com/kpu-mobile/web/commit/cf3be59)
- 为 `KmTabs` 组件添加 `listClass` 和 `contentClass` 属性，以支持自定义样式  -  by @hooray [(b25d6)](https://github.com/kpu-mobile/web/commit/b25d69f)
- `KmDrawer` 和 `KmModal` 组件新增 `destroyOnClose` 属性  -  by @hooray [(2df11)](https://github.com/kpu-mobile/web/commit/2df1156)
- Vite 升级到 7.0  -  by @hooray [(72038)](https://github.com/kpu-mobile/web/commit/7203822)
- 对不支持 CSS `round` 语法进行降级处理  -  by @hooray [(c7069)](https://github.com/kpu-mobile/web/commit/c7069e2)
  :::

:::info [专业版](https://github.com/kpu-mobile/pro/releases/tag/v1.2.0)
🚨 Breaking Changes

- Pinia store 改为自动导入  -  by @hooray [(f8bfd)](https://github.com/kpu-mobile/pro/commit/f8bfd4f)
- Storage 前缀配置移入环境变量配置文件中  -  by @hooray [(eaa8c)](https://github.com/kpu-mobile/pro/commit/eaa8c7d)
- 移除 storage 工具函数，重写了 localStorage 和 sessionStorage ，可直接使用原生 API  -  by @hooray [(52dcd)](https://github.com/kpu-mobile/pro/commit/52dcd49)

🚀 Features

- 新增 `KmMultiStepLoader` 组件  -  by @hooray [(e93d5)](https://github.com/kpu-mobile/pro/commit/e93d55d)
- `KmPageLayout` 组件新增 `contentClass` 属性  -  by @hooray [(a7ad4)](https://github.com/kpu-mobile/pro/commit/a7ad44f)
- `KmModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理  -  by @hooray [(3b0c1)](https://github.com/kpu-mobile/pro/commit/3b0c118)
- 为 `KmTabs` 组件添加 `listClass` 和 `contentClass` 属性，以支持自定义样式  -  by @hooray [(ba81b)](https://github.com/kpu-mobile/pro/commit/ba81bb5)
- `KmDrawer` 和 `KmModal` 组件新增 `destroyOnClose` 属性  -  by @hooray [(26228)](https://github.com/kpu-mobile/pro/commit/2622886)
- Vite 升级到 7.0  -  by @hooray [(71aa4)](https://github.com/kpu-mobile/pro/commit/71aa42e)
- 对不支持 CSS `round` 语法进行降级处理  -  by @hooray [(63a08)](https://github.com/kpu-mobile/pro/commit/63a08b4)

🐞 Bug Fixes

- 修复 `KmTimeline` 组件数据少于或等于1条时候报错  -  by @hooray [(65556)](https://github.com/kpu-mobile/pro/commit/6555642)
  :::

## 1.1.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.1.0)
🚀 Features

- 增加请求重试机制  -  by @hooray [(6e7db)](https://github.com/kpu-mobile/web/commit/6e7db81)
  :::

:::tip [专业版](https://github.com/kpu-mobile/pro/releases/tag/v1.1.0)
🚀 Features

- 新增 `KmTimeline` 组件  -  by @hooray [(d1d5f)](https://github.com/kpu-mobile/pro/commit/d1d5f52)
- 增加请求重试机制  -  by @hooray [(5cf84)](https://github.com/kpu-mobile/pro/commit/5cf84c2)
  :::

## 1.0.0

**此版本有较多破坏性的变更，如果打算从 v0.x 升级，请仔细阅读并谨慎迁移代码。**

- 引入 [shadcn-vue](https://www.shadcn-vue.com/) ，内建组件和部分扩展组件基于 shadcn-vue 进行重构
- 系统主题重构，挑选了 shadcn-vue 中的 8 款主题并进行定制
- 所有内建组件名均改为 `Km` 开头，例如 `KmButton` 。部分扩展组件也转为内建组件，例如 `KmPageMain` 。新增了一系列基于 shadcn-vue 的组件，例如 `KmModal` 。为与扩展组件做区分，内建组件存放在 `src/ui/components/` 目录下
- 登录页使用内建组件进行重构，不再依赖 `vant` ，更方便迁移其他 UI 组件库
- 新增 `app.themeSync` 应用设置
- `KmPageLayout` props/slots 调整

## v0.x

前往 [v0](https://kpu-mobile.github.io/v0-docs/) 文档查看
