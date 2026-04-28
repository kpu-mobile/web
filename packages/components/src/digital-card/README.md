# KmDigitalCard 数字卡片

用于展示统计数据、指标数字的卡片组件，支持趋势标识和提示说明。

## 基础用法

```vue
<template>
  <KmDigitalCard
    title="总销售额"
    :digital="123456"
    description="较上月增长 12%"
  />
</template>
```

## 带趋势标识

```vue
<template>
  <KmDigitalCard
    title="活跃用户"
    :digital="8,845"
    trend="up"
    description="持续增长中"
  />
</template>
```

## 带图标和提示

```vue
<template>
  <KmDigitalCard
    title="订单转化率"
    title-tips="转化率 = 下单用户数 / 访问用户数"
    icon="i-heroicons:chart-bar"
    :digital="23.5"
    trend="stable"
    description="保持稳定"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题 | `string` | `required` |
| titleTips | 标题提示信息 | `string` | `undefined` |
| icon | 右上角图标 | `string` | `undefined` |
| digital | 数字值 | `string \| number` | `required` |
| description | 描述文字 | `string` | `undefined` |
| trend | 趋势标识 | `'up' \| 'stable' \| 'down'` | `undefined` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| - | 无插槽 |

## 示例

### 数据看板

```vue
<script setup lang="ts">
const stats = [
  {
    title: '总访问量',
    digital: '1,234,567',
    trend: 'up' as const,
    description: '昨日 +12%'
  },
  {
    title: '订单数',
    digital: '8,765',
    trend: 'stable' as const,
    description: '保持稳定'
  },
  {
    title: '退款率',
    digital: '2.3%',
    trend: 'down' as const,
    description: '较上周下降'
  },
]
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <KmDigitalCard
      v-for="stat in stats"
      :key="stat.title"
      :title="stat.title"
      :digital="stat.digital"
      :trend="stat.trend"
      :description="stat.description"
    />
  </div>
</template>
```

### 带说明信息

```vue
<template>
  <KmDigitalCard
    title="客户满意度"
    title-tips="基于过去 30 天的用户评价计算"
    icon="i-heroicons:face-smile"
    :digital="98.5"
    trend="up"
    description="历史新高"
  />
</template>
```

### 财务数据

```vue
<template>
  <KmDigitalCard
    title="月度营收"
    :digital="'¥ 284,500'"
    trend="up"
    description="环比增长 18.5%"
    class="w-64"
  />
</template>
```
