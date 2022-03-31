<template>
  <div class="layout -simple">
    <slot />
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
