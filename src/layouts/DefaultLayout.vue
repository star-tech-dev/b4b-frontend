<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="layout -default">
    <HeaderComponent />

    <main>
      <slot />
    </main>

    <FooterComponent />
  </div>
</template>

<style lang="scss">
.layout.-default {
  & > .page {
    margin-top: 80px;
    margin-bottom: 60px;
  }
}
</style>
