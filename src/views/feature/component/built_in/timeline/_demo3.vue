<script setup lang="ts">
const data = [
  { datetime: '2022/05/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/07/06', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/08/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2024/01/09', title: 'condorheroblog', content: '100.00' },
  { datetime: '2024/01/12', title: 'antfu', content: '1024.00' },
  { datetime: '2024/01/12', title: 'sxzz', content: '256.00' },
  { datetime: '2024/02/04', title: 'Vue.js', content: '15000.00' },
  { datetime: '2024/05/06', title: 'Element Plus', content: '2000.00' },
  { datetime: '2024/07/17', title: 'Vxe Table', content: '800.00' },
  { datetime: '2024/10/18', title: 'Element Plus', content: '2000.00' },
  { datetime: '2025/02/28', title: 'hyoban', content: '60.00' },
  { datetime: '2025/03/19', title: 'Element Plus', content: '10000.00' },
]
</script>

<template>
  <KmTimeline :data="data" class="h-100">
    <template #default="{ item }">
      <KmCard>
        <template #header>
          <p>向 <b>{{ item.title }}</b> 赞助</p>
        </template>
        <div>{{ item.content }} 元</div>
      </KmCard>
    </template>
  </KmTimeline>
</template>
