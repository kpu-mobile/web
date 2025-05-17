<script setup lang="ts">
definePage({
  meta: {
    title: '日程表',
  },
})
const x = ref(['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07', '01/08', '01/09', '01/10', '01/11', '01/12', '01/13', '01/14', '01/15', '01/16', '01/17', '01/18', '01/19', '01/20', '01/21', '01/22', '01/23', '01/24', '01/25', '01/26', '01/27', '01/28', '01/29', '01/30', '01/31'])
const y = ref(['09:00-10:00', '10:00-11:00', '11:00-12:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'])
const r = ref([{
  row: '01/05',
  col: '11:00-12:00',
  content: '张三',
}, {
  row: '01/08',
  col: '09:00-10:00',
  content: '李四',
}, {
  row: '01/15',
  col: '16:00-17:00',
  content: '王五',
}, {
  row: '01/26',
  col: '15:00-16:00',
  content: '某某',
}])

function isBooked(row: string, col: string) {
  return r.value.findIndex(item => item.row === row && item.col === col)
}

function book(row: string, col: string) {
  r.value.push({
    row,
    col,
    content: '某某',
  })
}

function cancelBooking(index: number) {
  r.value.splice(index, 1)
}
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    1
    <div class="absolute left-0 top-0 h-full w-full of-auto overscroll-none">
      <table>
        <thead>
          <tr>
            <th>
              <span class="col">时段</span><span class="row">日期</span>
            </th>
            <th v-for="e in y" :key="e">
              {{ e }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(l, index) in x" :key="index">
            <td>{{ l }}</td>
            <td v-for="(date, dateIndex) in y" :key="dateIndex">
              <div v-if="isBooked(l, date) >= 0" class="flex flex-col items-center gap-2">
                {{ r[isBooked(l, date)]?.content }}
                <van-button type="danger" size="mini" @click="cancelBooking(isBooked(l, date))">
                  取消预约
                </van-button>
              </div>
              <van-button v-else type="primary" size="mini" @click="book(l, date)">
                预约
              </van-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </KmPageLayout>
</template>

<style scoped>
table {
  border-collapse: collapse;

  th,
  td {
    --uno: border-b border-r p-3 text-center;
  }

  th {
    --uno: sticky top-0 z-1 min-w-50 bg-light-4 text-4 leading-6 dark-bg-black;

    &:first-child {
      --uno: left-0 z-2 min-w-30;

      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cline x2='100%25' y2='100%25' stroke='%23ddd'/%3E%3C/svg%3E");

      .dark & {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cline x2='100%25' y2='100%25' stroke='%23333'/%3E%3C/svg%3E");
      }

      .col {
        --uno: absolute top-1 right-1;
      }

      .row {
        --uno: absolute bottom-1 left-1;
      }
    }
  }

  td {
    --uno: bg-background text-4 leading-6;

    &:first-child {
      --uno: sticky left-0 z-1 bg-light-4 dark-bg-black;
    }

    &:last-child {
      border-right-style: none;
    }
  }

  tr:last-child td {
    border-bottom-style: none;
  }
}
</style>
