<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { gameRoles, gameSubroles, cleaners } from '@/config'

import FilterItem from './FilterItem.vue'

interface Filter {
  name: string,
  model: string,
  values: {
    label: string,
    value: any
  }[],
  localePrefix?: string
  multiple?: boolean
}

interface Props {
  modelValue?: any
}

const { t } = useI18n()
const emit = defineEmits(['change'])
const props = withDefaults(defineProps<Props>(), {})
const state = reactive({
  filters: {
    role: '',
    subroles: [],
    cleaners: []
  },
  sorting: {
    type: 'default'
  },
  opened: false
})

const filters = [
  {
    name: t('filters.role'),
    model: 'role',
    values: [
      ...gameRoles.map(i => ({ label: t(`game.roles.${i}`), value: i })),
      {
        label: t('game.roles.any'),
        value: 'any'
      }
    ],
    localePrefix: 'game.roles'
  },
  {
    name: t('filters.subroles'),
    model: 'subroles',
    values: gameSubroles.map(i => ({ label: t(`game.subroles.${i}`), value: i })),
    multiple: true,
    localePrefix: 'game.subroles'
    
  },
  {
    name: t('filters.cleaners'),
    model: 'cleaners',
    values: cleaners.map(i => ({ label: t(`cleaners.${i}`), value: i })),
    multiple: true,
    localePrefix: 'cleaners'
  }
] as Filter[]

const sotring = {
  name: t('filters.sorting'),
  model: 'sorting',
  values: [
    { label: t('sorting.default'), value: 'default' },
    { label: t('sorting.likes'), value: 'likes' },
    { label: t('sorting.random'), value: 'random' },
    { label: t('sorting.date'), value: 'date' }
  ],
  localePrefix: 'sorting'
} as Filter

const toggle = () => {
  state.opened = !state.opened
}

const close = () => {
  state.opened = false
}

const reset = () => {
  state.filters.role = 'battle'
  state.filters.subroles = []
  state.filters.cleaners = []
  state.sorting.type = 'default'
  emit('change', { filters: state.filters, sorting: state.sorting })
  close()
}

const onChange = () => {
  emit('change', { filters: state.filters, sorting: state.sorting })
  // const newValue = props.modelValue
  // console.log('newValue', newValue, newValue.filters)
  // emit('update:modelValue', props.modelValue)
}
</script>

<template>
  <div :class="`filter-bar ${state.opened ? '-opened' : ''}`">
    <!--  Heading  -->
    <div class="heading flex a-center j-between" @click="toggle">
      <div class="filter-list flex a-center">
        <FilterItem
            v-for="filter in filters"
            v-model="state[filter.model]"
            :multiple="filter.multiple"
            :key="filter.name"
            content="heading"
            :locale-prefix="filter.localePrefix"
            @change="onChange"
        >
          <span>{{ filter.name }}</span>
        </FilterItem>
      </div>

      <div class="filter-list">
        <FilterItem
            v-model="state[sotring.model]"
            :values="sotring.values"
            content="heading"
            align="right"
            :locale-prefix="sotring.localePrefix"
            @change="onChange"
        >
          <span>{{ sotring.name }}</span>
        </FilterItem>
      </div>
    </div>

    <!--  Options  -->
    <template v-if="state.opened">
      <div class="options flex a-start j-between">
        <div>
          <div class="filter-list flex a-start">
            <FilterItem
                v-for="filter in filters"
                v-model="state[filter.model]"
                :multiple="filter.multiple"
                :values="filter.values"
                :key="filter.name"
                content="options"
                @change="onChange"
            >
              <span>{{ filter.name }}</span>
            </FilterItem>
          </div>
        </div>

        <div class="filter-list">
          <FilterItem
              v-model="state[sotring.model]"
              :values="sotring.values"
              content="options"
              align="right"
              @change="onChange"
          >
            <span>{{ sotring.name }}</span>
          </FilterItem>
        </div>
      </div>

      <div class="actions">
        <a href="#" @click.prevent="close">Свернуть панель</a>
        <a href="#" class="secondary" @click.prevent="reset">Сбросить все фильтры</a>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.filter-bar {
  margin: 40px auto 20px;
  border-radius: $border-radius-default;
  transition: $transition-default;

  .heading {
    padding: 30px;
    cursor: pointer;
    border-radius: $border-radius-default;
    transition: $transition-default;

    &:hover {
      background: darken($color-bg-light, 1.2%);
      color: $color-text-white;
    }
  }

  .options {
    padding: 30px 30px;
    border-top: 1px solid $color-bg;
  }

  .actions {
    padding: 10px 30px 30px;

    .secondary {
      color: $color-text-dark;
      opacity: .5;

      &:hover {
        opacity: 1;
      }
    }

    & > * {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  .filter-list {
    & > * {
      width: 220px;
    }
  }

  &.-opened {
    background: $color-bg-light;
    color: $color-text-white;

    .heading {
      &:hover {
        background: $color-bg-light;
      }
    }
  }
}
</style>