<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

import ModalWrapper from '../ModalWrapper.vue'
import UIInput from '@/components/ui/UIInput.vue'
import UIButton from '@/components/ui/UIButton.vue'

const { t } = useI18n()
const state = reactive({
  username: '',
  password: ''
})
</script>

<template>
  <ModalWrapper id="auth">
    <template #header>
      {{ t('heading') }}
    </template>

    <div>
      <UIInput v-model="state.username" placeholder="Username" :autofocus="true">Username</UIInput>
      <UIInput v-model="state.password" type="password" placeholder="Password">Username</UIInput>
      <UIButton type="submit">Log in</UIButton>
    </div>

    <template #footer></template>
  </ModalWrapper>
</template>

<i18n>
{
  "ru": {
    "heading": "Вход / регистрация"
  },
  "en": {
    "heading": "Sign in / Sign up"
  }
}
</i18n>
