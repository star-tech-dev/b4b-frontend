<script setup lang="ts">
import logoImage from '@/assets/img/logo.svg'
</script>

<template>
  <footer>
    <div class="container -wide flex a-center j-between">
      <div>
        <div>
          <img :src="logoImage" alt="">
        </div>
        <div class="copyright">Back 4 Blood fan website @ Powered by STAR-tech, 2022</div>
      </div>

      <div class="flex a-start">
        <div class="column">
          <div class="column-title">Обратная связь</div>
          <a href="mailto:help@b4b.fan" target="_blank">help@b4b.fan</a>
        </div>

        <div class="column -align-right">
          <div class="column-title">Другие проекты</div>
          <a href="https://passwords.star-tech.dev/" target="_blank" rel="noreferrer">Password manager</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

footer {
  padding: 40px 0;

  .copyright {
    margin-top: 20px;
    font-size: 12px;
    line-height: 15px;
    color: $color-text-dark;
    font-weight: $font-weight-medium;
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
