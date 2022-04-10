<script setup lang="ts">
import type { ChartData } from 'chart.js'
import type { ChartTheme } from '@/components/chart/ChartCore.vue'

import ChartCore from './ChartCore.vue'

interface Props {
  theme?: ChartTheme,
  data?: ChartData
}

const props = withDefaults(defineProps<Props>(), {})

const chartOptions = {
  elements: {
    point: {
      radius: 3,
      hoverRadius: 5
    },
    line: {
      borderWidth: 2
    }
  },
  scales: {
    r: {
      angleLines: {
        display: false
      },
      ticks: {
        stepSize: 1,
        count: 4,
        display: false
      },
      grid: {
        color: '#262829'
      },
      pointLabels: {
        color: '#5D626F',
        font: {
          size: 11,
          lineHeight: 1.4,
          family: 'Montserrat'
        }
      }
    }
  }
}
</script>

<template>
  <div class="chart">
    <ChartCore :data="props.data" :options="chartOptions" :theme="props.theme" />
  </div>
</template>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
