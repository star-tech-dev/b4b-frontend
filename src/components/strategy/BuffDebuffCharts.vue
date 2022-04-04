<script setup lang="ts">
import ChartDefault from '@/components/chart/ChartDefault.vue'
import { randomData as tempData } from '@/mock/chart'
</script>

<template>
  <div class="buff-debuff-charts">
    <div class="relative">
      <div class="flex a-center j-between">
        <div class="chart">
          <ChartDefault :data="tempData()"/>
        </div>

        <div class="legend">
          <h3>Buffs</h3>
          <div class="legend-item flex a-center">
            <span>1</span>
            <span>Атака</span>
          </div>
          <div class="legend-item flex a-center">
            <span>6</span>
            <span>Защита</span>
          </div>
          <div class="legend-item flex a-center">
            <span>3</span>
            <span>Мобильность</span>
          </div>
          <div class="legend-item flex a-center">
            <span>2</span>
            <span>Полезность</span>
          </div>
          <div class="legend-item flex a-center">
            <span>4</span>
            <span>Экономика</span>
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
          <h3>Debuffs</h3>
          <div class="legend-item flex a-center">
            <span>1</span>
            <span>Атака</span>
          </div>
          <div class="legend-item flex a-center">
            <span>6</span>
            <span>Защита</span>
          </div>
          <div class="legend-item flex a-center">
            <span>3</span>
            <span>Мобильность</span>
          </div>
          <div class="legend-item flex a-center">
            <span>2</span>
            <span>Полезность</span>
          </div>
          <div class="legend-item flex a-center">
            <span>4</span>
            <span>Экономика</span>
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