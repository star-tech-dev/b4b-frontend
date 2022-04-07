import { randomNumber } from '@/helpers/random'
import { repeat } from '@/helpers/repeat'

const labels = [
  'Мобильность',
  'Защита',
  'Экономика',
  'Полезность',
  'Атака'
]

export const chartData = {
  labels,
  datasets: [{
    data: [1, 0.2, 0.2, 0.2, 0.2],
    fill: true
  }]
}

export const emptyData = {
  labels,
  datasets: [{
    data: [0, 0, 0, 0, 0],
    fill: true
  }]
}

export const randomData = () => ({
  datasets: [{
    data: repeat(() => randomNumber(1, 10), 5),
    fill: true
  }]
})
