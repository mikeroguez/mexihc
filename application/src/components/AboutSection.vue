<script>
import { /*ref*/shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import ConferenceMilestones from '@/components/ConferenceMilestones.vue'

export default {
  setup() {
    const { locale } = useI18n()
    const currentComponent = shallowRef(null)

    const loadComponent = async (newLocale) => {
      currentComponent.value = await getComponentForLocale(newLocale)
    }

    watch(locale, loadComponent, { immediate: true })

    async function getComponentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/About.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/About.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/About.vue'))
        default:
          return null
      }
    }

    return {
      currentComponent
    }
  },
  components: {
    ConferenceMilestones
  }
}
</script>

<template>
	<section class="">
		<div class="container">
			<div class="row">
				<div class="row justify-content-center my-3">
					<div class="col-lg-8">
						<!-- <h2 class="text-dark mb-0">Titulo Negro</h2> -->
						<h2 id="about_mexihc" class="text-primary text-gradient text-center">{{ $t("about.about_title") }}</h2>
						<p>
							<template v-if="currentComponent">
                            	<component :is="currentComponent" />
                        	</template>  
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
					<div class="row justify-content-center my-3">
						<div class="col-lg-8">
							<ConferenceMilestones />
						</div>
					</div>
			</div>
		</div>
	</section>
</template>
