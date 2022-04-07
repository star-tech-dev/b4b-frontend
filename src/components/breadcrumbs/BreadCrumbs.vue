<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import AngleIcon from '@/components/icons/AngleIcon.vue'

interface Props {
  lastElement?: string
}

const showMainPageLink = true
const route = useRoute()
const routeName = route.name as string
const { t } = useI18n()
const props = withDefaults(defineProps<Props>(), {})

const currentSection = computed(() => routeName.split('.')[0] || null)

const lastElementText = computed(() => {
  return props.lastElement
      ? t(props.lastElement)
      : t(routeName)
})
</script>

<template>
  <section class="breadcrumbs flex a-center">
    <template v-if="showMainPageLink">
      <RouterLink to="/">{{ t('home') }}</RouterLink>
      <AngleIcon class="separator" />
    </template>

    <template v-if="currentSection">
      <RouterLink :to="`/${currentSection}`">{{ t(currentSection) }}</RouterLink>
      <AngleIcon class="separator" />
    </template>

    <span>
      <span v-if="lastElementText">{{ lastElementText }}</span>
      <slot v-else />
    </span>
  </section>
</template>

<i18n>
{
  "ru": {
    "home": "Главная",
    "strategies": "Стратегии",
    "cards": "Карты",
    "weapon": "Оружие",
    "cleaners": "Чистильщики",
    "strategies.add": "Создание новой стратегии"
  },
  "en": {
    "home": "Home page",
    "strategies": "Strategies",
    "cards": "Cards",
    "weapon": "Weapon",
    "cleaners": "Cleaners",
    "strategies.add": "New strategy creation"
  }
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.breadcrumbs {
  & > * {
    display: block;
  }

  a {
    color: $color-text-regular;

    &:hover {
      color: $color-primary;
      text-decoration: none;
    }
  }

  .separator {
    margin: 1px 15px 0 15px;
    color: $color-text-dark;
  }
}
</style>
