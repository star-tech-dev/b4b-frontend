<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, reactive } from 'vue'
import Swiper, { Navigation } from 'swiper'
import { cards as mockCards } from '@/mock/card'

import CardItem from '@/components/card/CardItem.vue'
import IconAngleSlider from '@/components/icons/AngleSliderIcon.vue'

import 'swiper/css'
import 'swiper/css/navigation'

const { t } = useI18n()
const state = reactive({
  swiper: null as any,
  selected: [],
  currentPage: 1,
  totalSlides: 1
})

const slidePrev = () => {
  (state.swiper as any).slidePrev()
}

const slideNext = () => {
  (state.swiper as any).slideNext()
}

onMounted(() => {
  state.swiper = new Swiper('.swiper', {
    modules: [Navigation],
    spaceBetween: 30,
    on: {
      init: swiper => {
        state.currentPage = swiper.activeIndex + 1
        state.totalSlides = swiper.slides.length
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
      <div class="container">
        <h3>{{ t('globals.selected_cards') }}</h3>
        <div class="list flex a-center j-between">
          <div v-for="i in 15" :key="i" class="mini-card">+</div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h3>{{ t('globals.all_cards') }}</h3>
        <div class="all-cards">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="grid">
                  <CardItem v-for="card in mockCards" :key="card.id" :data="card" />
                  <div v-for="i in 7" class="card-parent flex center" :key="i">
                    <CardItem />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="grid">
                  <div v-for="i in 10" class="card-parent flex center" :key="i">
                    <CardItem />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-prev" @click="slidePrev">
            <IconAngleSlider/>
          </div>
          <div class="swiper-button-next" @click="slideNext">
            <IconAngleSlider/>
          </div>

          <div class="pagination">{{ t('globals.page')}} {{ state.currentPage }} {{ t('globals.of')}} {{ state.totalSlides }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.card-picker {
  user-select: none;

  section {
    h3 {
      margin-bottom: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 40px;
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
    position: relative;
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
    color: $color-text-regular;
    transition: $transition-default;
    transform: translate(0, -50%);

    &:hover {
      color: $color-text-white;
    }

    &:after {
      content: none;
    }
  }

  .swiper-button-prev {
    left: -50px;
    transform: translate(0, -50%) rotate(180deg);
  }

  .swiper-button-next {
    right: -50px;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
