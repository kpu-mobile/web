<template>
  <KmEmpty icon="i-lucide:folder-open" title="没有项目" description="您尚未创建任何项目，请从创建第一个项目开始">
    <div class="flex gap-2">
      <KmButton>
        创建项目
      </KmButton>
      <KmButton variant="outline">
        导入项目
      </KmButton>
    </div>
    <KmButton variant="link" class="text-muted-foreground" size="sm">
      了解更多 <KmIcon name="i-lucide:arrow-up-right" />
    </KmButton>
  </KmEmpty>
</template>
