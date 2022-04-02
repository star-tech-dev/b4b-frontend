<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import config from '@/config'

import BreadCrumbs from '@/components/BreadCrumbs.vue'
import UIButton from '@/components/ui/UIButton.vue'
import UIDropdown from '@/components/ui/UIDropdown.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconBookmark from '@/components/icons/IconBookmark.vue'
import IconCheckRound from '@/components/icons/IconCheckRound.vue'

const { t } = useI18n()
const state = reactive({
  role: null,
  cleaners: [],
  difficulty: []
})

const clear = () => {
  console.log('clear')
}

const save = () => {
  console.log('save')
}
</script>

<template>
  <div class="page -add-strategy">
    <div class="container">
      <BreadCrumbs/>

      <section class="flex">
        <div class="block -primary">
          <div class="title">
            <input :placeholder="t('general.strategy_name')" autofocus/>
          </div>

          <div class="dropdowns">
            <UIDropdown
                v-model="state.role"
                :values="config.gameRoles"
            >
              {{ t('general.role') }}
            </UIDropdown>
            <UIDropdown
                v-model="state.subroles"
                :values="config.gameSubroles"
            >
              {{ t('general.subroles') }}
            </UIDropdown>
            <UIDropdown
                v-model="state.cleaners"
                :values="config.cleaners"
                multiple
            >
              {{ t('general.cleaners') }}
            </UIDropdown>
            <UIDropdown
                v-model="state.difficulty"
                :values="config.gameDifficulties"
            >
              {{ t('general.difficulty') }}
            </UIDropdown>
          </div>

          <div class="actions">
            <UIButton theme="ghost" full-width @click="clear">
              <IconTrash/>
              <span>{{ t('general.clear') }}</span>
            </UIButton>
            <UIButton theme="ghost" full-width @click="save">
              <IconBookmark/>
              <span>{{ t('general.save') }}</span>
            </UIButton>
            <UIButton theme="ghost-primary" full-width @click="save">
              <IconCheckRound/>
              <span>{{ t('general.publish') }}</span>
            </UIButton>
          </div>
        </div>

        <div class="block -chart flex center grow">
          chart
        </div>
      </section>

      <section>
        <h3>Стратегия по оружию</h3>
        <div>d</div>
      </section>

      <section>
        <h3>Выбранные карты</h3>
        <div>d</div>
      </section>

      <section>
        <h3>Все карты</h3>
        <div>d</div>
      </section>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "general": {
      "strategy_name": "Название",
      "role": "Роль",
      "subroles": "Саброли",
      "cleaners": "Чистильщики",
      "difficulty": "Сложность",

      "clear": "Очистить",
      "save": "Сохранить",
      "publish": "Опубликовать"
    }
  },
  "en": {
    "general": {
      "strategy_name": "Strategy name",
      "role": "Role",
      "subroles": "Subroles",
      "cleaners": "Cleaners",
      "difficulty": "Difficulty",

      "clear": "Clear form",
      "save": "Save the strategy",
      "publish": "Publish the strategy"
    }
  }
}
</i18n>

<style lang="scss" scoped>
@import "src/assets/scss/extends";

.page.-add-strategy {
  section {
    margin: 60px auto;
  }

  .block {
    @extend %dark-block;

    &.-primary {
      width: 320px;

      .title {
        padding: 22px 40px 10px;

        input {
          background: transparent;
          border: none;
          padding: 10px 0 10px;
          font-family: $font-family-default;
          font-size: 22px;
          line-height: 26px;
          font-weight: $font-weight-bold;
          color: $color-text-white;
          outline: none;
        }
      }

      .dropdowns {
        padding: 0 14px;

        & > * {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }

      .actions {
        padding: 20px 16px;

        & > * {
          padding: 16px 24px;
          justify-content: flex-start;
          border-radius: $border-radius-dropdown;
        }
      }
    }

    &.-chart {
      margin-left: 40px;
    }
  }
}
</style>
