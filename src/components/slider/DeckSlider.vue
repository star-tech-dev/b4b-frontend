<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue'

type Mode = 'default' | 'expanded'

interface Props {
  gap?: number
}

const props = withDefaults(defineProps<Props>(), {
  gap: 10
})
const state = reactive({
  slides: [] as HTMLElement[]
})
const mode = ref<Mode>('default')
const slider = ref()
const list = ref()

const fit = () => {
  state.slides.forEach((item: HTMLElement, i) => {
    const value = (item.offsetWidth / 2 + props.gap) * i
    item.style.transform = `translate(-${value}px, 0)`
  })

  list.value.style.transform = 'translate(0, 0)'
}

const expand = () => {
  state.slides.forEach((item: HTMLElement) => {
    item.style.transform = 'translate(0, 0)'
  })
}

const init = () => {
  state.slides = Array.from(list.value.children)
  state.slides.forEach((slide, i) => {
    if (i !== state.slides.length - 1) {
      slide.style.marginRight = `${props.gap}px`
    }
  })
  fit()
}

const calculateScrollPercent = (mouseX: number) => {
  console.log('------')
  const sliderRect = slider.value.getBoundingClientRect()
  console.log('slider range', sliderRect.x, sliderRect.x + sliderRect.width)
  console.log('mouse value', mouseX)
  const right = (sliderRect.x + sliderRect.width) - mouseX
  console.log('right', right)
  const ost = mouseX - sliderRect.x
  console.log('ost', ost)
  const percent = Math.round(ost / (sliderRect.width / 100))
  console.log('percent', percent)
  return percent
}

const scrollSlider = (mouseX: number) => {
  const percent = calculateScrollPercent(mouseX)
  const totalWidth = state.slides.length * state.slides[0].offsetWidth + (props.gap * state.slides.length - 1) - slider.value.offsetWidth
  console.log('totalWidth', totalWidth)
  const scrollValueOfTotalWidth = Math.round(totalWidth / 100 * percent)
  console.log('scrollValueOfTotalWidth', scrollValueOfTotalWidth)
  list.value.style.transform = `translate(${-scrollValueOfTotalWidth}px, 0)`
  // 1790
}

const onMouseEnter = () => {
  mode.value = 'expanded'
}

const onMouseLeave = () => {
  mode.value = 'default'
}

const onMouseMove = (e: MouseEvent) => {
  scrollSlider(e.x)
}

watch(mode, () => {
  mode.value === 'default'
      ? fit()
      : expand()
})

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="slider" class="deck-slider" @mouseenter="onMouseEnter" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <div ref="list" class="list flex a-center">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.deck-slider {
  width: 100%;
  overflow: hidden;

  .list {
    width: auto;
  }
}
</style>

<style lang="scss">
@import "src/assets/scss/variables";

.deck-slider {
  .list {
    & > * {
      //transform: translate(0, 0);
      transition: $transition-default;
    }
  }
}
</style>
