<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import logoImage from '@/assets/svg/logo.svg'

const { t } = useI18n()

console.log('t', useI18n())

const onLogin = () => {
  console.log('onLogin')
}
</script>

<template>
  <header>
    <div class="container -responsive flex a-center j-between">
      <RouterLink to="/">
        <img :src="logoImage" alt="">
      </RouterLink>

      <nav class="flex a-center">
        <RouterLink to="/strategies">{{ t('navigation.strategies') }}</RouterLink>
        <RouterLink to="/cards">{{ t('navigation.cards') }}</RouterLink>
        <RouterLink to="/weapon">{{ t('navigation.weapon') }}</RouterLink>
        <RouterLink to="/cleaners">{{ t('navigation.cleaners') }}</RouterLink>
        <a class="active" href="#" @click.prevent="onLogin">{{ t('nav.login') }}</a>
      </nav>
    </div>
  </header>
</template>

<i18n>
{
  "ru": {
    "nav": {
      "login": "Войти"
    }
  },
  "en": {
    "nav": {
      "login": "Log in"
    }
  }
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

header {
  padding: 20px 0;

  nav {
    & > * {
      display: inline-flex;
      padding: 10px 10px;
      color: $color-text-white;
      text-decoration: none;

      &:hover {
        color: $color-primary;
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
