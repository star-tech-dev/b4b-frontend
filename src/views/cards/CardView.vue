<script setup lang="ts">
import type { Strategy } from '@/models/strategy'
import type { Card } from '@/models/card'
import { computed, onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { card as mockData } from '@/mock/card'
import { strategies as mockData2 } from '@/mock/strategies'

import BreadCrumbs from '@/components/breadcrumbs/BreadCrumbs.vue'
import CardItem from '@/components/card/CardItem.vue'
import LikerButton from '@/components/like/LikerButton.vue'
import UIButton from '@/components/ui/UIButton.vue'
import IconBookmark from '@/components/icons/BookmarkIcon.vue'
import StrategyItem from '@/components/strategy/StrategyItem.vue'
import ChartSimple from '@/components/chart/ChartSimple.vue'

const { t } = useI18n()
const state = reactive({
  data: null as unknown as Card,
  strategies: [] as Strategy[]
})

const cleanersList = computed(() => {
  if (state.data.cleaners.length) {
    return state.data.cleaners.join(', ')
  }
  return t('game.cleaners.any')
})

const toggleFavorites = () => {
  console.log('toggleFavorites')
}

const toggleLike = () => {
  console.log('toggleLike')
}

onMounted(() => {
  state.data = mockData()
  state.strategies = mockData2
  console.log('state.data', state.data)
})
</script>

<template>
  <div class="page -card">
    <div class="container">
      <template v-if="state.data">
        <div class="breadcrumbs-parent">
          <BreadCrumbs :lastElement="state.data.name"/>
        </div>

        <section class="main flex a-start">
          <div>
            <CardItem size="large" :data="state.data"/>
          </div>

          <div class="main-info">
            <h1>{{ state.data.name }}</h1>

            <div class="info-block">
              <div class="label">{{ t('card.class') }}</div>
              <div>{{ t(`card.class_values.${state.data.class}`) }}</div>
            </div>

            <div class="info-block">
              <div class="label">{{ t('card.type') }}</div>
              <div>{{ t(`card.type_values.${state.data.type}`) }}</div>
            </div>

            <div class="info-block">
              <div class="label">{{ t('card.cleaners') }}</div>
              <div>{{ cleanersList }}</div>
            </div>

            <div class="stat-block inline-flex">
              <div class="flex a-center j-between">
                <div class="text">
                  <div class="label">{{ t('effects') }}</div>
                  <div class="effect">
                    <span class="value">+3</span>
                    <span>Mobilnost</span>
                  </div>
                  <div class="effect">
                    <span class="value">+3</span>
                    <span>Mobilnost</span>
                  </div>
                </div>
                <div class="chart">
                  <ChartSimple/>
                </div>
              </div>
            </div>

            <div class="actions flex a-center">
              <LikerButton type="card" :target="state.data.alias" />
              <UIButton theme="ghost" full-width @click="toggleFavorites">
                <IconBookmark/>
                <span>{{ t('actions.to_favorites') }}</span>
              </UIButton>
            </div>
          </div>
        </section>

        <section class="strategies">
          <h3>{{ t('card_strategies', { card: state.data.name }) }}</h3>
          <div class="list">
            <StrategyItem v-for="item in state.strategies" :data="item" :key="item.id"/>
          </div>
        </section>

        <section class="similar">
          <div class="container">
            <h3>{{ t('similar', { card: state.data.name }) }}</h3>
            <div class="list flex a-center">
              <CardItem :data="state.data"/>
              <CardItem :data="state.data"/>
              <CardItem :data="state.data"/>
            </div>
          </div>
        </section>
      </template>

      <!-- TODO: заменить на лоадер -->
      <template v-else>
        <div>loading...</div>
      </template>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "effects": "Эффекты",
    "card_strategies": "Стратегии с картой \"{card}\"",
    "similar": "Карты, похожие на \"{card}\""
  },
  "en": {
    "effects": "Effects",
    "card_strategies": "Strategies with \"{card}\" card",
    "similar": "Similar to \"{card}\" cards"
  }
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.page.-card {
  section {
    margin: 40px auto;

    h3 {
      margin-bottom: 30px;
    }

    &.strategies {
      margin: 100px auto;

      .list {
        & > * {
          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }
    }

    &.similar {
      margin: 100px auto;

      .list {
        & > * {
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }
  }

  h1 {
    margin-top: -8px;
    margin-bottom: 20px;
    padding-left: 40px;
  }

  .breadcrumbs-parent {
    margin: 20px auto 40px;
  }

  .main-info {
    margin-left: 80px;
  }

  .info-block {
    margin-bottom: 20px;
    padding-left: 40px;
    color: $color-text-white;
  }

  .stat-block {
    margin: 20px auto 50px;
    padding-right: 40px;
    background: $color-bg-dark;
    border-radius: $border-radius-default;
    color: $color-text-white;

    .text {
      margin-right: 40px;
      padding: 24px 40px 30px;
    }

    .label {
      margin-bottom: 15px;
    }

    .chart {
      width: 100px;
      height: 100px;
    }

    .effect {
      .value {
        margin-right: 10px;
        font-weight: $font-weight-semibold;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .label {
    margin-bottom: 6px;
    font-size: 9px;
    line-height: 11px;
    color: $color-text-dark;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
  }
}
</style>
