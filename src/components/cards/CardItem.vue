<script setup lang="ts">
import type { CardProps } from '@/models/card'
import { Card } from '@/models/card'
import mockCardImage from '@/assets/img/mock-card.png'

import IconReflex from '@/components/icons/card-classes/ReflexIcon.vue'

interface Props {
  data?: CardProps,
  size?: 'large' | 'default' | 'small'
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ({}),
  size: 'default'
})

const card = new Card(props.data)
</script>

<template>
  <div :class="`card -class-${card.class} -type-${card.type} -size-${props.size}`">
    <article class="flex column a-start j-between">
      <div class="corner"></div>
      <div class="class">
        <IconReflex></IconReflex>
      </div>

      <header>
        <div class="title">{{ card.name }}</div>
        <div class="type">{{ card.type }}</div>
      </header>

      <footer v-if="props.size !== 'small'">
        <div class="feature">feature</div>
        <div class="feature">feature</div>
        <div class="feature">feature</div>
      </footer>

      <div class="bg flex center">
        <img :src="mockCardImage" alt="">
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.card {
  flex-shrink: 0;
  width: 360px;
  height: 524px;
  overflow: hidden;

  article {
    position: relative;
    width: 100%;
    height: 100%;
    color: $color-text-regular;
    transform-origin: top left;
    overflow: hidden;
  }

  .corner {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(0%, -70%);
  }

  .class {
    position: absolute;
    top: 12px;
    right: 18px;
    z-index: 2;
  }

  header,
  footer {
    position: relative;
    z-index: 2;
  }

  .title {
    font-size: 22px;
    line-height: 30px;
    font-family: $font-family-secondary-narrow;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    color: $color-text-white;
  }

  .type {
    margin-top: 4px;
    text-transform: uppercase;
    font-weight: $font-weight-semibold;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  .feature {
    font-weight: $font-weight-medium;
  }

  &.-class {
    &-reflex {
      article {
        background: $color-card-reflex-bg;
      }

      .corner {
        background: $color-card-reflex-corner;
      }
    }
  }

  &.-size {
    &-large {
      border-radius: $border-radius-large-card;

      article {
        padding: 30px;
        font-size: 16px;
        line-height: 19px;
        border-radius: $border-radius-large-card;
      }

      footer {
        .feature {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }

    &-default {
      width: 180px;
      height: 262px;
      border-radius: $border-radius-default-card;

      article {
        padding: 15px;
        font-size: 8px;
        line-height: 10px;
        border-radius: $border-radius-default-card;
      }

      .class {
        top: 6px;
        right: 9px;

        svg {
          width: 20px;
          height: 27px;
        }
      }

      .corner {
        width: 40px;
        height: 40px;
      }

      .title {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: -0.4px;
      }

      footer {
        .feature {
          &:not(:last-child) {
            margin-bottom: 6px;
          }
        }
      }
    }

    &-small {
      width: 110px;
      height: 160px;
      border-radius: $border-radius-small-card;

      article {
        padding: 10px;
        font-size: 5px;
        line-height: 6px;
        border-radius: $border-radius-small-card;
      }

      .class {
        top: 4px;
        right: 6px;

        svg {
          width: 12px;
          height: 17px;
        }
      }

      .title {
        font-size: 7px;
        line-height: 9px;
        letter-spacing: -0.2px;
      }

      .type {
        margin-top: 3px;
      }

      .corner {
        width: 26px;
        height: 26px;
      }

      footer {
        .feature {
          &:not(:last-child) {
            margin-bottom: 4px;
          }
        }
      }
    }
  }
}
</style>