<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import { onMounted, reactive, ref } from 'vue'
import { Chart, registerables } from 'chart.js'

export type ChartTheme = 'blue' | 'red'

interface Props {
  theme?: ChartTheme
  data?: ChartData,
  options?: ChartOptions
}

Chart.register(...registerables)

const props = withDefaults(defineProps<Props>(), {})
const ctx = ref()
const state = reactive({
  chart: null as any
})

const backgroundColor = (): string => {
  return props.theme === 'red' ? 'rgb(221, 54, 111,0.35)' : 'rgba(44,95,255,0.35)'
}
const borderColor = (): string => {
  return props.theme === 'red' ? '#DD366F' : 'rgba(44,95,255,1)'
}

const randomDataset = () => {
  return {
    data: [1, 0.2, 0.2, 0.2, 0.2],
    fill: true
  }
}

const chartData = () => {
  const data = props.data ? { ...props.data } : {} as ChartData
  data.datasets = data.datasets || [randomDataset()]

  data.datasets = data.datasets.map(i => ({
    ...i,
    backgroundColor: backgroundColor(),
    borderColor: borderColor(),
    pointBackgroundColor: borderColor(),
    pointBorderColor: borderColor()
  }))
  return data
}

const chartOptions = () => ({
  elements: {
    point: {
      radius: 3,
      hoverRadius: 5
    },
    line: {
      borderWidth: 2
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  layout: {
    padding: 10
  },
  maintainAspectRatio: false,
  ...props.options
})

const init = () => {
  if (!ctx.value) {
    console.warn('no ctx.value for a chart')
    return
  }

  state.chart = new Chart(ctx.value, {
    type: 'radar',
    data: chartData(),
    options: chartOptions()
  })
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="chart">
    <canvas ref="ctx"></canvas>
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