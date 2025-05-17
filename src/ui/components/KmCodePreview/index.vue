<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
})
const showCode = ref(false)

function toggleCode() {
  showCode.value = !showCode.value
}
</script>

<template>
  <KmPageMain :title="title" main-class="p-0">
    <div class="p-4">
      <slot />
    </div>
    <KmCode v-show="showCode" :code="code.trim()" class="rounded-none" />
    <div class="border-t p-2">
      <KmButton
        variant="ghost"
        size="sm"
        class="w-full"
        @click="toggleCode"
      >
        <KmIcon :name="showCode ? 'i-lucide:code' : 'i-lucide:code-xml'" class="size-4" />
      </KmButton>
    </div>
  </KmPageMain>
</template>
