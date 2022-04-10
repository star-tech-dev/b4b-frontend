<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import UIButton from '@/components/ui/UIButton.vue'
import IconHeart from '@/components/icons/HeartIcon.vue'

interface Props {
  type: 'strategies' | 'cards' | 'weapon' | 'cleaners'
  target: string
}

const { t } = useI18n()
const props = withDefaults(defineProps<Props>(), {})

const toggle = () => {
  console.log('toggle')
}
</script>

<template>
  <UIButton theme="dark" full-width @click="toggle">
    <IconHeart/>
    <span>{{ t('actions.like') }}</span>
  </UIButton>
</template>
