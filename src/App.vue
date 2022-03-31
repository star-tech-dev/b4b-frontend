<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const layout = computed(() => {
  return `layout-${router.currentRoute.value.meta.layout || 'default'}`
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style lang="scss">
@import 'src/assets/scss/index.scss';

#app {
  //
}
</style>
