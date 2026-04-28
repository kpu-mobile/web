# 页面保活

:::warning 注意
开启保活必须保证每个页面组件必须设置 `name` ，并且确保 `name` 唯一。
:::

我们只要在需要进行保活的路由 meta 对象里配置 keepAlive 参数即可。这个参数可接受以下 3 种类型：

- `boolean`
- `string`
- `string[]`

`boolean` 很好理解，当设置为 `true` 时，该页面只要一被访问，就会被保活。例如有一个新闻管理的模块，我们把**新闻列表页**设置为 `keepAlive: true` 后并访问，然后从**新闻列表页**点击某条记录进入**新闻详情页**，这时候再从**新闻详情页**返回**新闻列表页**时，**新闻列表页**上的数据是不会重新加载，而是保留了当时离开时的状态。

但这个方案也有一个弊端，就是该页面一旦访问就永久被保活住了（除非手动进行浏览器刷新），如果用户从**新闻列表页**进入的不是**新闻详情页**，而是其它模块的页面，比如上一级页面，这时候其实是不希望**新闻列表页**被保活的。这种情况下，框架支持设置 `string` 和 `string[]` 两个类型的参数值。

首先不管设置 `string` 还是 `string[]` ，你需要设置的值，都是路由的 name 。

怎么理解呢？还是用上面的例子，如果有两个模块，一个新闻管理，一个用户管理。当从**新闻列表页**进入**新闻详情页**的时候，需要对**新闻列表页**进行保活，而从**新闻列表页**进入**用户列表页**，则不需要对**新闻列表页**进行保活，我们就可以对**新闻列表页**的路由设置成：

```
apps/<app>/src/views/
└── news/
    ├── [id].vue
    └── index.vue
```

```vue {6}
<!-- apps/<app>/src/views/news/index.vue -->
<script setup lang="ts">
definePage({
  meta: {
    title: '新闻列表页',
    keepAlive: '/news/[id]',
  },
})
</script>
```

这表示从**新闻列表页**进入**新闻详情页**时，**新闻列表页**才会被保活，进入其它任何页面都不会保活。

当然也可将 `keepAlive` 设置成 name 数组。

```
apps/<app>/src/views/
└── news/
    ├── create.vue
    ├── detail.[id].vue
    └── index.vue
```

```vue {6}
<!-- apps/<app>/src/views/news/index.vue -->
<script setup lang="ts">
definePage({
  meta: {
    title: '新闻列表页',
    keepAlive: ['/news/detail.[id]', '/news/create'],
  },
})
</script>
```

这样就表示从**新闻列表页**进入**新闻详情页**或**新增新闻页**时，**新闻列表页**才会被保活，进入其它任何页面都不会保活。

***

还有一种场景，就是某个页面始终开启保活，仅在某些特定条件下才关闭保活。例如有一个新闻管理的模块，我们希望**新增新闻页**始终开启保活，因为在进行新增操作时，可能需要跳转到新闻分类管理的页面进行新增分类的操作，或者是其他页面进行一些操作，当返回**新增新闻页**时，需要将它保活。一旦新闻新增成功，返回到**新闻列表页**时，**新增新闻页**就不再需要保活了。

我们只要在需要进行保活的路由 meta 对象里配置 noKeepAlive 参数即可。这个参数可接受以下 2 种类型：

- `string`
- `string[]`

针对上述场景，我们就可以对**新增新闻页**的路由设置成：

```
apps/<app>/src/views/
└── news/
    ├── create.vue
    └── index.vue
```

```vue {6-7}
<!-- apps/<app>/src/views/news/create.vue -->
<script setup lang="ts">
definePage({
  meta: {
    title: '新增新闻页',
    keepAlive: true,
    noKeepAlive: '/news/',
  },
})
</script>
```
