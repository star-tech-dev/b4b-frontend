<script setup lang="ts">
import { withDefaults } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  to?: string,
  href?: string,
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default'
})

const tag = props && props.to ? RouterLink : props && props.href ? 'a' : 'button'

const buttonProps = tag === 'button'
    ? { type: props.type }
    : {}
</script>

<template>
  <component
    :is="tag"
    :to="props.to"
    v-bind="buttonProps"
    class="button"
  >
    <span class="content">
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: $color-primary;
  color: $color-text-white;
  text-decoration: none;
  padding: 20px 40px;
  font-size: 16px;
  line-height: 19px;
  font-family: $font-family-default;
  border-radius: $border-radius-button;
  cursor: pointer;
}
</style>
