<script setup lang="ts">
import HeartIcon from '@/components/icons/HeartIcon.vue'
import HeartFilledIcon from '@/components/icons/HeartFilledIcon.vue'

interface Props {
  modelValue?: any,
  liked?: boolean
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits(['update:modelValue', 'like', 'dislike'])

const like = () => {
  emit('like', props.modelValue + 1)
}

const dislike = () => {
  emit('dislike', props.modelValue - 1)
}

const onClick = () => {
  props.liked
    ? dislike()
    : like()
}
</script>

<template>
  <div :class="`liker flex a-center ${props.liked ? '-liked' : ''}`" @click="onClick">
    <HeartFilledIcon v-if="props.liked" />
    <HeartIcon v-else />
    <div class="amount">{{ props.modelValue }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.liker {
  color: $color-text-white;
  cursor: pointer;

  .amount {
    margin-left: 8px;
    font-size: 14px;
    line-height: 18px;
    font-weight: $font-weight-medium;
    min-width: 10px;
  }

  &.-liked {
    svg {
      color: $color-warning;
    }
  }
}
</style>
