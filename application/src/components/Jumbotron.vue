<script>
import { /*ref*/shallowRef, watch, defineAsyncComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

export default {
  setup() {
    const { locale } = useI18n()
    const currentComponent = shallowRef(null)

    const imageUrl = computed(() => {
      // Determina la imagen en función del idioma
      switch (locale.value) {
        case 'en':
          return 'assets/img/jumbotron-text-en.svg';
        case 'es':
          return 'assets/img/jumbotron-text-es.svg';
        default:
          return 'assets/img/jumbotron-text-en.svg'; // Un fallback por defecto
      }
    });

    const imageAlt = computed(() => {
      // Determina la imagen en función del idioma
      switch (locale.value) {
        case 'en':
          return 'MexIHC 2024. Tenth Mexican Internacional Conference on Human-Computer Interaction';
        case 'es':
          return 'MexIHC 2024. Décima Conferencia Internacional Mexicana sobre Interacción Humano-Computadora';
        default:
          return 'MexIHC 2024. Tenth Mexican Internacional Conference on Human-Computer Interaction'; // Un fallback por defecto
      }
    });

    const loadComponent = async (newLocale) => {
      currentComponent.value = await getComponentForLocale(newLocale)
    }

    watch(locale, loadComponent, { immediate: true })

    async function getComponentForLocale(locale) {
      switch (locale) {
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
	  Tr,
	  imageUrl,
	  imageAlt
    }
  }
}
</script>

<template>
		<!-- Jumbotron -->
		<header class="header-2">
			<div class="page-header section-height-100 relative"
				style="background-image: url('assets/img/banner.png')">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 z-index-2 border-radius-xl mx-auto pt-5 pb-4 mt-7 mb-4 blur shadow-blur">
							<div class="row">
								<div class="col-md-12 text-center">
									<h1 class="pt-3">
										<img :src="imageUrl" 
											:alt="imageAlt"
											style="position: relative; top: -2px;"
											class="img-fluid custom-img"	
										>
									</h1>
									<p class="mt-2">
										<strong>											
											Saltillo, Coahuila, México<br>
											{{ $t("jumbotron.date") }} <br>
											<img class="logos" src="/assets/img/logos/logos.svg" alt="Asociación Mexicana de Interacción Humano-Computadora, Universidad Autónoma de Choahuila">
										</strong>
									</p>
									<p class="lead pt-2">
										<RouterLink :to="Tr.i18nRoute({ name: 'getting-started'})" 
												class="btn btn-lg  bg-gradient-yellow  btn-round"
											>
											{{ $t("jumbotron.button") }}
										</RouterLink>
										<!--
										<template v-if="currentComponent">
											<component :is="currentComponent" />
										</template>
										-->
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- End Jumbotron -->
</template>