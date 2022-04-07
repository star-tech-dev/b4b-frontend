<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import UIButton from '@/components/ui/UIButton.vue'
import IconHeart from '@/components/icons/HeartIcon.vue'

const { t } = useI18n()

const toggleLike = () => {
  console.log('toggleLike')
}
</script>

<template>
  <UIButton theme="ghost-primary" full-width @click="toggleLike">
    <IconHeart/>
    <span>{{ t('globals.like') }}</span>
  </UIButton>
</template>
