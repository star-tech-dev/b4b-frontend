<script setup lang="ts">
import { computed, reactive } from 'vue'
import vClickOutside from '@/directives/v-click-outside'

import IconAngle from '@/components/icons/AngleIcon.vue'

interface Props {
  modelValue?: any,
  values?: any[],
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  values: () => [],
  multiple: false
})

const state = reactive({
  show: false
})

const valueText = computed(() => props.modelValue || 'select')

const toggle = () => {
  state.show = !state.show
}

const close = () => {
  state.show = false
}
</script>

<template>
  <div :class="`ui-dropdown ${state.show ? '-opened' : ''}`" v-click-outside="close">
    <div class="select" @click="toggle">
      <div class="label">
        <slot />
      </div>

      <div class="selected">
        {{ valueText }}
      </div>

      <IconAngle class="angle"/>
    </div>

    <div v-if="state.show" class="options">
      <div v-for="value in props.values" :key="value">
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {},
  "en": {}
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.ui-dropdown {
  position: relative;

  .select {
    position: relative;
    z-index: 1;
    padding: 14px 24px 16px;
    border-radius: $border-radius-dropdown;
    cursor: pointer;
    transition: $transition-dropdown;

    .label {
      margin-bottom: 2px;
      font-size: 11px;
      line-height: 14px;
      color: $color-text-dark;
    }

    .selected {
      color: $color-text-white;
    }

    .angle {
      position: absolute;
      top: 30px;
      right: 30px;
      z-index: 1;
      width: auto;
      height: 11px;
      transform: rotate(90deg);
      color: $color-text-dark;
      transition: $transition-default;
      opacity: 0;
      visibility: hidden;
    }

    &:hover {
      background: $color-bg;

      .angle {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    width: 100%;
    padding: 14px 24px 16px;
    background: $color-bg;
    border-radius: 0 0 $border-radius-dropdown $border-radius-dropdown;
    border-top: 1px solid $color-bg-dark;
    box-shadow: $box-shadow-dropdown;
  }

  &.-opened {
    .select {
      z-index: 11;
      background: $color-bg;
      border-radius: $border-radius-dropdown $border-radius-dropdown 0 0;

      .angle {
        opacity: 1;
        visibility: visible;
        transform: rotate(270deg);
      }
    }
  }
}
</style>
