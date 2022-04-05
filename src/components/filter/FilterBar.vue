<script setup lang="ts">
import type { CleanerID, GameRole, GameSubrole } from '../../../env'
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { gameRoles, cleaners, gameSubroles } from '@/config'

import FilterItem from './FilterItem.vue'

type SortingType = 'default' | 'likes' | 'date' | 'random'
type FilterName = 'role' | 'subroles' | 'cleaners'

interface Sorting {
  type: SortingType
}

export interface FilterBarState {
  role: GameRole | 'any',
  subroles: GameSubrole[],
  cleaners: CleanerID[],
  sorting: Sorting
}

interface Props {
  filters?: FilterName[],
  sorting?: boolean
}

const { t } = useI18n()
const emit = defineEmits(['change'])
const props = withDefaults(defineProps<Props>(), {
  filters: () => ['role', 'subroles', 'cleaners'],
  sorting: true
})
const state = reactive<FilterBarState>({
  role: 'any',
  subroles: [],
  cleaners: [],

  sorting: {
    type: 'default'
  }
})
const sortingTypes: SortingType[] = ['default', 'likes', 'date', 'random']
const isOpened = ref(false)

const roleValues = () => [
  ...gameRoles.map(i => ({ label: t(`game.roles.${i}`), value: i })),
  { label: t('game.roles.any'), value: 'any' }
]
const subroleValues = () => gameSubroles.map(i => ({ label: t(`game.subroles.${i}`), value: i }))
const cleanerValues = () => cleaners.map(i => ({ label: t(`cleaners.${i}`), value: i }))
const sortingValues = () => sortingTypes.map(i => ({ label: t(`sorting.${i}`), value: i }))

const toggle = () => {
  isOpened.value = !isOpened.value
}

const close = () => {
  isOpened.value = false
}

const tryToOpen = () => {
  console.log('e', isOpened.value)
  if (!isOpened.value) {
    toggle()
  }
}

const reset = () => {
  state.role = 'any'
  state.subroles = []
  state.cleaners = []
  state.sorting.type = 'default'
  close()
}

watch(state, () => {
  console.log('state', state)
  emit('change', state)
})
</script>

<template>
  <div :class="`filter-bar ${isOpened ? '-opened' : ''}`" @click.self="tryToOpen">
    <div class="flex a-start j-between" @click.self="tryToOpen">
      <div class="list flex a-start" @click.self="tryToOpen">
        <template v-if="props.filters.includes('role')">
          <FilterItem
              v-model="state.role"
              :values="roleValues()"
              :showValues="isOpened"
              @toggle="toggle"
          >
            {{ t('filters.role') }}
          </FilterItem>
        </template>

        <template v-if="props.filters.includes('subroles')">
          <FilterItem
              v-model="state.subroles"
              :values="subroleValues()"
              :showValues="isOpened"
              :multiple="true"
              @toggle="toggle"
          >
            {{ t('filters.subroles') }}
          </FilterItem>
        </template>

        <template v-if="props.filters.includes('cleaners')">
          <FilterItem
              v-model="state.cleaners"
              :values="cleanerValues()"
              :showValues="isOpened"
              :multiple="true"
              @toggle="toggle"
          >
            {{ t('filters.cleaners') }}
          </FilterItem>
        </template>
      </div>

      <div class="flex a-start">
        <template v-if="props.sorting">
          <FilterItem
              v-model="state.sorting.type"
              :values="sortingValues()"
              :showValues="isOpened"
              @toggle="toggle"
          >
            {{ t('filters.sorting') }}
          </FilterItem>
        </template>
      </div>
    </div>

    <template v-if="isOpened">
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
  margin: 30px auto 20px;
  border-radius: $border-radius-default;
  color: $color-text-regular;
  transition: $transition-default;

  .list {
    max-width: 100%;
    overflow: hidden;
  }

  .actions {
    padding: 30px;
    font-size: 15px;
    font-weight: $font-weight-medium;

    .secondary {
      color: $color-text-dark;
    }

    & > * {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  &.-opened {
    background: $color-bg-light;
  }

  &:not(.-opened) {
    &:hover {
      background: $color-bg-light;
    }
  }
}
</style>

<style lang="scss">
.filter-bar {
  .list {
    & > * {
      .heading {
        padding-right: 40px;
      }
    }
  }
}
</style>