<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import ModalAuth from './list/ModalAuth.vue'

const store = useStore()

const show = computed(() => store.state.modals.openedModals.length)

const onClick = () => {
  store.dispatch('modals/closeLast')
}
</script>

<template>
  <div v-if="show" class="modal-controller" @click.self="onClick">
    <ModalAuth/>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.modal-controller {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba($color-bg-dark, .65);
  padding: 40px 0 0;
  overflow: auto;
}
</style>

<style lang="scss">
body {
  &.-modal-opened {
    .layout {
      & > *:not(.modal-controller) {
        transition: filter .2s ease;
        filter: blur(3px);
      }
    }
  }
}
</style>