<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

const { t } = useI18n()
const route = useRoute()
const appContentRef = ref(null)

let pendingAnchorUpdate = 0

const selectMainContentTarget = () => {
  const root = appContentRef.value
  if (!root) return null

  const target =
    root.querySelector('[data-skip-target="true"]') ||
    root.querySelector('section .container') ||
    root.querySelector('section') ||
    root.querySelector('.container') ||
    root.querySelector('article') ||
    root

  return target instanceof HTMLElement ? target : null
}

const ensureMainContentAnchor = () => {
  const root = appContentRef.value
  const target = selectMainContentTarget()
  if (!root || !target || !target.parentElement) return

  const previous = root.querySelector('[data-skip-target="true"]')
  if (previous && previous !== target) {
    previous.removeAttribute('data-skip-target')
  }
  target.setAttribute('data-skip-target', 'true')

  let anchor = document.getElementById('main-content')
  if (!anchor) {
    anchor = document.createElement('span')
    anchor.id = 'main-content'
    anchor.tabIndex = -1
    anchor.setAttribute('aria-hidden', 'true')
  }

  if (anchor.parentElement !== target.parentElement || anchor.nextSibling !== target) {
    target.parentElement.insertBefore(anchor, target)
  }
}

const scheduleMainContentAnchor = () => {
  if (pendingAnchorUpdate) {
    cancelAnimationFrame(pendingAnchorUpdate)
  }
  pendingAnchorUpdate = requestAnimationFrame(() => {
    ensureMainContentAnchor()
    pendingAnchorUpdate = 0
  })
}

const skipToMainContent = () => {
  ensureMainContentAnchor()

  const anchor = document.getElementById('main-content')
  const mainContent = anchor?.nextElementSibling
  if (!(mainContent instanceof HTMLElement)) return

  if (!mainContent.hasAttribute('tabindex')) {
    mainContent.setAttribute('tabindex', '-1')
  }

  mainContent.focus({ preventScroll: true })
  mainContent.scrollIntoView({ block: 'start', behavior: 'auto' })
}

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    scheduleMainContentAnchor()
  },
  { immediate: true }
)

onMounted(() => {
  scheduleMainContentAnchor()
})
</script>

<template>
  <main role="main">
    <a href="#main-content" class="visually-hidden-focusable" @click.prevent="skipToMainContent">
      {{ t('nav.skip_to_content') }}
    </a>

    <TheNavBar />

    <div id="app-content" ref="appContentRef">
      <RouterView />
    </div>
  </main>

  <TheFooter />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/style.css';
</style>
