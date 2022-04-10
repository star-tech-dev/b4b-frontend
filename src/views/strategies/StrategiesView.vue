<script setup lang="ts">
import type { Strategy } from '@/models/strategy'
import type { FilterBarState } from '@/components/filter/FilterBar.vue'
import { onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { strategy as mockData } from '@/mock/strategies'

import FilterBar from '@/components/filter/FilterBar.vue'
import StrategyItem from '@/components/strategy/StrategyItem.vue'

const { t } = useI18n()
const state = reactive({
  list: [] as Strategy[]
})

const onFilterChange = (data: FilterBarState) => {
  console.log('on the page:', data)
  // filterBarData
}

onMounted(() => {
  state.list = [mockData(), mockData()]
})
</script>

<template>
  <div class="page -strategies">
    <div class="container">
      <h1>
        <span>{{ t('sections.strategies') }}</span>
        <span class="text-dark"> - {{ t('subheading', { amount: state.list.length } ) }}</span>
      </h1>

      <FilterBar
          :filters="['role', 'subroles', 'cleaners']"
          :sorting="true"
          @change="onFilterChange"
      />

      <section class="list">
        <template v-if="state.list.length">
          <StrategyItem v-for="item in state.list" :data="item" :key="item.id"/>
          <div class="flex center">{{ t('globals.shown') }} {{ state.list.length }}</div>
        </template>

        <div v-else>no items found</div>
      </section>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "subheading": "всего {amount}"
  },
  "en": {
    "subheading": "{amount} items"
  }
}
</i18n>

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
