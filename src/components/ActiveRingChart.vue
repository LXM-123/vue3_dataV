<template>
  <dv-active-ring-chart :config="config" class="active-ring-chart" />
</template>
<script setup>
import { reactive } from "vue"

const props = defineProps({
})
const config = reactive({
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
    }
  ]
})
</script>
