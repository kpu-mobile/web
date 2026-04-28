<template>
  <KmEmpty>
    <template #icon>
      <KmAvatar src="https://github.com/Lmx1220.png" class="size-20 grayscale" />
    </template>
    <template #title>
      <div class="text-xl">
        用户离线
      </div>
    </template>
    <template #description>
      <div>该用户目前离线</div>
      <div>您可以留言通知他或稍后再试</div>
    </template>
    <KmButton>
      留言
    </KmButton>
  </KmEmpty>
</template>
