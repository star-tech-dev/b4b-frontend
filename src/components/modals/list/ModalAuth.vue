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

const onSubmit = () => {
  console.log('onSubmit', {
    username: state.username,
    password: state.password
  })
}
</script>

<template>
  <ModalWrapper id="auth">
    <template #header>
      {{ t('heading') }}
    </template>

    <form @submit.prevent="onSubmit">
      <UIInput
          v-model="state.username"
          :placeholder="t('username')"
          :autofocus="true"
      >
        {{ t('username') }}
      </UIInput>
      <UIInput
          v-model="state.password"
          type="password"
          :placeholder="t('password')"
      >
        {{ t('password') }}
      </UIInput>

      <div class="form-bottom flex column center">
        <UIButton type="submit" full-width>{{ t('log_in') }}</UIButton>
        <div class="bottom-link">
          <a href="#" @click.prevent>{{ t('create_one') }}</a>
        </div>
      </div>
    </form>

    <template #footer></template>
  </ModalWrapper>
</template>

<i18n>
{
  "ru": {
    "heading": "Вход / регистрация",
    "username": "Логин",
    "password": "Пароль",
    "log_in": "Войти",
    "create_one": "Создать новый аккаунт"
  },
  "en": {
    "heading": "Sign in / Sign up",
    "username": "Username",
    "password": "Password",
    "log_in": "Log in",
    "create_one": "Create new account"
  }
}
</i18n>

<style lang="scss" scoped>
form {
  .form-bottom {
    margin-top: 20px;
  }

  .bottom-link {
    margin-top: 10px;
  }
}
</style>