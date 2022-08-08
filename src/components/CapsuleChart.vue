<template>
  <dv-capsule-chart :config="config" class="capsule-chart" />
</template>
<script setup>
import { reactive } from "vue"

const props = defineProps({
})
const config = reactive({
  data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 67
    },
    {
      name: '漯河',
      value: 123
    },
    {
      name: '郑州',
      value: 55
    },
    {
      name: '西峡',
      value: 98
    },
  ],
  unit: '单位'
})
</script>
