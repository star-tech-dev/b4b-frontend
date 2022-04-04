<script setup lang="ts">
import type { Strategy } from '@/models/strategy'
import { onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { strategy as mockData } from '@/mock/strategies'

import FilterBar from '@/components/filter/FilterBar.vue'
import StrategyItem from '@/components/strategy/StrategyItem.vue'

const { t } = useI18n()
const state = reactive({
  filterBarData: {
    filters: {
      role: '',
      subroles: [],
      cleaners: []
    },
    sorting: {
      type: 'default'
    }
  },
  list: [] as Strategy[]
})

const onFilterChange = (data: any) => {
  console.log('onFilterChange', data)
}

onMounted(() => {
  state.list = [mockData(), mockData()]
})
</script>

<template>
  <div class="page -strategies">
    <div class="container">
      <h1>
        <span>{{ t('pages.strategy.page_title') }}</span>
        <span class="text-dark"> - всего {{ state.list.length }}</span>
      </h1>

      <div>
        <pre>
          {{ state.filterBarData }}
        </pre>
      </div>

      <FilterBar v-model="state.filterBarData" @change="onFilterChange"/>

      <section class="list">
        <template v-if="state.list.length">
          <StrategyItem v-for="item in state.list" :data="item" :key="item.id"/>
          <div class="flex center">показано {{ state.list.length }}</div>
        </template>

        <div v-else>no items found</div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page.-strategies {
  h1 {
    .text-dark {
      opacity: .5;
    }
  }

  .list {
    & > * {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>