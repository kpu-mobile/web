<script setup lang="ts">
import { useKmModal } from '@/ui/components/KmModal'

definePage({
  meta: {
    title: '弹窗',
  },
})

const modal = ref(false)
const modalInfo = ref({
  closable: true,
  center: false,
  header: true,
  footer: true,
  contentHeight: '',
  loading: false,
})
watch(() => modalInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      modalInfo.value.loading = false
    }, 3000)
  }
})

function showModalInfo() {
  useKmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
  })
}
function showModalSuccess() {
  useKmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
  })
}
function showModalWarning() {
  useKmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
  })
}
function showModalError() {
  useKmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
  })
}
function showModalConfirm() {
  useKmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
  })
}
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div>
      <KmPageMain title="弹窗">
        <KmButton @click="modal = true">
          打开
        </KmButton>
        <KmModal v-model="modal" title="标题" description="这里是一段描述介绍" :closable="modalInfo.closable" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer">
          <div :class="modalInfo.contentHeight">
            <div class="flex-start-center flex-wrap gap-2">
              <KmButton :variant="modalInfo.closable ? 'default' : 'outline'" class="w-full" @click="modalInfo.closable = !modalInfo.closable">
                关闭按钮
              </KmButton>
              <KmButton :variant="modalInfo.center ? 'default' : 'outline'" class="w-full" @click="modalInfo.center = !modalInfo.center">
                居中显示
              </KmButton>
              <KmButton :variant="modalInfo.header ? 'default' : 'outline'" class="w-full" @click="modalInfo.header = !modalInfo.header">
                头部区域
              </KmButton>
              <KmButton :variant="modalInfo.footer ? 'default' : 'outline'" class="w-full" @click="modalInfo.footer = !modalInfo.footer">
                尾部区域
              </KmButton>
              <KmButton :variant="!!modalInfo.contentHeight ? 'default' : 'outline'" class="w-full" @click="modalInfo.contentHeight = !!modalInfo.contentHeight ? '' : 'h-400'">
                切换内容高度
              </KmButton>
              <KmButton variant="outline" class="w-full" @click="modalInfo.loading = true">
                显示加载中
              </KmButton>
            </div>
          </div>
        </KmModal>
      </KmPageMain>
      <KmPageMain title="对话框">
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
        </div>
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>
