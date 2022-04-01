<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
import { onMounted, ref } from 'vue'

Chart.register(...registerables)

const ctx = ref()

const init = () => {
  if (!ctx.value) {
    console.warn('no ctx.value for a chart')
    return
  }

  const data = {
    labels: [
      'Мобильность',
      'Защита',
      'Экономика',
      'Полезность',
      'Атака'
    ],
    datasets: [{
      data: [1, 0.3, 0.3, 0.3, 0.3],
      fill: true,
      backgroundColor: 'rgba(44,95,255,0.35)',
      borderColor: 'rgba(44,95,255,1)',
      pointBackgroundColor: 'rgba(44,95,255,1)',
      pointBorderColor: 'rgba(44,95,255,1)',
      pointHoverBackgroundColor: 'rgba(44,95,255,1)',
      pointHoverBorderColor: 'rgba(44,95,255,1)'
    }]
  }

  const myChart = new Chart(ctx.value, {
    type: 'radar',
    data: data,
    options: {
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
      },
      layout: {
        padding: 10
      },
      maintainAspectRatio: false
    }
  })
  console.log('myChart', myChart)
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
