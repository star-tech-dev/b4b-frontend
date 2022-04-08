<script setup lang="ts">
import type { Card } from '@/models/card'
import type { FilterBarState } from '@/components/filter/FilterBar.vue'
import { onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { cards as mockData } from '@/mock/card'

import FilterBar from '@/components/filter/FilterBar.vue'
import CardItem from '@/components/card/CardItem.vue'

const { t } = useI18n()
const state = reactive({
  list: [] as Card[]
})

const onFilterChange = (data: FilterBarState) => {
  console.log('on the page:', data)
  // filterBarData
}

onMounted(() => {
  state.list = mockData(20)
})
</script>

<template>
  <div class="page -cards">
    <div class="container">
      <h1>
        <span>{{ t('heading') }}</span>
        <span class="text-dark"> - {{ t('subheading', { amount: state.list.length } ) }}</span>
      </h1>

      <FilterBar
          :filters="['role', 'subroles', 'cleaners']"
          :sorting="true"
          @change="onFilterChange"
      />

      <section class="list flex a-start wrap">
        <template v-if="state.list.length">
          <RouterLink v-for="item in state.list" :to="`/cards/${item.alias}`" :key="item.id">
            <CardItem :data="item"/>
          </RouterLink>
        </template>

        <!-- TODO: заменить на лоадер -->
        <div v-else>loading...</div>
      </section>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "heading": "Карты",
    "subheading": "всего {amount}"
  },
  "en": {
    "heading": "Cards",
    "subheading": "{amount} items"
  }
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.page.-cards {
  h1 {
    .text-dark {
      opacity: .5;
    }
  }

  .list {
    & > * {
      margin-right: 20px;
      transition: $transition-default;

      &:hover {
        transform: scale(1.05);
        text-decoration: none;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
