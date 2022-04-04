<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import LocaleSwitcher from '@/components/locale/LocaleSwitcher.vue'
import logoImage from '@/assets/img/logo.svg'

const { t } = useI18n()

const onLogin = () => {
  console.log('onLogin')
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
        <RouterLink class="active" to="/strategies/add">Add strategy</RouterLink>
        <RouterLink to="/strategies">{{ t('nav.strategies') }}</RouterLink>
        <RouterLink to="/cards">{{ t('nav.cards') }}</RouterLink>
        <RouterLink to="/weapon">{{ t('nav.weapon') }}</RouterLink>
        <RouterLink to="/cleaners">{{ t('nav.cleaners') }}</RouterLink>
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
@import "src/assets/scss/variables";

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
