# KmButtonGroup 按钮组

将多个按钮组合在一起的容器组件，支持水平/垂直排列和分割线。

## 基础用法

```vue
<template>
  <KmButtonGroup>
    <KmButton>
      <KmIcon name="i-mdi:eye" />
      查看详情
    </KmButton>
    <KmButton>
      <KmIcon name="i-mdi:pencil" />
      编辑
    </KmButton>
    <KmButton>
      <KmIcon name="i-mdi:delete" />
      删除
    </KmButton>
  </KmButtonGroup>
</template>
```

## 垂直排列

```vue
<template>
  <KmButtonGroup orientation="vertical">
    <KmButton>操作 1</KmButton>
    <KmButton>操作 2</KmButton>
    <KmButton>操作 3</KmButton>
  </KmButtonGroup>
</template>
```

## 带分割线

```vue
<template>
  <KmButtonGroup :separator="true">
    <KmButton variant="outline">复制</KmButton>
    <KmButton variant="outline">粘贴</KmButton>
    <KmButton variant="outline">剪切</KmButton>
  </KmButtonGroup>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| orientation | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| separator | 是否显示分割线 | `boolean` | `false` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置 KmButton 组件 |

## 示例

### 工具栏按钮组

```vue
<template>
  <KmButtonGroup>
    <KmButton variant="ghost" size="icon">
      <KmIcon name="i-lucide:bold" />
    </KmButton>
    <KmButton variant="ghost" size="icon">
      <KmIcon name="i-lucide:italic" />
    </KmButton>
    <KmButton variant="ghost" size="icon">
      <KmIcon name="i-lucide:underline" />
    </KmButton>
  </KmButtonGroup>
</template>
```

### 垂直菜单

```vue
<template>
  <KmButtonGroup orientation="vertical" :separator="true" class="w-48">
    <KmButton variant="ghost" class="justify-start">
      <KmIcon name="i-heroicons:user" class="mr-2" />
      个人资料
    </KmButton>
    <KmButton variant="ghost" class="justify-start">
      <KmIcon name="i-heroicons:cog" class="mr-2" />
      账户设置
    </KmButton>
    <KmButton variant="ghost" class="justify-start">
      <KmIcon name="i-heroicons:shield-check" class="mr-2" />
      安全选项
    </KmButton>
  </KmButtonGroup>
</template>
```

### 与其他组件组合

```vue
<template>
  <KmButtonGroup>
    <KmSelect v-model="action" class="w-32">
      <KmSelectOption value="export">导出</KmSelectOption>
      <KmSelectOption value="import">导入</KmSelectOption>
    </KmSelect>
    <KmButton>执行</KmButton>
  </KmButtonGroup>
</template>
```

### 嵌套按钮组

```vue
<template>
  <KmButtonGroup>
    <KmButton>左侧</KmButton>
    <KmButtonGroup :separator="true">
      <KmButton>嵌套 1</KmButton>
      <KmButton>嵌套 2</KmButton>
    </KmButtonGroup>
    <KmButton>右侧</KmButton>
  </KmButtonGroup>
</template>
```
