<script setup lang="ts">
import IconCheck from '@/components/icons/CheckIcon.vue'

interface CheckboxProps {
  modelValue?: any,
  value?: any,
  name?: string,
  checked?: boolean
}

const emit = defineEmits(['change'])
const props = withDefaults(defineProps<CheckboxProps>(), {
  name: Math.random().toFixed(10).slice(2)
})

const onChange = (e: any) => {
  emit('change', e)
}
</script>

<template>
  <div :class="`ui-checkbox ${props.checked ? '-checked' : ''}`">
    <label class="inline-flex">
      <input
          type="checkbox"
          :name="props.name"
          :value="props.value"
          :checked="props.checked"
          @change="onChange"
      >

      <div class="inline-flex a-center">
        <div class="box flex center">
          <IconCheck/>
        </div>
        <div class="label">
          <slot/>
        </div>
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.ui-checkbox {
  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
  }

  .box {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border-radius: $border-radius-checkbox;
    background: $color-checkbox-bg;
    color: $color-text-white;
    cursor: pointer;
    transition: $transition-default;

    svg {
      transition: $transition-default;
      transform: scale(0);
    }
  }

  .label {
    cursor: pointer;
  }

  &.-checked {
    .box {
      background: $color-primary;

      svg {
        transform: scale(1);
      }
    }
  }

  &:not(.-checked) {
    label {
      &:hover {
        .box {
          background: lighten($color-checkbox-bg, 7%);
        }
      }
    }
  }
}
</style>
