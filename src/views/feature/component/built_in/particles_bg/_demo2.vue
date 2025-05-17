<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <KmParticlesBg
      class="absolute inset-0"
      color="#2563EB"
      :quantity="1000"
      :ease="100"
      :staticity="5"
    />
  </div>
</template>
