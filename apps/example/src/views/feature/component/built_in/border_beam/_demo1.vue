<template>
  <div class="border rounded-lg flex-center h-50 relative overflow-hidden">
    <span class="text-3xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10">
      Kpu-mobile
    </span>
    <KmBorderBeam
      :size="250"
      :duration="12000"
      :delay="1000"
      :border-width="2"
    />
  </div>
</template>
