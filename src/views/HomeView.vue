<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StrategyItem from '@/components/strategy/StrategyItem.vue'
import { default as strategyMock } from '@/mock/strategies'

import UIButton from '@/components/ui/UIButton.vue'
import sliderImage from '@/assets/img/slider_1.png'

const { t } = useI18n()
</script>

<template>
  <div class="page -home">
    <section class="first flex column center">
      <div class="container -wide flex a-center j-between">
        <div class="text-content">
          <h1 v-html="t('main_heading')"></h1>
          <div>{{ t('main_description') }}</div>
          <div class="buttons">
            <UIButton to="/strategies">{{ t('main_button') }}</UIButton>
            <UIButton theme="dark" to="/strategies/add">{{ t('secondary_button') }}</UIButton>
          </div>
        </div>

        <div class="image">
          <img :src="sliderImage" alt="">
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="flex a-center j-between">
          <h2 class="h1">{{ t('top_strategies_heading') }}</h2>
          <UIButton to="/strategies">{{ t('top_strategies_button') }}</UIButton>
        </div>

        <div class="flex column center">
          <div class="top-strategy-list">
            <StrategyItem :data="strategyMock" />
            <StrategyItem :data="strategyMock" />
            <StrategyItem :data="strategyMock" />
          </div>

          <div>
            <RouterLink to="/strategies">{{ t('top_strategies_see_all') }}</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<i18n>
{
  "ru": {
    "main_heading": "Каталог стратегий для&nbsp;Back 4&nbsp;Blood",
    "main_description": "Добро пожаловать на фан-сайт по игре Back 4 Blood. Здесь вы найдете самые популярные и эффективные стратегии для режима кампании а также сможете поделиться своими личными тактиками с другими пользователями.",
    "main_button": "Смотреть каталог",
    "secondary_button": "Добавить свою",

    "top_strategies_heading": "Топ-3 стратегии",
    "top_strategies_button": "Смотреть все",
    "top_strategies_see_all": "Смотреть все стратегии"
  },
  "en": {
    "main_heading": "Strategy catalog for&nbsp;Back 4&nbsp;Blood",
    "main_description": "Welcome to the Back 4 Blood fan website. You will find there the most popular and effective strategies for the campaign mode and will also be able to share your personal tactics with other players.",
    "main_button": "See catalog",
    "secondary_button": "Add another one",

    "top_strategies_heading": "Top 3 strategies",
    "top_strategies_button": "See all",
    "top_strategies_see_all": "See all strategies"
  }
}
</i18n>

<style lang="scss" scoped>
.page.-home {
  margin-top: 0;

  section {
    margin: 100px auto;

    &.first {
      min-height: 65vh;
      margin-top: 40px;

      h1 {
        font-size: 48px;
        line-height: 72px;
        margin-bottom: 25px;
      }

      .buttons {
        margin-top: 55px;
      }

      .container {
        & > * {
          flex-grow: 1;
          width: 50%;
        }
        & > *:last-child {
          margin-left: 100px;
        }
      }
    }
  }

  .top-strategy-list {
    margin: 70px auto 50px;

    & > * {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
