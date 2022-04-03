<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const i18n = useI18n()

const layout = computed(() => {
  return `layout-${router.currentRoute.value.meta.layout || 'default'}`
})

onMounted(() => {
  // Setting current locale value into html tag
  const html = document.querySelector('html')
  html && html.setAttribute('lang', i18n.locale.value || i18n.fallbackLocale.value)
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
