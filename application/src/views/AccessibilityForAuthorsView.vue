<script>
import TheHeader from '@/components/Header.vue'
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'
import { computed, defineAsyncComponent, shallowRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader,
    InPageNavigationPanel,
  },
  setup() {
    const { locale, t } = useI18n()
    const Component = shallowRef(null)

    const links = computed(() => [
      { label: t('accessibility.language_recommendations'), to: '#language-recommendations' },
      { label: t('accessibility.accessible_document'), to: '#accessible-document-author-recommendations' },
      { label: t('accessibility.accessible_slide'), to: '#accessible-slide-author-recommendations' },
      { label: t('accessibility.accessible_video'), to: '#accessible-video-author-recommendations' },
    ])

    watch(locale, (newLocale) => {
      Component.value = newLocale === 'es'
        ? defineAsyncComponent(() => import('@/components/locales/es/Accessibility-authors.vue'))
        : defineAsyncComponent(() => import('@/components/locales/en/Accessibility-authors.vue'))
    }, { immediate: true })

    return { Component, links, Tr }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t('accessibility.title') }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-lg-10">
          <InPageNavigationPanel :links="links" />
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <component :is="Component" v-if="Component" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
