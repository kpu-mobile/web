<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { cn } from '@/utils'

const props = withDefaults(defineProps<{
  code: string
  class?: string
}>(), {
})
const { t } = useI18n()
const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div :class="cn('group relative w-full rounded-lg bg-dark p-4 text-light', props.class)">
    <pre class="w-full whitespace-pre-line overflow-auto">
      <code class="whitespace-pre" tabindex="0">{{ code }}</code>
    </pre>
    <KmButton
      v-if="isSupported"
      variant="secondary"
      class="px-2.5 border border-light/20 end-3 top-3 absolute"
      @click="copy(code)"
    >
      {{ copied ? t('copied') : '' }}
      <KmIcon :name="copied ? 'i-tabler:clipboard-check' : 'i-tabler:clipboard'" class="size-4" />
    </KmButton>
  </div>
</template>

<i18n lang="json">
{
  "zh-cn": {
    "copied": "已复制"
  },
  "en-US": {
    "copied": "Copyed"
  }
}
</i18n>

<style scoped>
@font-face {
  font-family: FontWithASyntaxHighlighter;
  src: url("./FontWithASyntaxHighlighter-Regular.woff2") format("woff2");
}

code {
  font-family: FontWithASyntaxHighlighter, monospace;
}
</style>
