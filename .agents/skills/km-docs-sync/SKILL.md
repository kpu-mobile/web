---
name: km-docs-sync
description: "从源目录同步文档文件到 docs 目录，支持增量同步。"
---

# 文档同步

从 `../kpu-mobile.github` 目录同步文档到 `docs` 目录。

## 执行步骤

### Step 1: 复制 Markdown 文件

将源目录下的所有 `.md` 文件按原目录结构复制到目标 `docs` 目录。

### Step 2: 处理同名文件与目录

**重要**：检查**源目录**中是否存在同名的 `.md` 文件和子目录（如 `components.md` 和 `components/`），如果存在，将 `.md` 文件移动到该目录下并重命名为 `index.md`。

这个规则适用于所有层级，包括根目录：

```
# 转换前（根目录）
.
├── components.md
└── components/

# 转换后
.
└── components/
    └── index.md

# 转换前（子目录）
guide/
├── settings.md
└── settings/

# 转换后
guide/
└── settings/
    └── index.md
```

**关键点**：
- 必须在**源目录**中检查同名关系，而不是目标目录
- 根目录的文件也适用此规则（如 `components.md` → `components/index.md`）
- 这是 VitePress 文档系统的标准做法

### Step 3: 清理 Frontmatter

删除所有 `.md` 文件开头的 YAML frontmatter（包含 `url` 字段）：

```markdown
<!-- 删除以下内容 -->
---
url: /**.md
---
```

### Step 4: 修复 Markdown 列表样式

将所有使用星号（`*`）的无序列表改为短横线（`-`），修复 MD004 规则：

```markdown
<!-- 修复前 -->
* 项目一
* 项目二

<!-- 修复后 -->
- 项目一
- 项目二
```

> 注意：跳过代码块（`` ``` `` 包裹的内容）内的列表。

### Step 5: 复制媒体文件

将源目录下的图片和视频文件同步到 `public` 目录：

- 支持格式：`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`, `.mp4`, `.webm`
- 保持原目录结构

### Step 6: 清理 Assets 目录

1. 将 `public/assets/` 下的所有文件移动到 `public` 根目录
2. 重命名带 hash 的文件（如 `theme-blue-dark.D4thGyye.png` → `theme-blue-dark.png`）
3. 删除空的 `assets` 文件夹

### Step 7: 清理重复的 Hash 文件

**重要**：扫描 `public` 目录（包括子目录），如果同时存在带 hash 和不带 hash 的同名文件，删除带 hash 的版本。

Hash 文件名格式：`name.HASH.ext`（HASH 为 8 位以上的字母数字组合）

示例：
```
# 需要清理的情况
hero-bg-light.png              ← 保留
hero-bg-light.s-wTc4pb.png     ← 删除（重复的 hash 版本）

theme-green-light.png          ← 保留
theme-green-light.CtFfSFs_.png ← 删除（重复的 hash 版本）

# 不需要清理的情况
env.VITE_APP_SETTING.gif       ← 保留（VITE_APP_SETTING 不是 hash，是实际文件名）
```

**识别规则**：
- Hash 部分通常是 8 位或更长的随机字母数字组合（可能包含 `_` 和 `-`）
- 正则表达式：`/^(.+)\.([a-zA-Z0-9_-]{8,})\.(png|jpg|jpeg|gif|webp|svg|mp4|webm)$/i`
- 如果同一目录下存在 `name.ext` 和 `name.HASH.ext`，删除后者

## 注意事项

1. **仅复制必要文件**：只复制 `.md`、图片和视频文件，不复制其他无关文件
2. **保留目标目录结构**：源目录的子目录结构必须完整保留到目标目录
3. **不覆盖已有内容**：如果目标文件已存在且内容相同，跳过复制

## 自动化脚本

可以使用以下 Node.js 脚本（ES Module）执行同步：

```javascript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../../fantastic-admin.github');
const targetDocsDir = path.join(__dirname, '../docs');
const targetPublicDir = path.join(__dirname, '../docs/public');

// 递归获取所有指定扩展名的文件
function getAllFiles(dir, extensions) {
    const files = [];
    if (!fs.existsSync(dir)) {
        return files;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => entry.name.toLowerCase().endsWith(ext))) {
            files.push(fullPath);
        }
    }
    return files;
}

// Step 1: 复制 Markdown 文件
function copyMarkdownFiles() {
    console.log('📄 Step 1: 复制 Markdown 文件...');
    const mdFiles = getAllFiles(sourceDir, ['.md']);

    for (const srcFile of mdFiles) {
        const relativePath = path.relative(sourceDir, srcFile);
        const destFile = path.join(targetDocsDir, relativePath);
        const destDir = path.dirname(destFile);

        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        const content = fs.readFileSync(srcFile, 'utf-8');
        fs.writeFileSync(destFile, content, 'utf-8');
    }

    console.log(`   ✅ 已复制 ${mdFiles.length} 个 Markdown 文件`);
}

// Step 2: 处理同名文件和目录（检查源目录）
function handleSameNameFiles() {
    console.log('\n🔄 Step 2: 处理同名文件和目录...');
    let movedCount = 0;

    function processDirectory(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                // 检查是否有同名的 .md 文件
                const mdFilePath = path.join(dir, entry.name + '.md');
                if (fs.existsSync(mdFilePath)) {
                    // 移动 .md 文件到子目录并重命名为 index.md
                    const newIndexFile = path.join(fullPath, 'index.md');
                    fs.renameSync(mdFilePath, newIndexFile);
                    movedCount++;
                    console.log(`   📝 移动: ${path.relative(targetDocsDir, mdFilePath)} → ${path.relative(targetDocsDir, newIndexFile)}`);
                }

                // 递归处理子目录
                processDirectory(fullPath);
            }
        }
    }

    processDirectory(targetDocsDir);
    console.log(`   ✅ 已处理 ${movedCount} 个同名文件`);
}

// Step 3: 清理 Frontmatter
function cleanFrontmatter() {
    console.log('\n🧹 Step 3: 清理 Frontmatter...');
    const mdFiles = getAllFiles(targetDocsDir, ['.md']);
    let cleanedCount = 0;

    for (const file of mdFiles) {
        let content = fs.readFileSync(file, 'utf-8');

        const originalContent = content;
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?/;
        const match = content.match(frontmatterRegex);

        if (match && match[1].includes('url:')) {
            content = content.replace(frontmatterRegex, '');
        }

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf-8');
            cleanedCount++;
        }
    }

    console.log(`   ✅ 已清理 ${cleanedCount} 个文件的 Frontmatter`);
}

// Step 4: 修复 Markdown 列表样式
function fixListStyle() {
    console.log('\n✏️  Step 4: 修复 Markdown 列表样式...');
    const mdFiles = getAllFiles(targetDocsDir, ['.md']);
    let fixedCount = 0;

    for (const file of mdFiles) {
        let content = fs.readFileSync(file, 'utf-8');
        const lines = content.split('\n');
        let inCodeBlock = false;
        let modified = false;

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim().startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                continue;
            }

            if (inCodeBlock) continue;

            const match = lines[i].match(/^(\s*)\*\s(.*)/);
            if (match) {
                lines[i] = match[1] + '- ' + match[2];
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(file, lines.join('\n'), 'utf-8');
            fixedCount++;
        }
    }

    console.log(`   ✅ 已修复 ${fixedCount} 个文件的列表样式`);
}

// Step 5: 复制媒体文件
function copyMediaFiles() {
    console.log('\n🖼️  Step 5: 复制媒体文件...');
    const mediaExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.mp4', '.webm'];
    const mediaFiles = getAllFiles(sourceDir, mediaExtensions);

    for (const srcFile of mediaFiles) {
        const relativePath = path.relative(sourceDir, srcFile);
        const destFile = path.join(targetPublicDir, relativePath);
        const destDir = path.dirname(destFile);

        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        fs.copyFileSync(srcFile, destFile);
    }

    console.log(`   ✅ 已复制 ${mediaFiles.length} 个媒体文件`);
}

// Step 6: 清理和重命名 assets 目录
function cleanAssetsDir() {
    console.log('\n🗂️  Step 6: 清理 Assets 目录...');
    const assetsDir = path.join(targetPublicDir, 'assets');

    if (!fs.existsSync(assetsDir)) {
        console.log('   ⚠️  Assets 目录不存在，跳过');
        return;
    }

    let renamedCount = 0;
    let movedCount = 0;

    // 重命名带 hash 的文件
    const files = fs.readdirSync(assetsDir);
    for (const file of files) {
        const match = file.match(/^(.+)\.([a-zA-Z0-9_-]{8,})\.(png|jpg|jpeg|gif|webp|svg|mp4|webm)$/);
        if (match) {
            const newName = `${match[1]}.${match[3]}`;
            const oldPath = path.join(assetsDir, file);
            const newPath = path.join(assetsDir, newName);
            fs.renameSync(oldPath, newPath);
            renamedCount++;
        }
    }

    // 移动文件到 public 根目录
    for (const file of fs.readdirSync(assetsDir)) {
        const oldPath = path.join(assetsDir, file);
        const newPath = path.join(targetPublicDir, file);
        fs.renameSync(oldPath, newPath);
        movedCount++;
    }

    // 删除空的 assets 目录
    fs.rmdirSync(assetsDir);

    console.log(`   ✅ 已重命名 ${renamedCount} 个文件，移动 ${movedCount} 个文件`);
}

// Step 7: 清理重复的 hash 文件
function cleanDuplicateHashFiles() {
    console.log('\n🧹 Step 7: 清理重复的 Hash 文件...');
    let removedCount = 0;

    function processDirectory(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        const fileMap = new Map();

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                processDirectory(fullPath);
                continue;
            }

            // 检测带 hash 的文件名格式: name.HASH.ext
            const match = entry.name.match(/^(.+)\.([a-zA-Z0-9_-]{8,})\.(png|jpg|jpeg|gif|webp|svg|mp4|webm)$/i);
            if (match) {
                const baseName = `${match[1]}.${match[3]}`;

                if (!fileMap.has(baseName)) {
                    fileMap.set(baseName, []);
                }
                fileMap.get(baseName).push(entry.name);
            }
        }

        // 删除重复的 hash 文件（保留不带 hash 的版本）
        for (const [baseName, hashFiles] of fileMap) {
            const basePath = path.join(dir, baseName);

            if (fs.existsSync(basePath)) {
                for (const hashFile of hashFiles) {
                    const hashPath = path.join(dir, hashFile);
                    if (fs.existsSync(hashPath)) {
                        fs.unlinkSync(hashPath);
                        removedCount++;
                        console.log(`   🗑️ 删除重复: ${path.relative(targetPublicDir, hashPath)}`);
                    }
                }
            }
        }
    }

    processDirectory(targetPublicDir);
    console.log(`   ✅ 已删除 ${removedCount} 个重复的 Hash 文件`);
}

// 主函数
function main() {
    console.log('🚀 开始文档同步...\n');

    try {
        copyMarkdownFiles();
        handleSameNameFiles();
        cleanFrontmatter();
        fixListStyle();
        copyMediaFiles();
        cleanAssetsDir();
        cleanDuplicateHashFiles();

        console.log('\n✅ 文档同步完成！\n');
    } catch (error) {
        console.error('\n❌ 同步过程中出现错误:', error.message);
        throw error;
    }
}

// 执行
main();
```

## 继续协助

同步完成后，继续协助用户解决当前的问题，不要因为反馈流程中断用户的工作。
