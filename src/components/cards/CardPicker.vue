<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, reactive } from 'vue'
import Swiper, { Navigation } from 'swiper'

import CardItem from '@/components/cards/CardItem.vue'
import IconAngleSlider from '@/components/icons/AngleSliderIcon.vue'

import 'swiper/css'
import 'swiper/css/navigation'

const { t } = useI18n()
const state = reactive({
  selected: [],
  currentPage: 1,
  totalSlides: 16
})

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    spaceBetween: 0,
    on: {
      init: swiper => {
        state.currentPage = swiper.activeIndex + 1
      },
      realIndexChange: swiper => {
        state.currentPage = swiper.activeIndex + 1
      }
    }
  })
})
</script>

<template>
  <div class="card-picker">
    <section class="selected-cards">
      <h3>{{ t('pages.strategy.selected_cards') }}</h3>
      <div class="list flex a-center j-between">
        <div v-for="i in 15" :key="i" class="mini-card">+</div>
      </div>
    </section>

    <section>
      <h3>Все карты</h3>
      <div class="all-cards swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="grid">
              <CardItem v-for="i in 10" :key="i" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="grid">
              <CardItem v-for="i in 10" :key="i" />
            </div>
          </div>
        </div>

        <div class="swiper-button-prev">
          <IconAngleSlider/>
        </div>
        <div class="swiper-button-next">
          <IconAngleSlider/>
        </div>

        <div>Страница {{ state.currentPage }} из {{ state.totalSlides }}</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.card-picker {
  section {
    & > h3 {
      margin-bottom: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }

  .selected-cards {
    .list {
      width: 100%;
    }
  }

  .mini-card {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 61px;
    height: 89px;
    background: $color-bg-light;
    border-radius: $border-radius-small-card;
  }

  .all-cards {
    //
  }

  .swiper-slide {
    .grid {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    &:after {
      content: none;
    }
  }

  .swiper-button-prev {
    transform: rotate(180deg);
  }
}
</style>