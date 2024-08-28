<script>
import TheHeader from '@/components/Header.vue';

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader
  },
  setup() {
  
    const { locale } = useI18n()
    const contentComponent = shallowRef(null)

    const loadComponents = async (newLocale) => {
      contentComponent.value = await getContentForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getContentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Speakers.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Speakers.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Speakers.vue'))
        default:
          return null
      }
    }

    return {
      contentComponent,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("nav.keynotes") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">

            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#saiph-savage'})" class="uline">
                      Saiph Savage
                    </RouterLink>
                  </div>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#jesus-favela'})" class="uline">
                      Jesús Favela
                    </RouterLink>
                  </div>
                </div>
              </li>
            </ol>

            <template v-if="contentComponent">
                <component :is="contentComponent" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>