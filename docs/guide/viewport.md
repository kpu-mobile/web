# 浏览器适配

框架设计基于 375px 宽度设计稿，并使用 postcss 插件 [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever) 将 px 单位转换成 vw 单位从而实现移动端适配。相对于其他同类 px 转 vw 单位的 postcss 插件，postcss-mobile-forever 提供了更加细致的适配策略，也兼顾了桌面端的使用场景。

作为开发者，只需要在开发前，将设计稿转换为 375px 宽度，然后即可开始开发。
