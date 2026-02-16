<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

const { t } = useI18n()
</script>

<template>
  <main role="main">
    <router-link :to="{ hash: '#main-content' }" class="visually-hidden-focusable">
      {{ t('nav.skip_to_content') }}
    </router-link>
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
