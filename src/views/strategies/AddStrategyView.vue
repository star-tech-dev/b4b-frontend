<script setup lang="ts">
//
</script>

<template>
  <div class="page -add-strategy">
    <div class="container">
      <section class="flex">
        <div class="block -primary">
          <div class="title">
            <div>Deck title</div>
          </div>
          <div>
            selects
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
