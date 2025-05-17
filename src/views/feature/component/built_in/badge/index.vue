<script setup lang="ts">
definePage({
  meta: {
    title: '徽章',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <div class="flex gap-8">
        <KmBadge :value="true">
          <KmIcon name="i-ri:notification-3-line" />
        </KmBadge>
        <KmBadge :value="99">
          <KmIcon name="i-ri:notification-3-line" />
        </KmBadge>
        <KmBadge value="噢">
          <KmIcon name="i-ri:notification-3-line" />
        </KmBadge>
        <KmBadge value="9" variant="secondary">
          <KmIcon name="i-ri:notification-3-line" />
        </KmBadge>
        <KmBadge value="9" variant="destructive">
          <KmIcon name="i-ri:notification-3-line" />
        </KmBadge>
      </div>
    </KmPageMain>
  </KmPageLayout>
</template>
