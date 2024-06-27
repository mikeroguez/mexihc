<script>
    import TheHeader from '@/components/Header.vue';
    import Tr from '@/i18n/translation'

    import { shallowRef, watch, defineAsyncComponent } from 'vue'
    import { useI18n } from 'vue-i18n'

    export default {
        components: {
            TheHeader,
        },
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
                    return defineAsyncComponent(() => import('@/components/locales/en/Accepted-workshops.vue'))
                    case 'es':
                    return defineAsyncComponent(() => import('@/components/locales/es/Accepted-workshops.vue'))
                    case 'pt':
                    return defineAsyncComponent(() => import('@/components/locales/pt/Accepted-workshops.vue'))
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
    <TheHeader>
        <template #page-name>
            {{ $t("nav.workshop_title") }}
        </template>
    </TheHeader>

    <section class="">
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8">
                    <template v-if="currentComponent">
                        <component :is="currentComponent" />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>