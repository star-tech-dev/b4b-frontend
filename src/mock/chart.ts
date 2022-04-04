export const chartData = {
  labels: [
    'Мобильность',
    'Защита',
    'Экономика',
    'Полезность',
    'Атака'
  ],
  datasets: [{
    data: [1, 0.2, 0.2, 0.2, 0.2],
    fill: true
  }]
}

export const emptyData = {
  labels: [
    'Мобильность',
    'Защита',
    'Экономика',
    'Полезность',
    'Атака'
  ],
  datasets: [{
    data: [0, 0, 0, 0, 0],
    fill: true
  }]
}

const getRandomValue = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min

export const randomData = () => ({
  labels: [
    'Мобильность',
    'Защита',
    'Экономика',
    'Полезность',
    'Атака'
  ],
  datasets: [{
    data: [getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue()],
    fill: true
  }]
})
