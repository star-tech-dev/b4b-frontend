<script setup lang="ts">
import { useStore } from 'vuex'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import LocaleSwitcher from '@/components/locale/LocaleSwitcher.vue'
import logoImage from '@/assets/img/logo.svg'

const { t } = useI18n()
const store = useStore()
const route = useRoute()
const navItems = [
  {
    to: '/strategies',
    label: t('nav.strategies')
  },
  {
    to: '/cards',
    label: t('nav.cards')
  },
  {
    to: '/weapon',
    label: t('nav.weapon')
  },
  {
    to: '/cleaners',
    label: t('nav.cleaners')
  }
]

const isActive = (path: string) => route.fullPath.includes(path)

const onLogin = () => {
  store.dispatch('modals/open', 'auth')
}
</script>

<template>
  <header>
    <div class="container -responsive flex a-center j-between">
      <div class="flex a-center">
        <RouterLink to="/" class="logo">
          <img :src="logoImage" alt="">
        </RouterLink>

        <LocaleSwitcher />
      </div>

      <nav class="flex a-center">
        <RouterLink
            v-for="(item, i) in navItems"
            :class="isActive(item.to) ? 'active' : ''"
            :to="item.to"
            :key="i"
        >
          {{ item.label }}
        </RouterLink>
        <a class="active" href="#" @click.prevent="onLogin">{{ t('nav.login') }}</a>
      </nav>
    </div>
  </header>
</template>

<i18n>
{
  "ru": {
    "nav": {
      "strategies": "Стратегии",
      "cards": "Карты",
      "weapon": "Оружие",
      "cleaners": "Чистильщики",
      "login": "Войти"
    }
  },
  "en": {
    "nav": {
      "strategies": "Strategies",
      "cards": "Cards",
      "weapon": "Weapon",
      "cleaners": "Cleaners",
      "login": "Log in"
    }
  }
}
</i18n>

<style lang="scss" scoped>
@import "../../assets/scss/variables/index";

header {
  padding: 20px 0;

  .logo {
    margin-right: 40px;
  }

  nav {
    & > * {
      display: inline-flex;
      padding: 10px 10px;
      color: $color-text-white;
      text-decoration: none;

      &:hover {
        color: $color-primary;
        text-decoration: none;
      }

      &.router-link-active,
      &.active {
        color: $color-primary;

        &:hover {
          text-decoration: underline;
        }
      }

      &:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
}
</style>
