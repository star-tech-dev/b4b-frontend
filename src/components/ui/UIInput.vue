<script setup lang="ts">
import { computed, onMounted, ref, useSlots } from 'vue'
import { randomString } from '@/helpers/random'

interface Props {
  id?: string,
  type?: string,
  modelValue: any,
  placeholder?: string,
  autofocus?: boolean
}

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  autofocus: false
})
const fieldID = props.id || randomString()
const input = ref()
const slots = useSlots()

const isFilled = computed(() => !!props.modelValue.length)
const showPlaceholder = computed(() => !slots.default().length)

const onChange = (e: any) => {
  emit('update:modelValue', e.target.value)
}

onMounted(() => {
  if (props.autofocus) {
    (input.value as HTMLInputElement)?.focus()
  }
})
</script>

<template>
  <div :class="`ui-input ${isFilled ? '-filled' : ''}`">
    <input
        ref="input"
        :id="fieldID"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="showPlaceholder ? props.placeholder : ''"
        :autofocus="props.autofocus"
        @input="onChange"
        @change="onChange"
    >

    <label :for="fieldID">
      <slot>{{ props.placeholder }}</slot>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

%filled-label {
  top: 8px;
  left: 24px;
  font-size: 11px;
  line-height: 14px;
  color: $color-text-dark;
}

.ui-input {
  position: relative;

  label {
    position: absolute;
    top: 17px;
    left: 24px;
    z-index: 1;
    display: block;
    width: 100%;
    cursor: text;
    transition: $transition-default;
  }

  input {
    display: block;
    width: 100%;
    padding: 20px 24px;
    background: $color-bg-dark;
    color: $color-text-white;
    border-radius: $border-radius-field;
    border: none;
    outline: none;
    transition: $transition-default;

    &:focus {
      padding: 25px 24px 15px;

      & + label {
        @extend %filled-label;
      }
    }
  }

  &.-filled {
    input {
      padding: 25px 24px 15px;
    }
    label {
      @extend %filled-label;
    }
  }
}
</style>
