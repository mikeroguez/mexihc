<script>
import { computed } from 'vue'
import Tr from '@/i18n/translation'
import { useI18n } from 'vue-i18n'
import Cookies from 'js-cookie';

export default {
    data() {
        const { locale } = useI18n()
        const description = computed(() => {
            // Determina la imagen en función del idioma
            switch (locale.value) {
                case 'en':
                    return 'We use cookies to optimize our site and analyze traffic with Google Analytics. Your data helps us to improve your experience on the site. By accepting, you allow this analysis. If you prefer not to be tracked, you can opt-out; this will place a cookie in your browser to exclude you from tracking on future visits.';
                case 'es':
                    return 'Utilizamos cookies para optimizar nuestro sitio y analizar el tráfico con Gooogle Analytics. Tus datos nos ayudan a mejorar tu experiencia en el sitio. Al aceptar, permites este análisis. Si prefieres no ser rastreado, puedes optar por no participar; esto colocará una cookie en tu navegador para excluirte del seguimiento en futuras visitas.';
                default:
                    return 'We use cookies to optimize our site and analyze traffic with Google Analytics. Your data helps us to improve your experience on the site. By accepting, you allow this analysis. If you prefer not to be tracked, you can opt-out; this will place a cookie in your browser to exclude you from tracking on future visits.'; // Un fallback por defecto
            }
        });

        return {
            preferences: [
                {
                    title: 'Google Analytics',
                    description: description,
                    items: [
                        { label: 'analytics_storage', value: 'ga_ans', isEnable: true },
                        { label: 'ad_storage', value: 'ga_ads' },
                        { label: 'ad_user_data', value: 'ga_adu' },
                        { label: 'ad_personalization', value: 'ga_adp' },
                    ],
                },
            ]
        };
    },
    setup() {
        return { Tr }
    },
    methods: {
        onAccept() {
            // Todas (activateogle Analytics)
            this.activateAnalytics()
        },
        onSavePreferences(preferences) {
            if (preferences.includes('ga_ans')) {
                /*
                *   analytics_storage: Se refiere a la gestión del consentimiento para el 
                *   almacenamiento de datos utilizados por activateogle Analytics u otros servicios de análisis de activateogle.
                */
                this.activateAnalyticsStorage()
            }

            if (preferences.includes('ga_ads')) {
                /*
                *   ad_storage: Se utiliza para gestionar el consentimiento relacionado 
                *   con el almacenamiento de datos para publicidad en los servicios de activateogle.
                */
                this.activateAddStorage()
            }

            if (preferences.includes('ga_adu')) {
                /*
                *   ad_user_data: Gestiona el consentimiento para la recopilación de datos del usuario 
                *   que activateogle podría usar para fines publicitarios.
                */
                this.activateAddUserData()
            }

            if (preferences.includes('ga_adp')) {
                /*
                *   ad_personalization: Controla el consentimiento para la personalización de anuncios a 
                *   través de activateogle, lo que incluye el uso de datos del usuario para dirigir anuncios basados en comportamientos anteriores.
                */
                this.activateAddPersonalization()
            }
        },
        activateAnalytics() {
            this.activateAnalyticsStorage()
        },
        activateAnalyticsStorage() {
            this.setConsent('analytics_storage', 'granted');
        },
        activateAddStorage() {
            this.setConsent('ad_storage', 'granted');
        },
        activateAddUserData() {
            this.setConsent('ad_user_data', 'granted');
        },
        activateAddPersonalization() {
            this.setConsent('ad_personalization', 'granted');
        },
        setConsent(type, consent) {
            // Actualizar el consentimiento con Google Tag Manager
            let consentUpdate = {};
            consentUpdate[type] = consent; // Asegura que la propiedad dinámica se establece correctamente
            gtag('consent', 'update', consentUpdate);

            // Establecer la cookie
            Cookies.set(`consent_${type}`, consent, { expires: 365 }); // Cookie válida por un año
            console.log(`Cookie de consentimiento para ${type} establecida a ${consent}`);
        },
    }
}
</script>

<template>
    <footer class="footer pt-3 mt-5">
        <hr class="horizontal dark mb-5">
        <div class="container">
            <div class=" row">
                <div class="col-md-3 mb-4 ms-auto">
                    <div>
                        <h2 class="text-gradient text-primary font-weight-bolder fs-5">{{ $t("nav.sitemap") }}</h2>
                    </div>
                    <div>
                        <ul class="d-flex flex-row ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://www.facebook.com/mexihc" target="_blank">
                                    <i class="fab fa-facebook text-lg opacity-8"></i>
                                    <span class="sr-only">{{ $t("nav.facebook") }}</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://twitter.com/mexihc" target="_blank">
                                    <i class="fab fa-twitter text-lg opacity-8"></i>
                                    <span class="sr-only">{{ $t("nav.twitter") }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.about_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'home', hash: '#about_mexihc' })"
                                    class="nav-link uline">
                                    {{ $t("nav.about") }}
                                </RouterLink>
                                <RouterLink :to="Tr.i18nRoute({ name: 'organizers' })" class="nav-link uline">
                                    {{ $t("nav.organizers") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link uline" :to="Tr.i18nRoute({ name: 'keynote-speakers' })">
                                    {{ $t("nav.keynotes") }}
                                </RouterLink>
                            </li>
                            <!--                            
                            <li class="nav-item">
                                <a class="nav-link uline" href="./video-archives">
                                    Video archives
                                </a>
                            </li>
                            -->
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.for_authors_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" class="nav-link uline">
                                    {{ $t("nav.cfp") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters' })" class="nav-link uline">
                                    {{ $t("nav.cpt") }}
                                </RouterLink>                                
                            </li>                            
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials' })"
                                    class="nav-link uline">
                                    {{ $t("nav.cwt") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" class="nav-link uline">
                                    {{ $t("nav.sdc") }}
                                </RouterLink>
                            </li> 
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" class="nav-link uline">
                                    {{ $t("nav.cgc") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'calls-for-accepted-workshops' })" class="nav-link uline">
                                    {{ $t("nav.workshop_calls") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })"
                                    class="nav-link uline">
                                    {{ $t("nav.accessibility_for_autors") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.for_attendees_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.getting_started") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'accepted-tutorials' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.tutorial") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.rates_and_registration") }}
                                </RouterLink>
                            </li>
                            <!--
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-FAQ' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.accessibility_faqs") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link uline" :to="Tr.i18nRoute({ name: 'accepted-papers' })">
                                    {{ $t("nav.accepted_papers") }}
                                </RouterLink>
                            </li>                            
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.schedule") }}
                                </RouterLink>
                            </li>
                            -->
                        </ul>
                    </div>
                </div>

                <div class="col-12 my-4">
                    <div class="text-center">
                        <p class="my-0 text-sm">
                            {{ $t("nav.copyright") }}
                        </p>
                        <p class="my-0  text-sm">
                            <a class="uline" href="CHANGELOG.md">v2024.0.0.20</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <vue-cookie-comply :preferences="preferences" @on-accept-all-cookies="onAccept"
            @on-save-cookie-preferences="onSavePreferences">

            <template v-slot:header>
                <h3 class="cookie-comply__header-title">
                    {{ $t("privacyConsent.header-title") }}
                </h3>
                <p class="cookie-comply__header-description">
                    {{ $t("privacyConsent.header-description") }}
                </p>
            </template>

            <template v-slot:modal-header>
                <h3>{{ $t("privacyConsent.modal-header") }}</h3>
            </template>

        </vue-cookie-comply>
    </footer>
</template>