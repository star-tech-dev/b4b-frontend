<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/locale/i18n'

const i18n = useI18n({
  useScope: 'global'
})
console.log('i18n', i18n.locale.value)

const onLocaleChange = (locale: any) => {
  console.log('onLocaleChange to', locale)
  setLocale(i18n, locale)
  // i18n.locale.value = locale
}

const currentLang = computed(() => i18n.locale.value)
</script>

<template>
  <footer>
    <div class="container -wide flex a-center j-between">
      <div>footer</div>
      <div>
        <div>lang: {{ currentLang }}</div>

        <div class="flex a-center" hidden>
          <div>
            <a href="#" @click.prevent="onLocaleChange('ru')">to ru</a>
          </div>
          <div>&nbsp;</div>
          <div>
            <a href="#" @click.prevent="onLocaleChange('en')">to en</a>
          </div>
        </div>

        <div>
          <select :value="i18n.locale.value" @change="(e) => onLocaleChange(e.target.value)">
            <option v-for="locale in i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
              {{ locale }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </footer>
</template>
