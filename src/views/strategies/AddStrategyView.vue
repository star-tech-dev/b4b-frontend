<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import config from '@/config'

import BreadCrumbs from '@/components/BreadCrumbs.vue'
import UIButton from '@/components/ui/UIButton.vue'
import UIDropdown from '@/components/ui/UIDropdown.vue'
import BuffDebuffCharts from '@/components/strategy/BuffDebuffCharts.vue'
import CardPicker from '@/components/cards/CardPicker.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconBookmark from '@/components/icons/IconBookmark.vue'
import IconCheckRound from '@/components/icons/IconCheckRound.vue'

const { t } = useI18n()
const state = reactive({
  role: null,
  cleaners: [],
  difficulty: ['any'],
  weapon: {
    recommended: [],
    unwanted: []
  }
})

const roleValues = () => config.gameRoles.map(value => ({
  label: t(`game.roles.${value}`),
  value
}))
const subroleValues = () => config.gameSubroles.map(value => ({
  label: t(`game.subroles.${value}`),
  value
}))
const difficultyValues = () => {
  const gameDifficulties = config.gameDifficulties.map(value => ({
    label: t(`game.difficulty.${value}`),
    value
  }))
  return [...gameDifficulties, {
    label: t('game.difficulty.any'),
    value: 'any'
  }]
}
const cleanerValues = () => config.cleaners.map(value => ({
  label: t(`cleaners.${value}`),
  value
}))
const weaponValues = () => config.weaponAmmos.map(value => ({
  label: t(`game.weapon.${value}`),
  value
}))
const recommendedWeaponValues = () => {
  return [...weaponValues(), {
    label: t('game.weapon.any'),
    value: 'any'
  }]
}

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
            <input :placeholder="t('pages.strategy.strategy_name')" autofocus/>
          </div>

          <div class="dropdowns">
            <UIDropdown
                v-model="state.role"
                :values="roleValues()"
                theme="dark"
            >
              {{ t('globals.role') }}
            </UIDropdown>
            <UIDropdown
                v-model="state.subroles"
                :values="subroleValues()"
                theme="dark"
                :disabled="!state.role"
                multiple
            >
              {{ t('globals.subroles') }}
            </UIDropdown>
            <UIDropdown
                v-model="state.cleaners"
                :values="cleanerValues()"
                theme="dark"
                multiple
            >
              {{ t('globals.cleaners') }}
            </UIDropdown>
            <UIDropdown
                v-model="state.difficulty"
                :values="difficultyValues()"
                theme="dark"
                multiple
            >
              {{ t('globals.difficulty') }}
            </UIDropdown>
          </div>

          <div class="actions">
            <UIButton theme="ghost" full-width @click="clear">
              <IconTrash/>
              <span>{{ t('pages.strategy.clear') }}</span>
            </UIButton>
            <UIButton theme="ghost" full-width @click="save">
              <IconBookmark/>
              <span>{{ t('pages.strategy.save') }}</span>
            </UIButton>
            <UIButton theme="ghost-primary" full-width @click="save">
              <IconCheckRound/>
              <span>{{ t('pages.strategy.publish') }}</span>
            </UIButton>
          </div>
        </div>

        <div class="block -chart grow">
          <BuffDebuffCharts />
        </div>
      </section>

      <section>
        <h3>{{ t('pages.strategy.weapon_strategy') }}</h3>
        <div class="weapon-dropdowns flex a-center">
          <UIDropdown
              v-model="state.weapon.recommended"
              :values="recommendedWeaponValues()"
              multiple
          >
            {{ t('pages.strategy.recommended_weapon') }}
          </UIDropdown>
          <UIDropdown
              v-model="state.weapon.unwanted"
              :values="weaponValues()"
              multiple
          >
            {{ t('pages.strategy.unwanted_weapon') }}
          </UIDropdown>
        </div>
      </section>
    </div>

    <CardPicker />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/extends";

.page.-add-strategy {
  section {
    margin: 60px auto;

    & > h3 {
      margin-bottom: 20px;
    }
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

  .weapon-dropdowns {
    & > * {
      width: 300px;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
