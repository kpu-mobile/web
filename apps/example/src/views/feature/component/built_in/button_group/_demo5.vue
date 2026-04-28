<script setup lang="ts">
const currency = ref('CNY')
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <KmButtonGroup>
      <KmInput />
      <KmButton variant="outline" size="icon">
        <KmIcon name="i-ep:search" />
      </KmButton>
    </KmButtonGroup>
    <KmButtonGroup>
      <KmSelect
        v-model="currency"
        :options="[
          { label: '¥', value: 'CNY' },
          { label: '$', value: 'USD' },
          { label: '€', value: 'EUR' },
        ]"
        class="gap-1 w-inherit"
      />
      <KmInput placeholder="10.00" />
    </KmButtonGroup>
  </div>
</template>
