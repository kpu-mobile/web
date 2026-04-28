<template>
  <div class="flex flex-col gap-4 items-start">
    <KmButtonGroup separator>
      <KmButton>
        <KmIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </KmButton>
      <KmButton>
        <KmIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </KmButton>
      <KmButton>
        <KmIcon name="i-mdi:delete" class="size-4" />
        删除
      </KmButton>
    </KmButtonGroup>
    <KmButtonGroup orientation="vertical" separator>
      <KmButton>
        <KmIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </KmButton>
      <KmButton>
        <KmIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </KmButton>
      <KmButton>
        <KmIcon name="i-mdi:delete" class="size-4" />
        删除
      </KmButton>
    </KmButtonGroup>
    <p>按钮如果为 outline 则无需设置分割线</p>
    <KmButtonGroup>
      <KmButton variant="outline">
        <KmIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </KmButton>
      <KmButton variant="outline">
        <KmIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </KmButton>
      <KmButton variant="outline">
        <KmIcon name="i-mdi:delete" class="size-4" />
        删除
      </KmButton>
    </KmButtonGroup>
  </div>
</template>
