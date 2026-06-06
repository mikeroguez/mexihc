<script>
import TheHeader from '@/components/Header.vue';
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader,
    InPageNavigationPanel
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

            <InPageNavigationPanel
              :links="[
                {
                  label: 'Roberto Martínez-Maldonado',
                  to: Tr.i18nRoute({ name: 'keynote-speakers', hash: '#roberto-martinez-maldonado' })
                },
                {
                  label: 'Gillian Hayes',
                  to: Tr.i18nRoute({ name: 'keynote-speakers', hash: '#gillian-hayes' })
                }
              ]"
            />

            <template v-if="contentComponent">
                <component :is="contentComponent" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
