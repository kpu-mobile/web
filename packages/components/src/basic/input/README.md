# KmInput 输入框组件

基础输入框组件，支持密码显示切换、清空按钮和前后缀插槽。

## 基础用法

```vue
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <KmInput v-model="value" placeholder="请输入..." />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'text' \| 'password'` | `'text'` | 输入类型 |
| `align` | `'inline' \| 'block'` | `'inline'` | 前后缀对齐方式 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `clearable` | `boolean` | `false` | 是否显示清空按钮 |
| `class` | `HTMLAttributes['class']` | - | 组件外层 CSS 类 |
| `inputClass` | `HTMLAttributes['class']` | - | 输入框 CSS 类 |
| `startClass` | `HTMLAttributes['class']` | - | 前缀区域 CSS 类 |
| `endClass` | `HTMLAttributes['class']` | - | 后缀区域 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `start` | 输入框前缀内容（图标、文字等） |
| `end` | 输入框后缀内容（图标、按钮等） |

## Events

| 事件名 | 说明 |
|--------|------|
| `clear` | 点击清空按钮时触发 |

## Exposed Methods

| 方法名 | 说明 |
|--------|------|
| `ref` | 获取原生 input 元素引用 |

## 示例

### 基础输入框

```vue
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <KmInput v-model="value" placeholder="请输入内容" />
</template>
```

### 密码输入框

```vue
<script setup lang="ts">
const password = ref('')
</script>

<template>
  <KmInput v-model="password" type="password" placeholder="请输入密码" />
</template>
```

### 带清空按钮

```vue
<script setup lang="ts">
const value = ref('可清空的内容')

function handleClear() {
  console.log('内容已清空')
}
</script>

<template>
  <KmInput v-model="value" clearable @clear="handleClear" />
</template>
```

### 带前缀图标

```vue
<template>
  <KmInput v-model="value" placeholder="搜索...">
    <template #start>
      <KmIcon name="i-lucide:search" />
    </template>
  </KmInput>
</template>
```

### 带后缀按钮

```vue
<template>
  <KmInput v-model="value" placeholder="请输入验证码">
    <template #end>
      <KmButton size="sm">获取</KmButton>
    </template>
  </KmInput>
</template>
```

### 前后缀同时使用

```vue
<template>
  <KmInput v-model="value">
    <template #start>
      <KmIcon name="i-lucide:user" />
    </template>
    <template #end>
      <KmIcon name="i-lucide:check-circle" class="text-green-500" />
    </template>
  </KmInput>
</template>
```

### 禁用状态

```vue
<template>
  <KmInput v-model="value" disabled placeholder="禁用状态" />
</template>
```

### 搜索框

```vue
<script setup lang="ts">
const keyword = ref('')

function handleSearch() {
  console.log('搜索:', keyword.value)
}
</script>

<template>
  <KmInput v-model="keyword" clearable placeholder="搜索..." @keyup.enter="handleSearch">
    <template #start>
      <KmIcon name="i-lucide:search" />
    </template>
  </KmInput>
</template>
```

### 密码强度指示

```vue
<script setup lang="ts">
const password = ref('')

const strength = computed(() => {
  const pwd = password.value
  if (!pwd) return 0
  let score = 0
  if (pwd.length >= 8) score++
  if (/[A-Z]/.test(pwd)) score++
  if (/[0-9]/.test(pwd)) score++
  if (/[^A-Za-z0-9]/.test(pwd)) score++
  return score
})
</script>

<template>
  <div>
    <KmInput v-model="password" type="password" clearable placeholder="请输入密码" />
    <div class="flex gap-1 mt-2">
      <div v-for="i in 4" :key="i" class="h-1 flex-1 rounded" :class="i <= strength ? 'bg-green-500' : 'bg-gray-200'" />
    </div>
  </div>
</template>
```

## 注意事项

1. **v-model 绑定**：使用 `v-model` 实现双向数据绑定
2. **密码切换**：`type="password"` 时自动显示眼睛图标切换明文/密文
3. **清空按钮**：`clearable` 模式下，仅当输入框有值且获得焦点或悬停时显示清空按钮
4. **原生属性**：支持所有原生 input 属性（placeholder、autocomplete 等）
5. **对齐方式**：`align="inline"` 时前后缀与输入内容同行，`align="block"` 时上下排列

## 典型使用场景

- 表单输入字段
- 搜索框
- 密码输入
- 带单位的数值输入
- 带前缀的账号输入（如 +86）
