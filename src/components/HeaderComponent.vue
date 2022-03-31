<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logoImage from '@/assets/svg/logo.svg'
</script>

<template>
  <header>
    <div class="container -responsive flex a-center j-between">
      <RouterLink to="/">
        <img :src="logoImage" alt="">
      </RouterLink>

      <nav class="flex a-center">
        <RouterLink to="/strategies">Стратегии</RouterLink>
        <RouterLink to="/cards">Карты</RouterLink>
        <RouterLink to="/weapon">Оружие</RouterLink>
        <RouterLink to="/cleaners">Чистильщики</RouterLink>
        <a class="active" href="#" @click.prevent>Войти</a>
      </nav>
    </div>
  </header>
</template>

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
