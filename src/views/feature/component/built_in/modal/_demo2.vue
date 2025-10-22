<script setup lang="ts">
import { toast } from 'vue-sonner'
import { useKmModal } from '@/ui/components/KmModal'

function showModalInfo() {
  useKmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useKmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalWarning() {
  useKmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalError() {
  useKmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useKmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalPromiseConfirm() {
  useKmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    confirmButtonText: '确认（随机成功或失败）',
    beforeClose: async (action, done) => {
      if (action === 'confirm') {
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (Math.random() > 0.5) {
          toast.success('成功了！')
          done()
        }
        else {
          toast.error('失败了！')
        }
      }
      else {
        done()
      }
    },
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <KmButton @click="showModalInfo">
      Info
    </KmButton>
    <KmButton @click="showModalSuccess">
      Success
    </KmButton>
    <KmButton @click="showModalWarning">
      Warning
    </KmButton>
    <KmButton @click="showModalError">
      Error
    </KmButton>
    <KmButton @click="showModalConfirm">
      Confirm
    </KmButton>
    <KmButton @click="showModalPromiseConfirm">
      Confirm with promise
    </KmButton>
  </div>
</template>
