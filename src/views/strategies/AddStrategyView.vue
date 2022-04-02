<script setup lang="ts">
import { reactive } from 'vue'

import BreadCrumbs from '@/components/BreadCrumbs.vue'
import UIDropdown from '@/components/ui/UIDropdown.vue'

const state = reactive({
  role: null,
  cleaners: []
})
</script>

<template>
  <div class="page -add-strategy">
    <div class="container">
      <BreadCrumbs />

      <section class="flex">
        <div class="block -primary">
          <div class="title">
            <input placeholder="Deck title" />
          </div>

          <div class="dropdowns">
            <UIDropdown
                v-model="state.role"
                :values="[]"
            >
              Роль
            </UIDropdown>
            <UIDropdown
                v-model="state.subroles"
                :values="[]"
            >
              Саброли
            </UIDropdown>
            <UIDropdown
              v-model="state.cleaners"
              :values="['Doc', 'Mom']"
              multiple
            >
              Чистильщики
            </UIDropdown>
          </div>

          <div class="actions">
            <a href="#" @click.prevent>save</a>
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
        padding: 32px 40px 20px;
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
        padding: 40px;
      }
    }

    &.-chart {
      margin-left: 40px;
    }
  }
}
</style>
