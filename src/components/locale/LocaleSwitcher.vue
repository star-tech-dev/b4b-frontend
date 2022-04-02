<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/locale/i18n'
import vClickOutside from '@/directives/v-click-outside'

import ruLocaleIcon from '@/components/icons/locales/ruLocale.vue'
import enLocaleIcon from '@/components/icons/locales/enLocale.vue'

const i18n = useI18n()
const state = reactive({
  show: false
})

const localeIcon = (locale: string) => {
  const icons = {
    ru: ruLocaleIcon,
    en: enLocaleIcon
  }

  return (icons as any)[locale] || null
}

const toggle = () => {
  state.show = !state.show
}

const close = () => {
  state.show = false
}

const onLocaleClick = (locale: string) => {
  setLocale(i18n, locale)
  close()
}
</script>

<template>
  <div class="locale-switcher" v-click-outside="close">
    <div class="current" @click="toggle">
      <div class="locale-item">
        <component :is="localeIcon(i18n.locale.value)"></component>
        <span>{{ i18n.locale.value }}</span>
      </div>
    </div>

    <div v-if="state.show" class="list flex column center">
      <div
          v-for="locale in i18n.availableLocales"
          :class="`list-item ${locale === i18n.locale.value ? 'disabled' : ''}`"
          :key="`locale-${locale}`"
          @click="onLocaleClick(locale)"
      >
        <div class="locale-item">
          <component :is="localeIcon(locale)"></component>
          <span>{{ locale }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.locale-switcher {
  position: relative;
  user-select: none;

  .locale-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  .current {
    padding: 6px 16px 6px 14px;
    background: $color-bg-dark;
    color: $color-text-regular;
    border-radius: 40px;
    cursor: pointer;
    transition: $transition-default;

    &:hover {
      background: $color-bg-light;
      color: $color-text-white;
    }
  }

  .list {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    z-index: 10;
    width: 100%;
    background: $color-bg-dark;
    border-radius: $border-radius-button;
  }

  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    color: inherit;
    transition: $transition-default;
    cursor: pointer;

    &:hover {
      background: $color-bg-light;
      color: $color-text-white;
    }

    &:first-child {
      padding-top: 8px;
      border-radius: $border-radius-button $border-radius-button 0 0;
    }

    &:last-child {
      padding-bottom: 8px;
      border-radius: 0 0 $border-radius-button $border-radius-button;
    }
  }
}
</style>
