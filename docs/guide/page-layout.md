# 页面布局

`<AppPageLayout>` 页面布局组件是本框架区别于其他 H5 框架的最重要的特性。它提供了页面整体布局的基础，包括顶部导航栏、顶部标签栏、返回顶部、记录滚动位置等特性。

## 基本用法

```vue
<template>
  <AppPageLayout :navbar="false" tabbar copyright>
    <!-- ... -->
  </AppPageLayout>
</template>
```

本组件不是一个可以随处使用的组件，它必须应用在根节点，并且一个页面里只能有一个 `<AppPageLayout>` 组件。

## Props

### titleCenter&#x20;

- 类型：`boolean`
- 默认值：`true`
- 说明：导航栏标题是否居中

### navbar

- 类型：`boolean`
- 默认值：`undefined`
- 说明：是否启用导航栏，默认使用应用配置 `navbar.enable`

### navbarMode&#x20;

- 类型：`'fixed' | 'static' | 'show-hide-fixed' | 'sticky'`
- 默认值：`undefined`
- 说明：导航栏模式，默认使用应用配置 `navbar.mode`

### navbarStartSide&#x20;

- 类型：`navbarSideOptions | navbarSideOptions[]`
- 默认值：`undefined`
- 说明：从预设中设置展示在导航栏左侧的图标按钮

```ts
type navbarSideOptions = 'back' | 'home' | 'forward' | 'i18n' | 'colorScheme'
```

### navbarEndSide&#x20;

- 类型：`navbarSideOptions | navbarSideOptions[]`
- 默认值：`undefined`
- 说明：从预设中设置展示在导航栏右侧的图标按钮

```ts
type navbarSideOptions = 'back' | 'home' | 'forward' | 'i18n' | 'colorScheme'
```

### navbarBorder

- 类型：`boolean`
- 默认值：`true`
- 说明：是否启用导航栏边框

### navbarRadius&#x20;

- 类型：`boolean`
- 默认值：`false`
- 说明：是否启用导航栏圆角

### navbarMask&#x20;

- 类型：`boolean`
- 默认值：`false`
- 说明：是否启用导航栏渐变遮罩

### navbarClass

- 类型：`string`
- 默认值：`undefined`
- 说明：导航栏自定义类名

### tabbar

- 类型：`boolean`
- 默认值：`undefined`
- 说明：是否启用标签栏，默认使用应用配置 `tabbar.enable`

### tabbarMode&#x20;

- 类型：`'fixed' | 'sticky'`
- 默认值：`undefined`
- 说明：标签栏模式，默认使用应用配置 `tabbar.mode`

### tabbarName&#x20;

- 类型：`string`
- 默认值：`undefined`
- 说明：标签栏名称，如果应用配置里配置了多套标签栏，需设置当前页面使用哪套标签栏，默认使用第一套

### tabbarBorder

- 类型：`boolean`
- 默认值：`true`
- 说明：是否启用标签栏边框

### tabbarRadius&#x20;

- 类型：`boolean`
- 默认值：`false`
- 说明：是否启用标签栏圆角

### tabbarMask&#x20;

- 类型：`boolean`
- 默认值：`false`
- 说明：是否启用标签栏渐变遮罩

### tabbarClass

- 类型：`string`
- 默认值：`undefined`
- 说明：标签栏自定义类名

### copyright

- 类型：`boolean`
- 默认值：`undefined`
- 说明：是否展示底部版权信息，默认使用应用配置 `copyright.enable`

### backTop

- 类型：`boolean`
- 默认值：`undefined`
- 说明：是否启用返回顶部按钮，默认使用应用配置 `app.enableBackTop`

### savedPosition&#x20;

- 类型：`boolean`
- 默认值：`undefined`
- 说明：是否记忆滚动位置（前提条件：需开启页面保活）

### scrollTop&#x20;

- 类型：`number`
- 默认值：`undefined`
- 说明：设置竖向滚动条位置

### scrollLeft&#x20;

- 类型：`number`
- 默认值：`undefined`
- 说明：设置横向滚动条位置

### scrollWithAnimation&#x20;

- 类型：`boolean`
- 默认值：`undefined`
- 说明：是否在设置滚动条位置时使用动画过渡

## Slots

### default

页面内容区域

### navbar

导航栏标题区域

### navbar-start

导航栏左侧图标区域

### navbar-end

导航栏右侧图标区域

### navbar-extra&#x20;

导航栏下方额外区域

### tabbar

标签栏区域

### tabbar-extra&#x20;

标签栏下方额外区域

## Events

### scroll

页面滚动时触发

### reachTop

页面滚动到顶部时触发

### reachBottom

页面滚动到底部时触发

## 导航栏

### enable

可以将导航栏全局开启，这样所有页面默认都会显示导航栏。

```ts {2-4}
export default setSettings({
  navbar: {
    enable: true,
  },
})
```

或者也可以提供一段正则表达式，例如下面这段配置表示页面在微信环境下默认不显示导航栏：

```ts {2-4}
export default setSettings({
  navbar: {
    enable: !/MicroMessenger/i.test(window.navigator.userAgent),
  },
})
```

### mode&#x20;

全局设置导航栏模式，默认为 `fixed`

- `'fixed'` 固定，不跟随页面滚动，始终固定在顶部
- `'static'` 静止，跟随页面滚动
- `'show-hide-fixed'` 显隐固定，默认隐藏，页面滚动时显示
- `'sticky'` 粘性，页面往下滚动时隐藏，往上滚动时显示

```ts {2-4}
export default setSettings({
  navbar: {
    mode: 'fixed',
  },
})
```

## 标签栏

### enable

可以将标签栏全局开启，这样所有页面默认都会显示标签栏。

```ts {2-4}
export default setSettings({
  tabbar: {
    enable: true,
  },
})
```

### mode&#x20;

全局设置标签栏模式，默认为 `fixed`

- `'fixed'` 固定，不跟随页面滚动，始终固定在底部
- `'sticky'` 粘性，页面往下滚动时隐藏，往上滚动时显示

```ts {2-4}
export default setSettings({
  tabbar: {
    mode: 'sticky',
  },
})
```

### list

标签栏展示数据：

```ts {2-15}
export default setSettings({
  tabbar: {
    list: [
      {
        path: '/',
        icon: 'i-ic:sharp-home',
        text: '主页',
      },
      {
        path: '/user',
        icon: 'i-ic:baseline-person',
        text: '我的',
      },
    ],
  },
})
```

专业版支持配置多套标签栏，然后通过 `tabbarName` 属性指定当前页面使用哪套标签栏：

```ts {2-35}
export default setSettings({
  tabbar: {
    list: [
      {
        name: 'tabbar1',
        list: [
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: '主页',
          },
          {
            path: '/user',
            icon: 'i-ic:baseline-person',
            text: '我的',
          },
        ],
      },
      {
        name: 'tabbar2',
        list: [
          {
            path: '/list',
            icon: 'i-ic:sharp-list',
            text: '列表',
          },
          {
            path: '/setting',
            icon: 'i-ic:sharp-settings',
            text: '设置',
          },
        ],
      },
    ],
  },
})
```

```vue {2}
<template>
  <AppPageLayout tabbar-name="tabbar2">
    <!-- ... -->
  </AppPageLayout>
</template>
```

#### path

跳转路由地址

|  类型  | 默认值 | 说明         |
| :----: | :----: | :----------- |
| string |   /    | 跳转路由地址 |

#### icon

|  类型  | 默认值 | 说明     |
| :----: | :----: | :------- |
| string |   /    | 显示图标 |

该项配置最终会通过 `<KmIcon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[图标](./icon)》。

#### activeIcon&#x20;

|  类型  | 默认值 | 说明           |
| :----: | :----: | :------------- |
| string |   /    | 激活时显示图标 |

该项配置最终会通过 `<KmIcon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[图标](./icon)》。

#### text

|  类型  | 默认值 | 说明     |
| :----: | :----: | :------- |
| string |   /    | 显示文字 |

#### badge&#x20;

设置不同的类型值，展示效果也会不同。

- `boolean` 展示形式为点，当值为 false 时隐藏
- `number` 展示形式为文本，当值小于等于 0 时隐藏
- `string` 展示形式为文本，当值为空时隐藏

如果标记需要动态更新，请设置为箭头函数形式，并返回外部变量，例如搭配 pinia 一起使用。

```ts
badge: () => globalStore.number
```
