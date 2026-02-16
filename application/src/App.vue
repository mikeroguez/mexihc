<script setup>
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

const { t } = useI18n()

const focusMainContent = () => {
  requestAnimationFrame(() => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
    }
  })
}
</script>

<template>
  <main role="main">
    <a href="#main-content" class="visually-hidden-focusable" @click="focusMainContent">
      {{ t('nav.skip_to_content') }}
    </a>
    <TheNavBar />
    <div id="main-content" tabindex="-1">
      <RouterView />
    </div>
  </main>
  <theFooter />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/style.css';
</style>
