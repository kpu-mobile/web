<template>
  <div class="flex flex-wrap gap-4">
    <KmGradientButton>Kpu-mobile 起飞! 🚀🚀🚀</KmGradientButton>
    <KmGradientButton :duration="500">
      速度更快
    </KmGradientButton>
    <KmGradientButton :colors="['#000', '#fff']">
      自定义颜色
    </KmGradientButton>
    <KmGradientButton class="p-2">
      加粗边框
    </KmGradientButton>
  </div>
</template>
