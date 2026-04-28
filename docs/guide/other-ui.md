# 其他 UI 组件库

## 预设 UI 组件库

框架已为你集成好了以下 UI 组件库的工程，开箱即用，分别在 `apps/` 目录下的不同应用内：

- `core-nut-ui` - [NutUI](https://nutui.jd.com/h5/vue/)
- `core-varlet-ui` - [Varlet UI](https://varlet.pages.dev/)

## 接入其他 UI 组件库

如果你需要使用的 UI 组件库不在其中，也可以参考以下步骤自行接入其他 UI 组件库。

### 1. 复制 `core` 应用

复制 `apps/core` 应用，同时修改 `apps/<app>/package.json` 中 `name` 属性。

### 2. 修改 `apps/<app>/src/ui/provider` 目录

这个目录是框架对接 UI 组件库的统一入口，一共只有 2 个文件：

- `index.ts`：负责安装 UI 组件库，如果是专业版，并且组件库支持国际化，还需要导出该组件库的语言包映射
- `index.vue`：负责在根组件外层包裹全局 Provider，并把框架的主题、语言等状态同步给 UI 组件库

框架之所以能方便切换 UI 组件库，核心原因就在这里：

- `main.ts` 中通过 `app.use(uiProvider)` 安装 UI 组件库
- `App.vue` 中通过 `<Provider>` 包裹整棵应用

因此大多数情况下，你只需要改这两个文件，`main.ts` 和 `App.vue` 本身不需要动。

### 3. 卸载 `Vant UI`

因为是从 `apps/core` 复制出来的，那么在完成新 UI 组件库的接入后，就可以把 `Vant UI` 从当前应用中移除：

```bash
pnpm --filter @kpu-mobile/<app> remove vant @vant/touch-emulator
```
