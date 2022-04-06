<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { strategy } from '@/mock/strategies'
import { Strategy } from '@/models/strategy'

import BuffDebuffCharts from '@/components/strategy/BuffDebuffCharts.vue'
import UIButton from '@/components/ui/UIButton.vue'
import UIDropdown from '@/components/ui/UIDropdown.vue'
import IconHeart from '@/components/icons/HeartIcon.vue'
import IconBookmark from '@/components/icons/BookmarkIcon.vue'

const { t } = useI18n()
const state = reactive({
  data: new Strategy()
})

const rolesValue = () => state.data.roles.map(i => t(`game.roles.${i}`)).join(', ')
const subrolesValue = () => state.data.subroles.map(i => t(`game.subroles.${i}`)).join(', ')
const cleanersValue = () => state.data.cleaners.map(i => t(`cleaners.${i}`)).join(', ')
const difficultyValue = () => state.data.difficulty.map(i => t(`game.difficulty.${i}`)).join(', ')

const toggleFavorites = () => {
  console.log('toggleFavorites')
}

const toggleLike = () => {
  console.log('toggleLike')
}

onMounted(() => {
  state.data = strategy()
})
</script>

<template>
  <div class="page -strategy">
    <template v-if="state.data">
      <div class="container">
        <section class="flex">
          <div class="block -primary flex column j-between">
            <div>
              <div class="title">
                <input :value="state.data.name" :placeholder="t('pages.strategy.strategy_name')" readonly/>
              </div>

              <div class="dropdowns">
                <UIDropdown
                    :value="rolesValue()"
                    theme="dark"
                    :readonly="true"
                >
                  {{ t('globals.role') }}
                </UIDropdown>
                <UIDropdown
                    :value="subrolesValue()"
                    theme="dark"
                    :readonly="true"
                >
                  {{ t('globals.subroles') }}
                </UIDropdown>
                <UIDropdown
                    :value="cleanersValue()"
                    theme="dark"
                    :readonly="true"
                >
                  {{ t('globals.cleaners') }}
                </UIDropdown>
                <UIDropdown
                    :value="difficultyValue()"
                    theme="dark"
                    :readonly="true"
                >
                  {{ t('globals.difficulty') }}
                </UIDropdown>
              </div>
            </div>

            <div class="actions">
              <UIButton theme="ghost" full-width @click="toggleFavorites">
                <IconBookmark/>
                <span>{{ t('globals.to_favorites') }}</span>
              </UIButton>
              <LikerButton></LikerButton>
            </div>
          </div>

          <div class="block -chart grow">
            <BuffDebuffCharts />
          </div>
        </section>
      </div>
    </template>

    <template v-else>
      <div>loading...</div>
    </template>
  </div>
</template>

<style src="./_strategies.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.page.-strategy {
  //
}
</style>