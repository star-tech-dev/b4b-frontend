<script setup lang="ts">
import UIButton from '@/components/ui/UIButton.vue'
</script>

<template>
  <div class="page -not-found flex center">
    <div class="container flex column center">
      <h1>404 Not found</h1>

      <div>
        <UIButton to="/">
          go to home
        </UIButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page.-not-found {
  h1 {
    margin-bottom: 20px;
  }
}
</style>
