<script>
import { computed } from 'vue'
import Tr from '@/i18n/translation'
import { useI18n } from 'vue-i18n'
import Cookies from 'js-cookie';

export default {
    data() {
        const { locale } = useI18n()
        const description = computed(() => {
            switch (locale.value) {
                case 'en':
                    return 'We use cookies to optimize our site and analyze traffic with Google Analytics. Your data helps us to improve your experience on the site. By accepting, you allow this analysis. If you prefer not to be tracked, you can opt-out; this will place a cookie in your browser to exclude you from tracking on future visits.';
                case 'es':
                    return 'Utilizamos cookies para optimizar nuestro sitio y analizar el tráfico con Google Analytics. Tus datos nos ayudan a mejorar tu experiencia en el sitio. Al aceptar, permites este análisis. Si prefieres no ser rastreado, puedes optar por no participar; esto colocará una cookie en tu navegador para excluirte del seguimiento en futuras visitas.';
                default:
                    return 'We use cookies to optimize our site and analyze traffic with Google Analytics. Your data helps us to improve your experience on the site. By accepting, you allow this analysis. If you prefer not to be tracked, you can opt-out; this will place a cookie in your browser to exclude you from tracking on future visits.';
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
        const baseUrl = import.meta.env.BASE_URL
        return { Tr, baseUrl }
    },
    methods: {
        onAccept() {
            this.setConsent('analytics_storage', 'granted');
            this.setConsent('ad_storage', 'granted');
            this.setConsent('ad_user_data', 'granted');
            this.setConsent('ad_personalization', 'granted');
        },
        onDeclineAll() {
            this.setConsent('analytics_storage', 'denied');
            this.setConsent('ad_storage', 'denied');
            this.setConsent('ad_user_data', 'denied');
            this.setConsent('ad_personalization', 'denied');
            localStorage.setItem('cookie-comply', '[]');
            
            // Ocultar banner dinámicamente si está abierto
            const aside = document.querySelector('.cookie-comply');
            if (aside) {
                aside.style.display = 'none';
            }
        },
        onSavePreferences(preferences) {
            const hasAnalytics = preferences.includes('ga_ans');
            const hasAds = preferences.includes('ga_ads');
            const hasUserData = preferences.includes('ga_adu');
            const hasAdPersonalization = preferences.includes('ga_adp');

            this.setConsent('analytics_storage', hasAnalytics ? 'granted' : 'denied');
            this.setConsent('ad_storage', hasAds ? 'granted' : 'denied');
            this.setConsent('ad_user_data', hasUserData ? 'granted' : 'denied');
            this.setConsent('ad_personalization', hasAdPersonalization ? 'granted' : 'denied');
        },
        setConsent(type, consent) {
            let consentUpdate = {};
            consentUpdate[type] = consent;
            if (typeof window.gtag === 'function') {
                window.gtag('consent', 'update', consentUpdate);
            }
            Cookies.set(`consent_${type}`, consent, { expires: 365, sameSite: 'Lax', secure: true });
            console.log(`Cookie de consentimiento para ${type} establecida a ${consent}`);
        },
        openCookieSettings() {
            localStorage.removeItem('cookie-comply');
            window.location.reload();
        },
        rssFeedPathForLocale(locale) {
            if (locale === 'es') return `${this.baseUrl}rss-es.xml`
            return `${this.baseUrl}rss-en.xml`
        },
        currentRssFeed() {
            return this.rssFeedPathForLocale(this.$i18n?.locale)
        },
    }
}
</script>

<template>
    <footer class="footer pt-3 mt-5">
        <hr class="horizontal dark mb-5">
        <div class="container">
            <div class=" row">
                <div class="col-md-3 mb-3 ms-auto">
                    <div>
                        <RouterLink :to="Tr.i18nRoute({ name: 'home' })"
                            class="d-inline-flex align-items-center gap-2 text-decoration-none">
                            <img :src="`${baseUrl}assets/img/logos/logo-med-20.svg`" alt="MexIHC 2026" width="200"
                                class="mexihc-footer-logo">
                        </RouterLink>
                    </div>
                    <div class="mt-1">
                        <ul class="d-flex flex-row ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://www.facebook.com/mexihc" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-facebook text-lg opacity-8"></i>
                                    <span class="sr-only">{{ $t("nav.facebook") }}</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://x.com/mexihc" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-x-twitter text-lg opacity-8"></i>
                                    <span class="sr-only">{{ $t("nav.twitter") }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4 col-md-3 mb-3">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.about_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'home' })" class="nav-link uline">
                                    {{ $t("nav.home") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'home', hash: '#about_mexihc' })"
                                    class="nav-link uline">
                                    {{ $t("nav.about") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'organizers' })" class="nav-link uline">
                                    {{ $t("nav.organizers") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <a :href="currentRssFeed()" class="nav-link uline" target="_blank" rel="noopener noreferrer" type="application/rss+xml">
                                    {{ $t("nav.rss") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link uline" @click.prevent="openCookieSettings">
                                    {{ $t("privacyConsent.cookie-settings-footer") }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4 col-md-3 mb-3">
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
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops' })" class="nav-link uline">
                                    {{ $t("nav.cws") }}
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
                                <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })" class="nav-link uline">
                                    {{ $t("nav.accessibility_for_autors") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4 col-md-3 mb-3">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.for_attendees_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="nav-link uline">
                                    {{ $t("nav.getting_started") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="nav-link uline">
                                    {{ $t("nav.rates_and_registration") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'schedule' })" class="nav-link uline">
                                    {{ $t("nav.schedule") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers' })" class="nav-link uline">
                                    {{ $t("nav.keynotes") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 mt-1 mb-3">
                    <div class="d-flex flex-column align-items-center gap-1">
                        <p class="mb-1 text-xs text-uppercase fw-bold">{{ $t("nav.organized_by") }}</p>
                        <p class="my-0">
                            <a href="https://www.amexihc.org/" target="_blank" rel="noopener noreferrer">
                                <img :src="`${baseUrl}assets/img/logos/amexihc.svg`" alt="AMexIHC" width="110">
                            </a>
                        </p>
                        <p class="my-0 text-sm">
                            {{ $t("nav.copyright") }}
                        </p>
                        <p class="my-0  text-sm">
                            <a class="uline" :href="`${baseUrl}CHANGELOG.md`">v2026.2.3</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <vue-cookie-comply :preferences="preferences"
            :accept-all-label="$t('privacyConsent.accept-all')"
            :preferences-label="$t('privacyConsent.preferences')"
            @on-accept-all-cookies="onAccept"
            @on-save-cookie-preferences="onSavePreferences">

            <template v-slot:header>
                <div class="cookie-comply__header-wrapper">
                    <h3 class="cookie-comply__header-title">
                        {{ $t("privacyConsent.header-title") }}
                    </h3>
                    <p class="cookie-comply__header-description">
                        {{ $t("privacyConsent.header-description") }}
                    </p>
                    <div class="cookie-comply__header-actions">
                        <button type="button" class="cookie-comply__button cookie-comply__button-decline" @click="onDeclineAll">
                            {{ $t("privacyConsent.decline-all") }}
                        </button>
                    </div>
                </div>
            </template>

            <template v-slot:modal-header>
                <h3>{{ $t("privacyConsent.modal-header") }}</h3>
            </template>

        </vue-cookie-comply>
    </footer>
</template>
