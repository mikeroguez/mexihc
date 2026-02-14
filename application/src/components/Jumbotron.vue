<script>
import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

export default {
  setup() {
    const { locale } = useI18n()
    const currentComponent = shallowRef(null)

    const loadComponent = async (newLocale) => {
      currentComponent.value = await getComponentForLocale(newLocale)
    }

    watch(locale, loadComponent, { immediate: true })

    async function getComponentForLocale(nextLocale) {
      switch (nextLocale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Message.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Message.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Message.vue'))
        default:
          return null
      }
    }

    return {
      currentComponent,
      Tr
    }
  }
}
</script>

<template>
  <header class="header-2">
    <div class="page-header section-height-100 relative mexihc-hero-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto pt-5 pb-4 mt-7 mb-4 mexihc-hero-card">
            <div class="row align-items-center g-4">
              <div class="col-md-4 text-center">
                <img
                  src="/assets/img/logos/mexihc2026.svg"
                  alt="Logotipo MexIHC 2026"
                  class="img-fluid mexihc-hero-logo"
                >
              </div>

              <div class="col-md-8 text-center text-md-start">
                <h1 class="pt-2 mexihc-hero-title">MexIHC 2026</h1>
                <p class="mexihc-hero-subtitle mb-2">{{ $t("jumbotron.conference") }}</p>
                <p class="mb-3">
                  <strong>
                    Ensenada, Baja California, México<br>
                    {{ $t("jumbotron.date") }}
                  </strong>
                </p>
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers'})" class="btn btn-lg bg-gradient-yellow btn-round">
                  {{ $t("jumbotron.button") }}
                </RouterLink>

                <template v-if="currentComponent">
                  <component :is="currentComponent" />
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
