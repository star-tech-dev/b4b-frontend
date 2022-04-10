<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import vClickOutside from '@/directives/v-click-outside'

import IconAngle from '@/components/icons/AngleIcon.vue'
import UICheckbox from '@/components/ui/UICheckbox.vue'
import UIRadio from '@/components/ui/UIRadio.vue'

interface Props {
  modelValue?: any,
  value?: any,

  values?: any[],
  multiple?: boolean,
  disabled?: boolean,
  readonly?: boolean,
  theme?: 'default' | 'dark'
}

const { t } = useI18n()
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  values: () => [],
  multiple: false,
  readonly: false,
  theme: 'default'
})

const normalizeValues = () => {
  return props.values.map(value => ({
    label: value.label || value,
    value: value.value || value
  }))
}

const state = reactive({
  show: false,
  localValue: props.modelValue,
  localValues: normalizeValues(),
  valueState: {} as any,
  groupName: Math.random().toFixed(10).slice(2)
})

const parentClassList = computed(() => `ui-dropdown -theme-${props.theme} ${state.show ? '-opened' : ''} ${props.disabled ? 'disabled' : ''} ${props.readonly ? '-readonly' : ''}`)

props.values.forEach(value => {
  props.multiple
      ? state.valueState[value.value] = props.modelValue.includes(value.value)
      : state.valueState[value.value] = props.modelValue === value.value
})

const valueText = computed(() => {
  if (props.value) {
    return props.value
  }
  if (!props.modelValue?.length) {
    return t('globals.not_selected')
  }
  if (props.multiple) {
    const normalizedValues = props.modelValue.map((i: any) => {
      const localValue = state.localValues.find(j => j.value === i)
      return localValue?.label || localValue?.value || localValue
    })
    if (normalizedValues.length > 2) {
      return `${normalizedValues.length} ${t('globals.selected')}`
    }
    return normalizedValues.join(', ')
  }
  const localValue = state.localValues.find(j => j.value === props.modelValue)
  return localValue?.label || localValue?.value || localValue
})

const toggle = () => {
  if (props.readonly) {
    close()
    return
  }
  state.show = !state.show
}

const close = () => {
  state.show = false
}

const onValueChange = (e: any) => {
  if (props.multiple) {
    state.valueState[e.target.value] = e.target.checked
    const newValue = Object.keys(state.valueState).reduce<any[]>((prevArr, key) => {
      return state.valueState[key] ? [...prevArr, key] : prevArr
    }, [])
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', e.target.value)
    state.localValue = e.target.value
    // close()
  }
}
</script>

<template>
  <div :class="parentClassList" v-click-outside="close">
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
      <div v-for="value in state.localValues" :key="value">
        <template v-if="props.multiple">
          <UICheckbox
              :name="state.groupName"
              :value="value.value"
              :checked="state.valueState[value.value]"
              @change="onValueChange"
          >
            {{ value.label }}
          </UICheckbox>
        </template>
        <template v-else>
          <UIRadio
              :name="state.groupName"
              :value="value.value"
              :checked="props.modelValue === value.value"
              @change="onValueChange"
          >
            {{ value.label }}
          </UIRadio>
<!--          <label>-->
<!--            <input type="radio" :name="state.groupName" :value="value.value" :checked="props.modelValue === value.value" @change="onValueChange">-->
<!--            <span>{{ value.label }}</span>-->
<!--          </label>-->
        </template>
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
    transition: $transition-dropdown;

    .label {
      margin-bottom: 4px;
      font-size: 12px;
      line-height: 14px;
      color: $color-text-dark;
    }

    .selected {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    width: 100%;
    padding: 14px 24px 16px;
    background: $color-bg-light;
    border-radius: 0 0 $border-radius-dropdown $border-radius-dropdown;
    border-top: 1px solid $color-bg-dark;
    box-shadow: $box-shadow-dropdown;
    user-select: none;
  }

  &.-opened {
    .select {
      z-index: 11;
      background: $color-bg-light;
      border-radius: $border-radius-dropdown $border-radius-dropdown 0 0;

      .angle {
        opacity: 1;
        visibility: visible;
        transform: rotate(270deg);
      }
    }
  }

  &.-theme {
    &-default {
      .select {
        background: $color-bg-light;
      }
      .options {
        box-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.15);
        border-top: 1px solid $color-bg;
      }
    }

    &-dark {
      //
    }
  }

  &.-readonly {
    //pointer-events: none;

    .selected {
      white-space: normal;
    }
  }

  &:not(.-readonly) {
    .select {
      cursor: pointer;
    }
  }

  &:not(.-readonly):not(.-opened) {
    .select {
      &:hover {
        //background: $color-bg-light;

        .angle {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  &.disabled {
    .select {
      .selected {
        color: $color-text-dark;
      }
    }
  }
}
</style>
