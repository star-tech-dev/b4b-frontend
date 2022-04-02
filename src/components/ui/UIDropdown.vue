<script setup lang="ts">
import { reactive } from 'vue'
import vClickOutside from '@/directives/v-click-outside'

const state = reactive({
  show: false
})

const toggle = () => {
  state.show = !state.show
}

const close = () => {
  state.show = false
}
</script>

<template>
  <div class="ui-dropdown" v-click-outside="close">
    <div class="select" @click="toggle">
      <div class="label">
        <slot />
      </div>

      <div class="selected">
        selected
      </div>
    </div>

    <div v-if="state.show" class="options">
      options
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.ui-dropdown {
  .select {
    padding: 14px 24px 16px;
    background: $color-bg;
    border-radius: $border-radius-dropdown;

    .label {
      margin-bottom: 2px;
      font-size: 11px;
      line-height: 14px;
      color: $color-text-dark;
    }

    .selected {
      color: $color-text-white;
    }
  }

  .options {
    //
  }
}
</style>
