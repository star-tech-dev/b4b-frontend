<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useStore } from 'vuex'

import IconCross from '@/components/icons/CrossIcon.vue'

interface Props {
  id: boolean
}

const props = withDefaults(defineProps<Props>(), {})
const store = useStore()
const slots = useSlots()

console.log('slots', slots, slots.footer())

const isShow = computed(() => store.getters['modals/isOpened'](props.id))

const close = () => store.dispatch('modals/close', props.id)
</script>

<template>
  <div class="modal-wrapper">
    <dialog v-if="isShow" class="modal" :open="isShow" :data-id="props.id">
      <a class="close flex center" href="#" @click.prevent="close">
        <IconCross/>
      </a>

      <template v-if="slots.header().length">
        <div class="header">
          <slot name="header"/>
        </div>
      </template>

      <div class="main">
        <slot/>
      </div>

      <template v-if="slots.footer().length">
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </template>
    </dialog>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
@import "src/assets/scss/extends";

.modal-wrapper {
  dialog {
    position: relative;
    z-index: 1;
    padding: 60px 80px;
    background: $color-bg-light;
    color: $color-text-regular;
    border: none;
    border-radius: $border-radius-default;
    box-shadow: $box-shadow-default;

    .close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 48px;
      height: 48px;
      color: $color-text-dark;
      text-decoration: none;

      &:hover {
        color: $color-text-white;
      }
    }

    .header {
      @extend %h3;
    }
  }
}
</style>
