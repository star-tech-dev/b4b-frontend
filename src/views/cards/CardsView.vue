<script setup lang="ts">
import { card as mockCard } from '@/mock/card'

import CardItem from '@/components/cards/CardItem.vue'

const cards = [mockCard()]
</script>

<template>
  <div class="page -cards">
    <div class="container -wide">
      <div class="list flex a-center wrap">
        <CardItem v-for="card in cards" size="large" :key="card.id" :data="card"/>
        <CardItem v-for="card in cards" size="default" :key="card.id" :data="card"/>
        <CardItem v-for="card in cards" size="small" :key="card.id" :data="card"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page.-cards {
  .list {
    & > * {
      margin-bottom: 20px;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>