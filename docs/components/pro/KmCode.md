# KmCode 代码块

带有语法高亮和复制功能的代码展示组件。

## 基础用法

```vue
<template>
  <KmCode :code="`console.log('Hello World')`" />
</template>
```

## 多行代码

```vue
<script setup lang="ts">
const code = `function greet(name) {
  return \`Hello, \${name}!\`
}

console.log(greet('World'))`
</script>

<template>
  <KmCode :code="code" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| code | 要显示的代码内容 | `string` | `required` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| - | 无插槽 |

## 示例

### API 响应示例

```vue
<script setup lang="ts">
const responseCode = `{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "name": "示例数据"
  }
}`
</script>

<template>
  <KmPageMain title="API 响应示例">
    <KmCode :code="responseCode" />
  </KmPageMain>
</template>
```

### SQL 查询示例

```vue
<script setup lang="ts">
const sqlCode = `SELECT
  u.id,
  u.name,
  COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id
ORDER BY order_count DESC
LIMIT 10`
</script>

<template>
  <KmCode :code="sqlCode" />
</template>
```

### 配合 KmCodePreview 使用

```vue
<script setup lang="ts">
import DemoRaw from './demo.vue?raw'
</script>

<template>
  <KmCodePreview :code="DemoRaw">
    <Demo />
  </KmCodePreview>
</template>
```

### Shell 命令示例

```vue
<script setup lang="ts">
const shellCode = `# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build`
</script>

<template>
  <KmCode :code="shellCode" />
</template>
```
