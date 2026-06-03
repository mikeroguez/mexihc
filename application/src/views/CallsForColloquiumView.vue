<script>
import TheHeader from '@/components/Header.vue'
import Tr from '@/i18n/translation'
import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader
  },
  setup() {
    const { locale } = useI18n()
    const Component = shallowRef(null)

    const loadComponents = async (newLocale) => {
      Component.value = await getColloquiumForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getColloquiumForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Call-for-coloquium.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Call-for-coloquium.vue'))
        default:
          return null
      }
    }

    return { Tr, Component }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t('calls.cgc') }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-lg-8">
          <template v-if="Component">
            <component :is="Component" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
