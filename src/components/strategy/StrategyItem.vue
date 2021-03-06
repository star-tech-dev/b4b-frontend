<script setup lang="ts">
import type { StrategyProps } from '@/models/strategy'
import { reactive, withDefaults } from 'vue'
import { useI18n } from 'vue-i18n'
import { Strategy } from '@/models/strategy'
import { randomData as tempData } from '@/mock/chart'

import ChartDefault from '@/components/chart/ChartDefault.vue'
import DeckSlider from '@/components/slider/DeckSlider.vue'
import Liker from '@/components/like/LikerCompact.vue'
import CardItem from '@/components/card/CardItem.vue'

interface Props {
  data?: StrategyProps
}

const { t } = useI18n()
const props = withDefaults(defineProps<Props>(), {})
const data = reactive(new Strategy(props.data))
const url = `/strategies/${data.id}`

const onLike = (value: number) => {
  data.likes = value
  data.liked = true
}

const onDislike = (value: number) => {
  data.likes = value
  data.liked = false
}
</script>

<template>
  <div class="strategy flex a-center">
    <div class="section -info flex column j-between">
      <div>
        <div class="title">
          <RouterLink :to="url">
            {{ data.name }}
          </RouterLink>
        </div>
        <div class="tags">
          <span>healer</span>
          <span>support</span>
          <span>teamwork</span>
        </div>
      </div>
      <div class="flex a-center j-between">
        <RouterLink :to="url">{{ t('more') }}</RouterLink>
        <Liker v-model="data.likes" :liked="data.liked" @like="onLike" @dislike="onDislike" />
      </div>
    </div>

    <div class="section -chart">
      <RouterLink :to="url">
        <ChartDefault :data="tempData()" />
      </RouterLink>
    </div>

    <div class="section -deck">
      <DeckSlider>
        <CardItem v-for="card in props.data.deck" :data="card" size="small" :key="card.id"/>
      </DeckSlider>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "more": "Подробнее"
  },
  "en": {
    "more": "More info"
  }
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
@import "src/assets/scss/extends";

.strategy {
  width: 1000px;
  height: 200px;
  background: $color-bg-light;
  border-radius: $border-radius-default;

  .title {
    a {
      @extend %h3;

      &:hover {
        text-decoration: none;
      }
    }
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

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }

    &.-deck {
      padding: 0 30px;
      overflow: hidden;
    }
  }
}
</style>
