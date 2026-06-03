<script lang="ts" setup>
import { toast } from 'vue-sonner'

function handleComplete() {
  toast.success('恭喜你刮中了')
}
</script>

<template>
  <KmScratchOff
    :width="250"
    :height="250"
    :min-scratch-percentage="30"
    class="border-2 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden"
    @complete="handleComplete"
  >
    <div class="text-8xl">
      🥳
    </div>
  </KmScratchOff>
</template>
