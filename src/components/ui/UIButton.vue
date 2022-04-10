<script setup lang="ts">
import { withDefaults } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  to?: string,
  href?: string,
  theme?: 'default' | 'dark' | 'ghost' | 'ghost-primary',
  type?: string,
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default'
})

const tag = props && props.to ? RouterLink : props && props.href ? 'a' : 'button'

const buttonProps = tag === 'button'
    ? { type: props.type }
    : {} as any
</script>

<template>
  <component
    :is="tag"
    :to="props.to"
    v-bind="buttonProps"
    :class="`ui-button -theme-${props.theme} ${props.fullWidth ? '-full-width' : ''}`"
  >
    <span class="content flex center">
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.ui-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-decoration: none;
  padding: 20px 40px;
  font-size: 16px;
  line-height: 19px;
  font-family: $font-family-default;
  border-radius: $border-radius-button;
  cursor: pointer;
  transition: $transition-button;
  outline: none;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
  }

  &.-theme {
    &-default {
      background: $color-primary;
      color: $color-text-white;

      &:hover {
        background: $color-primary-highlight;
      }
    }

    &-dark {
      background: $color-page-bg;
      color: $color-primary;

      &:hover {
        background: $color-bg-light;
      }
    }

    &-ghost {
      background: transparent;
      color: $color-text-dark;

      &:hover {
        background: $color-bg-light;
        color: $color-text-white;
      }
    }

    &-ghost-primary {
      background: transparent;
      color: $color-primary;

      &:hover {
        background: $color-bg-dark;
        color: $color-primary;
      }
    }
  }

  &.-full-width {
    width: 100%;
  }
}
</style>

<style lang="scss">
.ui-button {
  .content {
    svg {
      margin-right: 15px;
      min-width: 26px;
    }
  }
}
</style>
