<script setup lang="ts">
definePage({
  meta: {
    title: '按钮',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <div class="flex flex-wrap gap-4">
        <KmButton>
          按钮
        </KmButton>
        <KmButton variant="destructive">
          按钮
        </KmButton>
        <KmButton variant="outline">
          按钮
        </KmButton>
        <KmButton variant="secondary">
          按钮
        </KmButton>
        <KmButton variant="ghost">
          按钮
        </KmButton>
        <KmButton variant="link">
          按钮
        </KmButton>
        <KmButton disabled>
          按钮
        </KmButton>
        <KmButton loading>
          按钮
        </KmButton>
      </div>
    </KmPageMain>
  </KmPageLayout>
</template>
