# KmSparkline 迷你图组件

简洁的折线迷你图组件，用于展示数据趋势。

## 基础用法

```vue
<template>
  <KmSparkline :value="[10, 20, 15, 25, 30, 20, 35]" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `number[] \| Array<{ value: number, tooltip: string }>` | **必需** | 数据值 |
| `width` | `number` | `100` | 图表宽度（px） |
| `height` | `number` | `30` | 图表高度（px） |
| `strokeWidth` | `number` | `3` | 线条宽度 |
| `strokeColor` | `string` | `'#dc2b33'` | 线条颜色 |
| `fillColor` | `string` | `'transparent'` | 填充颜色 |
| `cursorColor` | `string` | `'#dc2b33'` | 光标颜色 |
| `spotColor` | `string` | `'#dc2b33'` | 端点颜色 |
| `tooltip` | `boolean` | `false` | 是否显示提示 |

## Slots

无

## Events

无

## 示例

### 基础迷你图

```vue
<template>
  <KmSparkline :value="[10, 20, 15, 25, 30, 20, 35]" />
</template>
```

### 自定义尺寸

```vue
<template>
  <KmSparkline :value="[10, 20, 15, 25, 30]" :width="150" :height="50" />
</template>
```

### 自定义颜色

```vue
<template>
  <KmSparkline 
    :value="[10, 20, 15, 25, 30]"
    stroke-color="#10b981"
    spot-color="#10b981"
  />
</template>
```

### 带填充颜色

```vue
<template>
  <KmSparkline 
    :value="[10, 20, 15, 25, 30, 25, 35]"
    fill-color="rgb(16 185 129 / 20%)"
    stroke-color="#10b981"
  />
</template>
```

### 带提示信息

```vue
<script setup lang="ts">
const data = [
  { value: 10, tooltip: '第 1 天：10' },
  { value: 20, tooltip: '第 2 天：20' },
  { value: 15, tooltip: '第 3 天：15' },
  { value: 25, tooltip: '第 4 天：25' },
  { value: 30, tooltip: '第 5 天：30' },
]
</script>

<template>
  <KmSparkline :value="data" :tooltip="true" />
</template>
```

### 数据卡片

```vue
<template>
  <KmCard>
    <div class="flex justify-between items-center">
      <div>
        <p class="text-sm text-muted-foreground">本周收入</p>
        <p class="text-2xl font-bold">¥12,345</p>
      </div>
      <KmSparkline 
        :value="[1200, 1800, 1500, 2200, 1900, 2500, 2800]"
        :width="100"
        :height="40"
        stroke-color="#10b981"
      />
    </div>
  </KmCard>
</template>
```

### 多数据对比

```vue
<script setup lang="ts">
const metrics = [
  { name: '访问量', value: 12345, trend: [1200, 1500, 1800, 1600, 2000, 2200, 2400], color: '#3b82f6' },
  { name: '转化率', value: '3.2%', trend: [2.5, 2.8, 3.0, 2.9, 3.1, 3.3, 3.2], color: '#10b981' },
  { name: '销售额', value: 98765, trend: [8000, 9500, 11000, 10500, 12000, 13500, 14000], color: '#8b5cf6' },
]
</script>

<template>
  <div class="space-y-4">
    <div v-for="metric in metrics" :key="metric.name" class="flex justify-between items-center">
      <div>
        <p class="text-sm text-muted-foreground">{{ metric.name }}</p>
        <p class="text-xl font-semibold">{{ metric.value }}</p>
      </div>
      <KmSparkline 
        :value="metric.trend"
        :stroke-color="metric.color"
        :spot-color="metric.color"
      />
    </div>
  </div>
</template>
```

### 表格中的趋势列

```vue
<script setup lang="ts">
const products = [
  { name: '产品 A', sales: 12345, trend: [100, 150, 200, 180, 250, 300, 350] },
  { name: '产品 B', sales: 8765, trend: [200, 180, 150, 120, 100, 80, 60] },
  { name: '产品 C', sales: 5432, trend: [150, 150, 150, 150, 150, 150, 150] },
]
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <th>产品</th>
        <th>销售额</th>
        <th>趋势</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.name">
        <td>{{ product.name }}</td>
        <td>{{ product.sales }}</td>
        <td>
          <KmSparkline :value="product.trend" :width="80" :height="30" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
```

## 注意事项

1. **数据格式**：支持简单数字数组或带 tooltip 的对象数组
2. **响应式**：尺寸固定，不会随容器自适应
3. **无坐标轴**：仅显示趋势线，无坐标轴和标签
4. **SVG 渲染**：使用 SVG 绘制，清晰度高

## 典型使用场景

- 数据看板趋势展示
- 表格中的趋势列
- 股票/基金走势
- 访问量/销量趋势
- 温度/湿度变化
- 性能指标监控
