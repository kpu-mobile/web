# KmTextHighlight 文字高亮

带有渐变背景展开动画的文字高亮组件。

## 基础用法

```vue
<template>
  <h1>
    李云龙：你<KmTextHighlight class="from-indigo-300 to-purple-300 bg-gradient-to-r">
      他娘的
    </KmTextHighlight>还真是个天才！
  </h1>
</template>
```

## 自定义动画

```vue
<template>
  <KmTextHighlight
    :delay="500"
    :duration="1500"
    text-end-color="#fbbf24"
    class="from-yellow-200 to-orange-200 bg-gradient-to-r"
  >
    高亮文字
  </KmTextHighlight>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| delay | 动画延迟 (ms) | `number` | `0` |
| duration | 动画持续时间 (ms) | `number` | `2000` |
| textEndColor | 文字最终颜色 | `string` | `'inherit'` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，要高亮的文字 |

## 示例

### 渐变色高亮

```vue
<template>
  <p class="text-lg">
    这是一段<KmTextHighlight class="from-blue-200 to-cyan-200 bg-gradient-to-r">
      重点内容
    </KmTextHighlight>，请注意。
  </p>
</template>
```

### 多段高亮

```vue
<template>
  <div class="space-y-2">
    <p>
      <KmTextHighlight class="from-green-200 to-emerald-200 bg-gradient-to-r">
        绿色高亮
      </KmTextHighlight>
    </p>
    <p>
      <KmTextHighlight class="from-pink-200 to-rose-200 bg-gradient-to-r">
        粉色高亮
      </KmTextHighlight>
    </p>
    <p>
      <KmTextHighlight class="from-amber-200 to-orange-200 bg-gradient-to-r">
        橙色高亮
      </KmTextHighlight>
    </p>
  </div>
</template>
```

### 带延迟动画

```vue
<template>
  <h1 class="text-2xl">
    <KmTextHighlight :delay="0" :duration="1000" class="from-red-200 to-red-300 bg-gradient-to-r">
      第一步
    </KmTextHighlight>
  </h1>
  <h2 class="text-xl">
    <KmTextHighlight :delay="500" :duration="1000" class="from-blue-200 to-blue-300 bg-gradient-to-r">
      第二步
    </KmTextHighlight>
  </h2>
  <h3 class="text-lg">
    <KmTextHighlight :delay="1000" :duration="1000" class="from-green-200 to-green-300 bg-gradient-to-r">
      第三步
    </KmTextHighlight>
  </h3>
</template>
```
