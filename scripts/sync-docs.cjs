/* eslint-disable */
/**
 * 同步 fantastic-mobile 文档到 kpu-mobile 文档
 * - 将 Fm 前缀替换为 Km（文件名 + 内容）
 * - 将 fm- 前缀替换为 km-（文件名 + 内容）
 * - 同步 guide、根目录等其他 md 文件
 *
 * 用法: node scripts/sync-docs.cjs [--dry-run] [--components]
 *   --components  同时同步组件文档到 packages/components/src/{basic,pro}/xxx/README.md
 */

const fs = require('node:fs')
const path = require('node:path')

// ======================== 配置 ========================

const SOURCE_DIR = path.resolve(__dirname, '../../../fantastic-mobile/fantastic-mobile.github.io')
const TARGET_DIR = path.resolve(__dirname, '../docs')
const PACKAGES_DIR = path.resolve(__dirname, '../packages/components/src')

// 不同步的目录/文件
const SKIP = new Set(['.idea', '.git', '.vitepress', 'node_modules', 'assets', 'public', '.vscode'])

// ======================== 从 index.ts 读取导出名称 ========================

function loadExportNames() {
  const indexPath = path.resolve(__dirname, '../packages/components/src/index.ts')
  const content = fs.readFileSync(indexPath, 'utf-8')

  const componentNames = [] // KmAlert, KmButton, ...
  const functionNames = [] // useKmDrawer, useKmLoading, ...

  // 匹配: export { default as KmXxx }
  const defaultMatches = content.matchAll(/export\s*\{\s*default\s+as\s+(Km\w+)/g)
  for (const m of defaultMatches) {
    componentNames.push(m[1])
  }

  // 匹配: export { xxx as useKmXxx }
  const useMatches = content.matchAll(/export\s*\{\s*\w+\s+as\s+(useKm\w+)/g)
  for (const m of useMatches) {
    functionNames.push(m[1])
  }

  return { componentNames, functionNames }
}

const { componentNames, functionNames } = loadExportNames()

// 按长度降序排序，确保长名称先匹配（如 KmButtonGroup 在 KmButton 之前）
componentNames.sort((a, b) => b.length - a.length)
functionNames.sort((a, b) => b.length - a.length)

// 构建 Fm → Km 替换映射
const replacePairs = []
for (const name of componentNames) {
  replacePairs.push({ from: `Fm${name.slice(2)}`, to: name })
}
for (const name of functionNames) {
  // useKmDrawer → useFmDrawer
  replacePairs.push({ from: `useFm${name.slice(5)}`, to: name })
}

console.log(`已加载 ${componentNames.length} 个组件, ${functionNames.length} 个函数`)

// ======================== 工具函数 ========================

function getAllFiles(dir, rootDir = dir, results = []) {
  for (const f of fs.readdirSync(dir)) {
     
    if (SKIP.has(f)) { continue }
    const fp = path.join(dir, f)
    if (fs.statSync(fp).isDirectory()) {
      getAllFiles(fp, rootDir, results)
    }
    else if (f.endsWith('.md')) {
      results.push(path.relative(rootDir, fp))
    }
  }
  return results
}

function replaceFmToKm(content) {
  // 按导出名称精确替换 Fm → Km，避免误改其他 Fm 前缀的词
  for (const { from, to } of replacePairs) {
    content = content.replace(new RegExp(`\\b${from}\\b`, 'g'), to)
  }
  // 替换文件名引用: FmXxx.md → KmXxx.md
  for (const { from, to } of replacePairs) {
    content = content.replace(new RegExp(`${from}\\.md`, 'g'), `${to}.md`)
  }
  // 替换路径中的 fm- → km-
  content = content.replace(/[\\/]fm-/g, m => `${m[0]}km-`)
  // 替换独立的 fm- 前缀 (e.g. fm-framework-settings → km-framework-settings, fm-* → km-*)
  content = content.replace(/\bfm-(?=[a-z*])/g, 'km-')
  content = content.replace(/fantastic-mobile\/basic/g, 'kpu-mobile/web')
  content = content.replace(/fantastic-mobile\/pro/g, 'kpu-mobile/web')
  content = content.replace(/fantastic-mobile\.hurui\.me/g, 'kpu-mobile.github.io')
  content = content.replace(/Fantastic-mobile\.hurui\.me/g, 'Kpu-mobile.github.io')
  content = content.replace(/hurui\.me/g, 'github.io')

  // 替换 fantastic 为 kpu（区分大小写）
  content = content.replace(/fantastic/g, 'kpu')
  content = content.replace(/Fantastic/g, 'Kpu')

  // 替换 Hooray 为 Lmx（区分大小写）
  content = content.replace(/Hooray/g, 'Lmx')
  content = content.replace(/hooray/g, 'lmx')
  return content
}

function transformFilePath(relPath) {
  // Normalize to forward slash for consistent regex
  let result = relPath.replace(/\\/g, '/')

  // 特殊路径映射: guide/skills.md → guide/skills/index.md
  result = result.replace(/^guide\/skills\.md$/, 'guide/skills/index.md')
  // components.md → components/index.md
  result = result.replace(/^components\.md$/, 'components/index.md')

  // FmXxx → KmXxx (仅替换已知导出名称)
  for (const { from, to } of replacePairs) {
    result = result.replace(new RegExp(from, 'g'), to)
  }
  // fm- → km- in paths
  result = result.replace(/\/fm-/g, '/km-')
  result = result.replace(/^fm-(?=[a-z])/g, 'km-')
  // Restore platform separator
  return result.replace(/\//g, path.sep)
}

function replaceListStyle(content) {
  // 将行首的 * 列表项替换为 - ，不影响代码块内的内容（如 JSDoc 注释）
  const parts = content.split(/(^```[\s\S]*?^```)/gm)
  for (let i = 0; i < parts.length; i++) {
    // 偶数索引为非代码块部分，奇数索引为代码块
    if (i % 2 === 0) {
      parts[i] = parts[i].replace(/^(\s*)\* /gm, '$1- ')
    }
  }
  return parts.join('')
}

function removeFrontmatter(content) {
  // 删除文件开头的 frontmatter 块 (--- ... ---)
  return content.replace(/^---[\s\S]*?---\s*/, '')
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function pascalToKebab(name) {
  // PascalCase → kebab-case (e.g. AnimatedCountTo → animated-count-to)
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

function transformComponentDocPath(relPath) {
  // components/{basic,pro}/FmXxx.md → {basic,pro}/xxx/README.md
  let result = relPath.replace(/\\/g, '/')
  const match = result.match(/^components\/(basic|pro)\/Fm(.+)\.md$/)
  if (!match) return null
  const [, type, name] = match
  return `${type}/${pascalToKebab(name)}/README.md`
}

// ======================== 主逻辑 ========================

const dryRun = process.argv.includes('--dry-run')
const syncComponents = process.argv.includes('--components')

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`源目录不存在: ${SOURCE_DIR}`)
  process.exit(1)
}

const sourceFiles = getAllFiles(SOURCE_DIR)
console.log(`源文件数: ${sourceFiles.length}`)
console.log(`目标目录: ${TARGET_DIR}`)
console.log(`模式: ${dryRun ? '预览 (dry-run)' : '执行'}`)
console.log(`组件文档: ${syncComponents ? '同步到 packages' : '跳过'}\n`)

let copied = 0
let skipped = 0
let updated = 0

// ======================== 同步到 docs ========================

const componentDocFiles = []

for (const relPath of sourceFiles) {
  // 收集组件文档文件，后续单独处理
  if (syncComponents && transformComponentDocPath(relPath)) {
    componentDocFiles.push(relPath)
  }

  const srcFile = path.join(SOURCE_DIR, relPath)
  const targetRelPath = transformFilePath(relPath)
  const targetFile = path.join(TARGET_DIR, targetRelPath)

  // 读取并转换内容
  let content = fs.readFileSync(srcFile, 'utf-8')
  const originalContent = content

  content = removeFrontmatter(content)
  content = replaceFmToKm(content)
  content = replaceListStyle(content)

  const contentChanged = content !== originalContent
  const targetExists = fs.existsSync(targetFile)

  if (targetExists) {
    const existingContent = fs.readFileSync(targetFile, 'utf-8')
    if (existingContent === content) {
      skipped++
      continue
    }
  }

  if (dryRun) {
    const action = targetExists ? 'UPDATE' : 'CREATE'
    const transform = contentChanged ? ' (transformed)' : ''
    console.log(`[${action}] ${relPath} → ${targetRelPath}${transform}`)
  }
  else {
    ensureDir(targetFile)
    fs.writeFileSync(targetFile, content, 'utf-8')
    if (targetExists) {
      updated++
      console.log(`[UPDATED] ${relPath} → ${targetRelPath}`)
    }
    else {
      copied++
      console.log(`[CREATED] ${relPath} → ${targetRelPath}`)
    }
  }
}

// ======================== 同步组件文档到 packages ========================

if (syncComponents && componentDocFiles.length > 0) {
  console.log(`\n--- 组件文档同步到 packages ---\n`)

  for (const relPath of componentDocFiles) {
    const pkgRelPath = transformComponentDocPath(relPath)
    if (!pkgRelPath) continue

    const srcFile = path.join(SOURCE_DIR, relPath)
    const targetFile = path.join(PACKAGES_DIR, pkgRelPath.replace(/\//g, path.sep))

    let content = fs.readFileSync(srcFile, 'utf-8')
    const originalContent = content

    content = removeFrontmatter(content)
    content = replaceFmToKm(content)
    content = replaceListStyle(content)

    const contentChanged = content !== originalContent
    const targetExists = fs.existsSync(targetFile)

    if (targetExists) {
      const existingContent = fs.readFileSync(targetFile, 'utf-8')
      if (existingContent === content) {
        skipped++
        continue
      }
    }

    if (dryRun) {
      const action = targetExists ? 'UPDATE' : 'CREATE'
      const transform = contentChanged ? ' (transformed)' : ''
      console.log(`[${action}] ${relPath} → packages/components/src/${pkgRelPath}${transform}`)
    }
    else {
      ensureDir(targetFile)
      fs.writeFileSync(targetFile, content, 'utf-8')
      if (targetExists) {
        updated++
        console.log(`[UPDATED] ${relPath} → packages/components/src/${pkgRelPath}`)
      }
      else {
        copied++
        console.log(`[CREATED] ${relPath} → packages/components/src/${pkgRelPath}`)
      }
    }
  }
}

console.log(`\n--- 完成 ---`)
console.log(`新增: ${copied}, 更新: ${updated}, 跳过(无变化): ${skipped}`)
