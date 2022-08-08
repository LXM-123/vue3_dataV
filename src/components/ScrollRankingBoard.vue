<template>
  <dv-scroll-ranking-board :config="config" class="scroll-ranking-board"/>
</template>
<script setup>
import { reactive } from "vue"

const props = defineProps({
})
const config = reactive({
  // 表数据
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 45
    },
    {
      name: '漯河',
      value: 29
    }
  ],
  // rowNum
  rowNum: 5,
  // 轮播时间间隔(ms)
  waitTime: 2000,
  // 轮播方式 'single'|'page'
  carousel: 'single',
  // 数值单位
  unit: '',
  // 自动排序
  sort: true,
  // 数值格式化
  valueFormatter: undefined
})
</script>
