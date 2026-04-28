# AI 技能 (Skills)

这里收录项目内所有 `km-*` 技能文档。

## 说明

- 大多数技能都会先确认目标应用，也就是 `apps/<app>/`
- 技能会优先遵循 Kpu-mobile 的目录约定和内建能力
- 技能文档适合在 Codex、Claude Code 等支持 Agent Skills 的工具中直接复用

## 技能列表

- [km-framework-settings](./km-framework-settings) - 修改框架设置
- [km-i18n-manager](./km-i18n-manager) - 管理国际化
- [km-page-optimizer](./km-page-optimizer) - 优化页面并替换为框架组件
- [km-store-generator](./km-store-generator) - 生成 Store 模块
- [km-theme-customizer](./km-theme-customizer) - 定制主题配色

## 使用方式

Skill 并不只限于 Codex 和 Claude Code 使用，因为 `SKILL.md` 是一个开放标准，**只要 Agent 工具支持 Agent Skills 标准，通常就可以复用这些 Skill** 。

本框架在 `skills/` 目录下 **统一维护 Skill** ，如果需要使用，可以通过 [skills](https://npmx.dev/package/skills) 包进行安装，在根目录运行下面命令：

```sh
pnpx skills add ./skills --skill '*'
```

:::tip 注意
根目录下有个 [`AGENTS.md`](https://agents.md/) 文件，能帮助 AI 更好的理解整个工程，并且大部分 Agent 都遵循这个文件。

但如果你使用的是 Claude Code，你可能需要将 `AGENTS.md` 更名为 `CLAUDE.md` ，或者给 `AGENTS.md` 做一个软链接映射到 `CLAUDE.md` 文件。
:::
