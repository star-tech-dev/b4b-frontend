<script setup lang="ts">
import ModalController from '@/components/modals/ModalController.vue'
</script>

<template>
  <div class="layout -simple">
    <slot />
    <ModalController/>
  </div>
</template>

<style lang="scss" scoped>
.layout.-simple {
  min-height: 100vh;
}
</style>

<style lang="scss">
.layout.-simple {
  .page {
    height: 100%;
    min-height: 100vh;
  }
}
</style>
