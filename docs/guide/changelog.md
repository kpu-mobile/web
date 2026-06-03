# 更新日志

只记录 feat/fix 以及破坏性变更。

## 2.2.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v2.2.0)
🚨 Breaking Changes

- 因上游 vite-plugin-fake-server 插件问题，暂时移动 fake 文件目录  -  by @lmx [(de5d9)](https://github.com/kpu-mobile/web/commit/de5d98c)

🚀 Features

- 增强 dev 脚本匹配逻辑，支持以 'dev:' 开头的脚本名称  -  by @lmx [(70fdb)](https://github.com/kpu-mobile/web/commit/70fdb29)
- 扩展 FaInput 组件的 type 属性  -  by @lmx [(3b717)](https://github.com/kpu-mobile/web/commit/3b71762)
- 新增 FaRadioGroup 组件  -  by @lmx [(df5e1)](https://github.com/kpu-mobile/web/commit/df5e180)
- 新增 FaCheckboxGrou 组件，并重构 FaCheckbox API  -  by @lmx [(9d2e0)](https://github.com/kpu-mobile/web/commit/9d2e070)
  :::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v2.2.0)
🚨 Breaking Changes

- 因上游 vite-plugin-fake-server 插件问题，暂时移动 fake 文件目录  -  by @lmx [(b7b18)](https://github.com/kpu-mobile/web/commit/b7b18db)

🚀 Features

- 增强 dev 脚本匹配逻辑，支持以 'dev:' 开头的脚本名称  -  by @lmx [(8560e)](https://github.com/kpu-mobile/web/commit/8560e5c)
- 添加触感反馈功能  -  by @lmx [(ef75c)](https://github.com/kpu-mobile/web/commit/ef75c7d)
- 扩展 FaInput 组件的 type 属性  -  by @lmx [(a24d8)](https://github.com/kpu-mobile/web/commit/a24d84e)
- 增加 `useConfetti/useTiks` 五彩纸屑和交互音效能力  -  by @lmx [(83a14)](https://github.com/kpu-mobile/web/commit/83a1457)
- 重构主题设计，并同步 shadcn-vue 的基础色和主题色  -  by @lmx [(3ac61)](https://github.com/kpu-mobile/web/commit/3ac618a)
- 添加 FaSelect 组件的定位模式支持  -  by @lmx [(ac151)](https://github.com/kpu-mobile/web/commit/ac151c2)
- 新增 FaRadioGroup 组件  -  by @lmx [(7683d)](https://github.com/kpu-mobile/web/commit/7683d7e)
- 新增 FaCheckboxGrou 组件，并重构 FaCheckbox API  -  by @lmx [(12807)](https://github.com/kpu-mobile/web/commit/12807db)

🐞 Bug Fixes

- 修复 KmScrollingText 向下滚动时鼠标悬停时跳动  -  by @lmx [(725b7)](https://github.com/kpu-mobile/web/commit/725b72c)
- 修复默认语言如果为跟随浏览器语言时，未命中框架内语言包时报错，增加国际化回退语言  -  by @lmx [(b1b2c)](https://github.com/kpu-mobile/web/commit/b1b2ccc)
  :::

## 2.1.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v2.1.0)
🚀 Features

- 增加 varlet 和 nut 组件库演示应用  -  by @lmx [(e5120)](https://github.com/kpu-mobile/web/commit/e5120db)
- 更新 postinstall 脚本以支持技能链接和文件链接  -  by @lmx [(115ce)](https://github.com/kpu-mobile/web/commit/115ce06)
- 增加copyright子包，并给components和copyright子包增加unbuild  -  by @lmx [(ce0cf)](https://github.com/kpu-mobile/web/commit/ce0cf5b)
- 增加多个集成其他 UI 组件库的应用  -  by @lmx [(f5a2d)](https://github.com/kpu-mobile/web/commit/f5a2dd6)

🐞 Bug Fixes

- 修复dev/build/serve脚本无法在 Windows 平台正常执行  -  by @lmx [(821b8)](https://github.com/kpu-mobile/web/commit/821b8fa)
  :::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v2.1.0)
🚀 Features

- 更新 postinstall 脚本以支持技能链接和文件链接  -  by @lmx [(6a805)](https://github.com/kpu-mobile/web/commit/6a805ca)
- 增加copyright子包，并给components和copyright子包增加unbuild  -  by @lmx [(a802c)](https://github.com/kpu-mobile/web/commit/a802ccf)
- 增加多个集成其他 UI 组件库的应用  -  by @lmx [(5b7af)](https://github.com/kpu-mobile/web/commit/5b7af5f)

🐞 Bug Fixes

- 修复dev/build/serve脚本无法在 Windows 平台正常执行  -  by @lmx [(4da8b)](https://github.com/kpu-mobile/web/commit/4da8b7a)
  :::

## 2.0.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v2.0.0)
🚨 Breaking Changes

- 假数据使用方式调整  -  by @lmx [(2987a)](https://github.com/kpu-mobile/web/commit/2987a00)
- 配置项结构调整  -  by @lmx [(42d39)](https://github.com/kpu-mobile/web/commit/42d3949)
- 组件更名 `KmAuth`->`AppAuth`、`KmNotAllowed`->`AppNotAllowed`、`KmAppSetting`->`AppSetting`  -  by @lmx [(e2775)](https://github.com/kpu-mobile/web/commit/e2775c7)
- `src/utils/composables/` 目录变更为 `src/composables/`  -  by @lmx [(24568)](https://github.com/kpu-mobile/web/commit/24568ce)
- 迁移 store 到 `src/store/modules/app/` 目录下  -  by @lmx [(8a057)](https://github.com/kpu-mobile/web/commit/8a057b6)
- 更新配置文件结构  -  by @lmx [(4ced2)](https://github.com/kpu-mobile/web/commit/4ced251)
- 移除 plop  -  by @lmx [(d1637)](https://github.com/kpu-mobile/web/commit/d163704)
- 配置项调整  -  by @lmx [(faddf)](https://github.com/kpu-mobile/web/commit/faddfbb)

🚀 Features

- Unocss `presetWind3` 升级到 `presetWind4`  -  by @lmx [(389ad)](https://github.com/kpu-mobile/web/commit/389ad0e)
- 重构为 monorepo 架构，合并演示站源码  -  by @lmx [(77f5e)](https://github.com/kpu-mobile/web/commit/77f5e9f)
- 增加 skills  -  by @lmx [(676b8)](https://github.com/kpu-mobile/web/commit/676b805)
- 更新 skill  -  by @lmx [(3bf66)](https://github.com/kpu-mobile/web/commit/3bf6632)
- 内建组件提取到独立子包中  -  by @lmx [(71a09)](https://github.com/kpu-mobile/web/commit/71a094f)
- 默认配置和类型工具提取到独立子包中  -  by @lmx [(e3798)](https://github.com/kpu-mobile/web/commit/e379802)
- 升级到vite8  -  by @lmx [(ea116)](https://github.com/kpu-mobile/web/commit/ea11660)
- 添加serve脚本  -  by @lmx [(310fe)](https://github.com/kpu-mobile/web/commit/310fe5c)
  :::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v2.0.0)
🚨 Breaking Changes

- 假数据使用方式调整  -  by @lmx [(f78fa)](https://github.com/kpu-mobile/web/commit/f78fa7b)
- 配置项结构调整  -  by @lmx [(46455)](https://github.com/kpu-mobile/web/commit/4645563)
- 组件更名 `KmAuth`->`AppAuth`、`KmNotAllowed`->`AppNotAllowed`、`KmAppSetting`->`AppSetting`  -  by @lmx [(34b68)](https://github.com/kpu-mobile/web/commit/34b6831)
- `src/utils/composables/` 目录变更为 `src/composables/`  -  by @lmx [(24a7f)](https://github.com/kpu-mobile/web/commit/24a7f27)
- 迁移 store 到 `src/store/modules/app/` 目录下  -  by @lmx [(4bc02)](https://github.com/kpu-mobile/web/commit/4bc02b9)
- 更新配置文件结构  -  by @lmx [(1525a)](https://github.com/kpu-mobile/web/commit/1525a40)
- 移除 plop  -  by @lmx [(51bf1)](https://github.com/kpu-mobile/web/commit/51bf1ae)
- 配置项调整  -  by @lmx [(20fcc)](https://github.com/kpu-mobile/web/commit/20fccd7)

🚀 Features

- Unocss `presetWind3` 升级到 `presetWind4`  -  by @lmx [(16e3b)](https://github.com/kpu-mobile/web/commit/16e3bb3)
- 新增 `KmBlurReveal` / `KmBorderBeam` / `KmEmpty` / `KmFlipWords` / `KmGradientButton` / `KmScrollingText` / `KmSmoothSwipe` / `KmSparklesText` / `KmTextHighlight` / `KmTimeAgo` 组件  -  by @lmx [(771f4)](https://github.com/kpu-mobile/web/commit/771f40d)
- 重构为 monorepo 架构，合并演示站和文档站源码  -  by @lmx [(fc875)](https://github.com/kpu-mobile/web/commit/fc87565)
- 增加 skills  -  by @lmx [(dcf07)](https://github.com/kpu-mobile/web/commit/dcf0782)
- 更新 skill  -  by @lmx [(141e0)](https://github.com/kpu-mobile/web/commit/141e0be)
- 应用设置里增加默认语言  -  by @lmx [(d96b8)](https://github.com/kpu-mobile/web/commit/d96b88b)
- 内建组件提取到独立子包中  -  by @lmx [(d55cf)](https://github.com/kpu-mobile/web/commit/d55cf6d)
- 默认配置和类型工具提取到独立子包中  -  by @lmx [(44137)](https://github.com/kpu-mobile/web/commit/441372c)
- 升级到vite8  -  by @lmx [(3a656)](https://github.com/kpu-mobile/web/commit/3a65675)
- 添加serve脚本  -  by @lmx [(d638b)](https://github.com/kpu-mobile/web/commit/d638b1c)
  :::

## 1.6.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.6.0)
常规更新，无重大变更
:::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v1.6.0)
常规更新，无重大变更
:::

## 1.5.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.5.0)
🚀 Features

- 引入 vite-plugin-qrcode  -  by @lmx [(e2236)](https://github.com/kpu-mobile/web/commit/e2236ee)
  :::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v1.5.0)
🚀 Features

- 引入 vite-plugin-qrcode  -  by @lmx [(36dc4)](https://github.com/kpu-mobile/web/commit/36dc434)
  :::

## 1.4.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.4.0)
常规更新，无重大变更
:::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v1.4.0)
常规更新，无重大变更
:::

## 1.3.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.3.0)
🚀 Features

- 禁用 index.html 缓存  -  by @lmx [(1c7ba)](https://github.com/kpu-mobile/web/commit/1c7ba74)

🐞 Bug Fixes

- 修复自动生成 store 文件目录错误  -  by @lmx [(53a90)](https://github.com/kpu-mobile/web/commit/53a90db)
  :::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v1.3.0)
🚀 Features

- 禁用 index.html 缓存  -  by @lmx [(2e630)](https://github.com/kpu-mobile/web/commit/2e630d8)

🐞 Bug Fixes

- 修复自动生成 store 文件目录错误  -  by @lmx [(90d19)](https://github.com/kpu-mobile/web/commit/90d19e3)
  :::

## 1.2.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.2.0)
🚨 Breaking Changes

- Pinia store 改为自动导入  -  by @lmx [(b13a8)](https://github.com/kpu-mobile/web/commit/b13a82e)

🚀 Features

- `KmPageLayout` 组件新增 `contentClass` 属性  -  by @lmx [(25b9a)](https://github.com/kpu-mobile/web/commit/25b9a0d)
- `KmModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理  -  by @lmx [(cf3be)](https://github.com/kpu-mobile/web/commit/cf3be59)
- 为 `KmTabs` 组件添加 `listClass` 和 `contentClass` 属性，以支持自定义样式  -  by @lmx [(b25d6)](https://github.com/kpu-mobile/web/commit/b25d69f)
- `KmDrawer` 和 `KmModal` 组件新增 `destroyOnClose` 属性  -  by @lmx [(2df11)](https://github.com/kpu-mobile/web/commit/2df1156)
- Vite 升级到 7.0  -  by @lmx [(72038)](https://github.com/kpu-mobile/web/commit/7203822)
- 对不支持 CSS `round` 语法进行降级处理  -  by @lmx [(c7069)](https://github.com/kpu-mobile/web/commit/c7069e2)
  :::

:::info [专业版](https://github.com/kpu-mobile/web/releases/tag/v1.2.0)
🚨 Breaking Changes

- Pinia store 改为自动导入  -  by @lmx [(f8bfd)](https://github.com/kpu-mobile/web/commit/f8bfd4f)
- Storage 前缀配置移入环境变量配置文件中  -  by @lmx [(eaa8c)](https://github.com/kpu-mobile/web/commit/eaa8c7d)
- 移除 storage 工具函数，重写了 localStorage 和 sessionStorage ，可直接使用原生 API  -  by @lmx [(52dcd)](https://github.com/kpu-mobile/web/commit/52dcd49)

🚀 Features

- 新增 `KmMultiStepLoader` 组件  -  by @lmx [(e93d5)](https://github.com/kpu-mobile/web/commit/e93d55d)
- `KmPageLayout` 组件新增 `contentClass` 属性  -  by @lmx [(a7ad4)](https://github.com/kpu-mobile/web/commit/a7ad44f)
- `KmModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理  -  by @lmx [(3b0c1)](https://github.com/kpu-mobile/web/commit/3b0c118)
- 为 `KmTabs` 组件添加 `listClass` 和 `contentClass` 属性，以支持自定义样式  -  by @lmx [(ba81b)](https://github.com/kpu-mobile/web/commit/ba81bb5)
- `KmDrawer` 和 `KmModal` 组件新增 `destroyOnClose` 属性  -  by @lmx [(26228)](https://github.com/kpu-mobile/web/commit/2622886)
- Vite 升级到 7.0  -  by @lmx [(71aa4)](https://github.com/kpu-mobile/web/commit/71aa42e)
- 对不支持 CSS `round` 语法进行降级处理  -  by @lmx [(63a08)](https://github.com/kpu-mobile/web/commit/63a08b4)

🐞 Bug Fixes

- 修复 `KmTimeline` 组件数据少于或等于1条时候报错  -  by @lmx [(65556)](https://github.com/kpu-mobile/web/commit/6555642)
  :::

## 1.1.0

:::info [基础版](https://github.com/kpu-mobile/web/releases/tag/v1.1.0)
🚀 Features

- 增加请求重试机制  -  by @lmx [(6e7db)](https://github.com/kpu-mobile/web/commit/6e7db81)
  :::

:::tip [专业版](https://github.com/kpu-mobile/web/releases/tag/v1.1.0)
🚀 Features

- 新增 `KmTimeline` 组件  -  by @lmx [(d1d5f)](https://github.com/kpu-mobile/web/commit/d1d5f52)
- 增加请求重试机制  -  by @lmx [(5cf84)](https://github.com/kpu-mobile/web/commit/5cf84c2)
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
