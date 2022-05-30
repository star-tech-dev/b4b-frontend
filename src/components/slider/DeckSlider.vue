<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue'

type Mode = 'default' | 'expanded'

interface Props {
  gap?: number,
  noScrollBorder?: number,
  compressionRatio?: number // 2 = 50%, 1 = 100%
}

const props = withDefaults(defineProps<Props>(), {
  gap: 10,
  noScrollBorder: 30,
  compressionRatio: 2
})
const state = reactive({
  slides: [] as HTMLElement[]
})
const mode = ref<Mode>('default')
const slider = ref()
const list = ref()

const fit = () => {
  state.slides.forEach((item: HTMLElement, i) => {
    const value = (item.offsetWidth / props.compressionRatio + props.gap) * i
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
  const sliderRect = slider.value.getBoundingClientRect()
  const fromRight = (sliderRect.x + sliderRect.width) - mouseX
  const fromLeft = mouseX - sliderRect.x - props.noScrollBorder

  if (fromLeft < 0) return 0
  if (fromRight < 0) return 100

  const percent = Math.round(fromLeft / ((sliderRect.width - (props.noScrollBorder * 2)) / 100))

  if (percent < 0) return 0
  if (percent > 100) return 100

  return percent
}

const scrollSlider = (mouseX: number) => {
  const percent = calculateScrollPercent(mouseX)
  const totalWidth = state.slides.length * state.slides[0].offsetWidth + (props.gap * state.slides.length - 1) - slider.value.offsetWidth
  const scrollValueOfTotalWidth = Math.round(totalWidth / 100 * percent)
  list.value.style.transform = `translate(${-scrollValueOfTotalWidth}px, 0)`
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
  <div ref="slider" :class="`deck-slider -mode-${mode}`" @mouseenter="onMouseEnter" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <div ref="list" class="list flex a-center">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.deck-slider {
  position: relative;
  width: 100%;
  overflow: hidden;

  .list {
    width: auto;
    transition: $transition-deck-slider;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    background-image: linear-gradient(90deg, rgba($color-bg-light, 0) 0%, $color-bg-light 100%);
    opacity: 0;
    visibility: hidden;
    transition: $transition-default;
  }

  &.-mode {
    &-default {
      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
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
