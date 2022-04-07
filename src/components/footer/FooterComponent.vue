<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import logoImage from '@/assets/img/logo.svg'

const { t } = useI18n()
</script>

<template>
  <footer>
    <div class="container -wide flex a-center j-between">
      <div>
        <div>
          <img :src="logoImage" alt="">
        </div>
        <div class="copyright">
          <span v-html="t('copyright')"></span>
          <span>&nbsp;</span>
          <a href="https://star-tech.dev" target="_blank" rel="noreferrer">STAR-tech</a>
          <span>, 2022</span>
        </div>
      </div>

      <div class="flex a-start">
        <div class="column -align-right">
          <div class="column-title">{{ t('feedback.title') }}</div>
          <a href="mailto:help@b4b.fan" target="_blank">help@b4b.fan</a>
        </div>

        <div class="column -align-right">
          <div class="column-title">{{ t('others.title') }}</div>
          <a href="https://passwords.star-tech.dev/" target="_blank" rel="noreferrer">{{ t('others.password_manager') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<i18n>
{
  "ru": {
    "copyright": "Back 4 Blood fan website &copy; Powered by",
    "feedback": {
      "title": "Обратная связь"
    },
    "others": {
      "title": "Другие проекты",
      "password_manager": "Менеджер паролей"
    }
  },
  "en": {
    "copyright": "Back 4 Blood fan website &copy; Powered by",
    "feedback": {
      "title": "Feedback"
    },
    "others": {
      "title": "Other projects",
      "password_manager": "Password manager"
    }
  }
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

footer {
  margin-top: 100px;
  padding: 40px 0;

  .copyright {
    margin-top: 20px;
    font-size: 12px;
    line-height: 15px;
    color: $color-text-dark;
    font-weight: $font-weight-medium;

    a {
      color: inherit;
      text-decoration: underline;

      &:hover {
        color: $color-primary;
        text-decoration: none;
      }
    }
  }

  .column {
    &:not(:last-child) {
      margin-right: 60px;
    }

    a {
      color: $color-text-white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &.-align-right {
      text-align: right;
    }
  }

  .column-title {
    margin-bottom: 20px;
    color: $color-text-dark;
  }
}
</style>
