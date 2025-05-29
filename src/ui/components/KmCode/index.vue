<script setup lang="ts">
import { cn } from '@/utils'
import { useClipboard } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

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
    <pre class="w-full overflow-auto whitespace-pre-line">
      <code class="whitespace-pre" tabindex="0">{{ code }}</code>
    </pre>
    <KmButton
      v-if="isSupported"
      variant="secondary"
      class="absolute end-3 top-3 border border-light/20 px-2.5"
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
