<script setup lang="ts">
import { computed } from 'vue'
import UICheckbox from '@/components/ui/UICheckbox.vue'
import UIRadio from '@/components/ui/UIRadio.vue'
import { useI18n } from 'vue-i18n'

interface Props {
  modelValue: any,
  values?: any[],
  content: 'heading' | 'options',
  align?: 'left' | 'right',
  multiple?: boolean,
  localePrefix?: string
}

const { t } = useI18n()
const radioName = Math.random().toFixed(10).slice(2)
const emit = defineEmits(['update:modelValue', 'change'])
const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  multiple: false
})

const selectedText = computed(() => {
  if (!props.modelValue || !props.modelValue.length) {
    return t(`${props.localePrefix}.any`)
  }
  if (props.multiple) {
    if (props.modelValue.length > 1) {
      return `${props.modelValue.length} ${t('globals.selected')}`
    }
    return props.modelValue.map((i:any) => t(`${props.localePrefix}.${i}`)).join(', ')
  }
  return t(`${props.localePrefix}.${props.modelValue}`)
})

const onChange = (e: any) => {
  if (props.multiple) {
    console.log('props.modelValue', props.modelValue)
    let newValue
    if (e.target.checked) {
      newValue = props.modelValue ? [...props.modelValue, e.target.value] : props.modelValue
    } else {
      props.modelValue.filter((i: any) => i !== e.target.value)
    }
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', e.target.value)
  }
}
</script>

<template>
  <div :class="`filter-item -align-${props.align}`">
    <template v-if="props.content === 'heading'">
      <div class="item-heading flex a-center">
        <strong>
          <slot/>
        </strong>
        <span>:&nbsp;</span>
        <div class="value">{{ selectedText }}</div>
      </div>
    </template>

    <template v-if="props.content === 'options'">
      <div class="item-options flex a-start">
        <div class="options">
          <div v-for="option in props.values" :key="option.value">
            <template v-if="props.multiple === true">
              <UICheckbox
                  :value="option.value"
                  :checked="props.modelValue?.includes(option.value)"
                  @change="onChange"
              >
                {{ option.label }}
              </UICheckbox>
            </template>
            <template v-else>
              <UIRadio
                  :name="radioName"
                  :value="option.value"
                  :checked="props.modelValue === option.value"
                  @change="onChange"
              >
                {{ option.label }}
              </UIRadio>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.filter-item {
  strong {
    font-weight: $font-weight-semibold;
    white-space: nowrap;
  }

  .invisible {
    opacity: 0;
    visibility: hidden;
  }

  .value {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: $color-text-regular;
  }

  &.-align {
    &-left {
      text-align: left;
    }
    &-right {
      text-align: right;

      .item-heading {
        justify-content: flex-end;
      }

      .item-options {
        justify-content: flex-end;
      }

      .options {
        & > .ui-radio .inline-flex,
        & > .ui-checkbox .inline-flex {
          flex-direction: row-reverse;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.filter-item {
  &.-align {
    &-right {
      .options {
        .ui-radio .inline-flex,
        .ui-checkbox .inline-flex {
          flex-direction: row-reverse;

          .box {
            margin-right: 0;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>