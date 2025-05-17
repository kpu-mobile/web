<script setup lang="ts">
import { toast } from 'vue-sonner'

const countToRef = useTemplateRef('countToRef')

const startVal = ref(0)
const endVal = ref(100000)

function onStarted() {
  toast('开始')
}

function onFinished() {
  toast('结束')
}
</script>

<template>
  <KmCountTo ref="countToRef" :start-val="startVal" :end-val="endVal" :autoplay="false" @on-started="onStarted" @on-finished="onFinished" />
  <div class="flex flex-row gap-2">
    <KmButton @click="countToRef?.start">
      开始
    </KmButton>
    <KmButton @click="countToRef?.reset">
      重置
    </KmButton>
    <KmButton @click="endVal += 10000">
      增加10000
    </KmButton>
  </div>
</template>
