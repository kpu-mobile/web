<script setup lang="ts">
definePage({
  meta: {
    title: '趋势符号',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div>
      <KmPageMain>
        <div class="flex flex-col gap-2">
          <KmTrend value="12.3" />
          <KmTrend value="12.3" type="down" />
        </div>
      </KmPageMain>
      <KmPageMain title="颜色反转">
        <div class="flex flex-col gap-2">
          <KmTrend value="12.3" reverse />
          <KmTrend value="12.3" type="down" reverse />
        </div>
      </KmPageMain>
      <KmPageMain title="前缀后缀">
        <div class="flex flex-col gap-2">
          <KmTrend value="12.3" prefix="$" />
          <KmTrend value="12.3" suffix="%" />
        </div>
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>
