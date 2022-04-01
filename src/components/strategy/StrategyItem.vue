<script setup lang="ts">
import type { StrategyProps } from '@/models/strategy'
import { reactive, withDefaults } from 'vue'
import { Strategy } from '@/models/strategy'

import Liker from '@/components/LikerComponent.vue'
import SimpleChart from '@/components/chart/SimpleChart.vue'

interface Props {
  data?: StrategyProps
}

const props = withDefaults(defineProps<Props>(), {})
const data = reactive(new Strategy(props.data))

const onLike = (value: number) => {
  console.log('onLike', value)
  data.likes = value
  data.liked = true
}

const onDislike = (value: number) => {
  console.log('onDislike', value)
  data.likes = value
  data.liked = false
}
</script>

<template>
  <div class="strategy flex a-center">
    <div class="section -info flex column j-between">
      <div>
        <div class="title">{{ data.name }}</div>
        <div class="tags">
          <span>healer</span>
          <span>support</span>
          <span>teamwork</span>
        </div>
      </div>
      <div class="flex a-center j-between">
        <RouterLink :to="`/strategies/${data.id}`">Подробнее</RouterLink>
        <Liker v-model="data.likes" :liked="data.liked" @like="onLike" @dislike="onDislike" />
      </div>
    </div>

    <div class="section -chart">
      <SimpleChart />
    </div>

    <div class="section">
      deck
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
@import "src/assets/scss/extends";

.strategy {
  width: 1000px;
  height: 200px;
  background: $color-bg-light;
  border-radius: $border-radius-default;

  .title {
    @extend %h3;
  }

  .tags {
    margin-top: 10px;
    font-size: 11px;
    line-height: 14px;

    & > * {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  .section {
    flex-grow: 1;
    width: 33%;
    height: 100%;

    &:not(.-info) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &.-info {
      padding: 30px 40px;
    }

    &.-chart {
      border-left: 1px solid $color-bg;
      border-right: 1px solid $color-bg;
    }
  }
}
</style>
