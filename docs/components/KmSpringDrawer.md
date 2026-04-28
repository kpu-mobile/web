# KmSpringDrawer 弹簧抽屉组件

基于 Vaul 的弹簧动效底部抽屉组件，提供流畅的弹性动画效果，支持从底部弹出，适合移动端交互场景。

## 基础用法

```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <KmButton @click="open = true">打开抽屉</KmButton>
  <KmSpringDrawer v-model="open" title="抽屉标题">
    <div>抽屉内容</div>
  </KmSpringDrawer>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 是否打开抽屉 |
| `title` | `string` | - | 抽屉标题（必填） |
| `description` | `string` | - | 抽屉描述文字 |
| `showConfirmButton` | `boolean` | `true` | 是否显示确定按钮 |
| `showCancelButton` | `boolean` | `false` | 是否显示取消按钮 |
| `confirmButtonText` | `string` | `'确定'` | 确定按钮文字 |
| `cancelButtonText` | `string` | `'取消'` | 取消按钮文字 |
| `confirmButtonDisabled` | `boolean` | `false` | 确定按钮是否禁用 |
| `confirmButtonLoading` | `boolean` | `false` | 确定按钮加载状态 |
| `header` | `boolean` | `true` | 是否显示头部 |
| `footer` | `boolean` | `true` | 是否显示底部 |
| `closeOnClickOverlay` | `boolean` | `true` | 点击遮罩是否关闭 |
| `closeOnPressEscape` | `boolean` | `true` | 按 ESC 是否关闭 |
| `contentClass` | `HTMLAttributes['class']` | - | 内容区 CSS 类 |
| `headerClass` | `HTMLAttributes['class']` | - | 头部 CSS 类 |
| `footerClass` | `HTMLAttributes['class']` | - | 底部 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `header` | 自定义头部内容 |
| `default` | 抽屉主体内容 |
| `footer` | 自定义底部操作区内容 |

## Events

| 事件名 | 说明 |
|--------|------|
| `update:modelValue` | 打开状态变化时触发 |
| `open` | 打开时触发 |
| `opened` | 打开动画完成后触发 |
| `close` | 关闭时触发 |
| `closed` | 关闭动画完成后触发 |
| `confirm` | 点击确定按钮时触发 |
| `cancel` | 点击取消按钮时触发 |

## Exposed Methods

无

## 示例

### 基础用法

```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <KmButton @click="open = true">打开抽屉</KmButton>
  <KmSpringDrawer v-model="open" title="基础抽屉" description="这是描述文字">
    <div class="p-4">这是抽屉内容</div>
  </KmSpringDrawer>
</template>
```

### 带取消按钮

```vue
<script setup lang="ts">
const open = ref(false)

function handleConfirm() {
  console.log('确认')
  open.value = false
}
</script>

<template>
  <KmButton @click="open = true">确认操作</KmButton>
  <KmSpringDrawer
    v-model="open"
    title="确认删除"
    description="此操作不可撤销，是否继续？"
    show-cancel-button
    @confirm="handleConfirm"
  >
    <div class="p-4 text-center text-red-500">
      确认删除后数据将无法恢复
    </div>
  </KmSpringDrawer>
</template>
```

### 确定按钮加载状态

```vue
<script setup lang="ts">
const open = ref(false)
const loading = ref(false)

async function handleConfirm() {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
  open.value = false
}
</script>

<template>
  <KmSpringDrawer
    v-model="open"
    title="提交表单"
    :confirm-button-loading="loading"
    @confirm="handleConfirm"
  >
    <div class="p-4">表单内容</div>
  </KmSpringDrawer>
</template>
```

### 自定义头部和底部

```vue
<template>
  <KmSpringDrawer v-model="open" title="分享">
    <template #header>
      <div class="flex items-center gap-2 p-4">
        <KmIcon name="i-lucide:share-2" />
        <span class="font-bold">分享到</span>
      </div>
    </template>
    <div class="grid grid-cols-4 gap-4 p-4">
      <!-- 分享选项 -->
    </div>
    <template #footer>
      <KmButton variant="outline" class="w-full" @click="open = false">
        取消
      </KmButton>
    </template>
  </KmSpringDrawer>
</template>
```

### 无头部无底部

```vue
<template>
  <KmSpringDrawer v-model="open" title="" :header="false" :footer="false">
    <div class="p-6">
      <h3 class="text-lg font-bold mb-4">完全自定义内容</h3>
      <p>这里是自定义内容区域，没有头部和底部</p>
      <KmButton class="mt-4 w-full" @click="open = false">关闭</KmButton>
    </div>
  </KmSpringDrawer>
</template>
```

## 注意事项

1. **弹簧动效**：与 `KmDrawer` 不同，`KmSpringDrawer` 使用 Vaul 库实现弹性动效，仅支持从底部弹出
2. **title 必填**：`title` 为必填属性，即使不显示头部（`header: false`）也需要传入
3. **点击遮罩关闭**：默认点击遮罩层会关闭抽屉，可通过 `close-on-click-overlay` 禁用
4. **与 KmDrawer 的区别**：`KmSpringDrawer` 专注于底部弹出场景，动效更具弹性，适合选择器、分享等场景

## 典型使用场景

- 底部选择器（城市选择、分类选择）
- 分享面板
- 操作菜单
- 底部确认弹窗
- 筛选条件设置
