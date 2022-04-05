<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import UICheckbox from '@/components/ui/UICheckbox.vue'
import UIRadio from '@/components/ui/UIRadio.vue'

interface Props {
  modelValue: any,
  values: any[],
  multiple?: boolean,
  showValues?: boolean,
  emptyText?: string
}

const { t } = useI18n()
const props = withDefaults(defineProps<Props>(), {
  multiple: false,
  showValues: true
})
const emit = defineEmits(['update:modelValue', 'toggle'])
const localValue = ref(props.modelValue)
const parent = ref(null)

const selectedText = computed(() => {
  if (!props.modelValue || !props.modelValue.length) {
    return props.emptyText || t('globals.any')
  }

  if (props.multiple) {
    if (props.modelValue.length > 1) {
      return `${props.modelValue.length} ${t('globals.selected')}`
    }
    const labels = props.modelValue.map((i: any) => props.values.find(j => j.value === i).label)
    return labels.join(', ')
  }

  return props.values.find(i => i.value === props.modelValue).label
})

const onChange = (e: any) => {
  if (props.multiple) {
    const value = e.target.checked
        ? [...props.modelValue, e.target.value]
        : props.modelValue.filter((i: any) => i !== e.target.value)
    emit('update:modelValue', value)
  } else {
    emit('update:modelValue', e.target.value)
  }
}

onMounted(() => {
  const allHiddenValues = (parent.value as any).querySelector('.all-hidden-values')
  const selectedTextRef = (parent.value as any).querySelector('.selected-text')
  if (allHiddenValues && selectedTextRef) {
    const theWidestOptionWidth = (allHiddenValues as any).offsetWidth;
    (selectedTextRef as any).style.minWidth = `${theWidestOptionWidth}px`
  }
})
</script>

<template>
  <div :class="`filter-item ${props.showValues ? '-opened' : ''}`" ref="parent">
    <div class="heading flex a-center" @click="emit('toggle')">
      <strong>
        <slot/>
      </strong>
      <span>: &nbsp;</span>
      <span class="selected-text">{{ selectedText }}</span>
      <div class="all-hidden-values flex column" ref="allHiddenValues">
        <span v-for="value in props.values" :key="value.value">{{ value.label }}</span>
      </div>
    </div>

    <template v-if="props.showValues">
      <div class="options">
        <div v-for="value in props.values" :key="value">
          <template v-if="props.multiple">
            <UICheckbox
                v-model="localValue"
                :value="value.value"
                :checked="props.modelValue.includes(value.value)"
                @change="onChange"
            >
              {{ value.label }}
            </UICheckbox>
          </template>

          <template v-else>
            <UIRadio
                v-model="localValue"
                :value="value.value"
                :checked="props.modelValue === value.value"
                @change="onChange"
            >
              {{ value.label }}
            </UIRadio>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.filter-item {
  flex-shrink: 1;
  flex-grow: 0;
  min-width: 180px;

  .heading {
    padding: 30px 30px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: $transition-default;
    border-color: $color-bg;
  }

  strong {
    font-weight: $font-weight-semibold;
    transition: $transition-default;
  }

  .options {
    padding: 20px 30px 30px;
  }

  .all-hidden-values {
    position: absolute;
    z-index: -1;
    height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
  }

  &.-opened {
    .heading {
      border-bottom: 1px solid $color-bg;

      strong {
        color: $color-text-white;
      }
    }
  }
}
</style>
