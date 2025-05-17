<script setup lang="ts">
import { toast } from 'vue-sonner'

definePage({
  meta: {
    title: '轻提示',
  },
})

function showToast(type?: 'success' | 'error' | 'info' | 'warning' | 'loading1' | 'loading2') {
  if (type) {
    if (type === 'loading1') {
      toast.promise(() => new Promise((resolve) => {
        setTimeout(resolve, 2000)
      }), {
        loading: '加载中',
        success: () => '加载成功',
        error: () => '加载失败',
        position: 'top-right',
        duration: 3000,
      })
    }
    else if (type === 'loading2') {
      const loading = toast.loading('加载中', {
        position: 'top-right',
        duration: Infinity,
      })
      setTimeout(() => {
        toast.dismiss(loading)
        toast('Kpu-mobile 自成一派的 H5 框架', {
          description: '开箱即用，提供舒适开发体验',
          position: 'top-right',
          duration: 3000,
        })
      }, 2000)
    }
    else {
      toast[type]('Kpu-mobile 自成一派的 H5 框架', {
        description: '开箱即用，提供舒适开发体验',
        position: 'top-right',
        duration: 3000,
      })
    }
  }
  else {
    toast('Kpu-mobile 自成一派的 H5 框架', {
      description: '开箱即用，提供舒适开发体验',
      position: 'top-right',
      duration: 3000,
    })
  }
}
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <div class="flex flex-col gap-2">
        <KmButton @click="showToast()">
          默认
        </KmButton>
        <KmButton @click="showToast('success')">
          成功
        </KmButton>
        <KmButton @click="showToast('error')">
          错误
        </KmButton>
        <KmButton @click="showToast('info')">
          信息
        </KmButton>
        <KmButton @click="showToast('warning')">
          警告
        </KmButton>
        <KmButton @click="showToast('loading1')">
          加载中 1
        </KmButton>
        <KmButton @click="showToast('loading2')">
          加载中 2
        </KmButton>
      </div>
    </KmPageMain>
  </KmPageLayout>
</template>
