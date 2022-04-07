<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { randomData as tempData } from '@/mock/chart'
import { statIndicators } from '@/config'

import ChartDefault from '@/components/chart/ChartDefault.vue'

const { t } = useI18n()
const indicators = statIndicators.map(i => t(`statIndicators.${i}`))
</script>

<template>
  <div class="buff-debuff-charts">
    <div class="relative">
      <div class="flex a-center j-between">
        <div class="chart">
          <ChartDefault :data="tempData()"/>
        </div>

        <div class="legend">
          <h3>{{ t('globals.buffs') }}</h3>
          <div v-for="indicator in indicators" class="legend-item flex a-center" :key="indicator">
            <span>1</span>
            <span>{{ indicator }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="flex a-center j-between">
        <div class="chart">
          <ChartDefault theme="red" :data="tempData()"/>
        </div>

        <div class="legend">
          <h3>{{ t('globals.debuffs') }}</h3>
          <div v-for="indicator in indicators" class="legend-item flex a-center" :key="indicator">
            <span>1</span>
            <span>{{ indicator }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.buff-debuff-charts {
  padding: 10px 50px;

  h3 {
    display: block;
    margin-bottom: 10px;
    color: $color-text-white;
  }

  .chart {
    width: 300px;
    height: 300px;
  }

  .legend {
    margin-top: 10px;

    & > .legend-item {
      &:not(:last-child) {
        margin-bottom: 6px;
      }
    }
  }

  .legend-item {
    & > * {
      &:first-child {
        margin-right: 14px;
        min-width: 12px;
        text-align: center;
        color: $color-text-white;
      }
    }
  }
}
</style>