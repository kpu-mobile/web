# KmParticlesBg 粒子背景

动态粒子背景组件，粒子会随鼠标移动产生互动效果。

## 基础用法

```vue
<template>
  <div class="relative h-96">
    <KmParticlesBg />
    <div class="absolute inset-0 flex items-center justify-center">
      内容
    </div>
  </div>
</template>
```

## 自定义配置

```vue
<template>
  <KmParticlesBg
    color="#FFF"
    :quantity="150"
    :staticity="30"
    :ease="40"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| color | 粒子颜色 (十六进制) | `string` | `'#FFF'` |
| quantity | 粒子数量 | `number` | `100` |
| staticity | 静态程度 (值越小粒子越活跃) | `number` | `50` |
| ease | 平滑度 (值越大越平滑) | `number` | `50` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## 示例

### 深色背景粒子

```vue
<template>
  <div class="relative h-screen bg-gray-900">
    <KmParticlesBg color="#ffffff" :quantity="80" />
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-4xl font-bold text-white">欢迎来到首页</h1>
    </div>
  </div>
</template>
```

### 彩色粒子

```vue
<template>
  <div class="relative h-96 bg-gradient-to-br from-purple-900 to-blue-900">
    <KmParticlesBg color="#fbbf24" :quantity="120" :staticity="40" />
  </div>
</template>
```

### 低密度粒子

```vue
<template>
  <div class="relative h-64 bg-slate-800">
    <KmParticlesBg :quantity="30" :staticity="60" />
  </div>
</template>
```

### 高密度粒子

```vue
<template>
  <div class="relative h-96 bg-black">
    <KmParticlesBg color="#00ffff" :quantity="200" :staticity="20" :ease="30" />
  </div>
</template>
```
