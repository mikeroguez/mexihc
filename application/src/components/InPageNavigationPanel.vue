<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  milestones: {
    type: Array,
    default: () => [],
  },
  allDatesTo: {
    type: [String, Object],
    default: null,
  },
  allDatesLabel: {
    type: String,
    default: '',
  },
})

const { locale } = useI18n()
const showBackToAnchors = ref(false)
const panelRef = ref(null)

const copyByLocale = {
  es: {
    linksTitle: 'En esta página',
    widgetTitle: 'Próxima fecha clave',
    nextStage: 'Siguiente etapa',
    conferenceEnded: 'La conferencia ya finalizó.',
    noUpcoming: 'No hay más fechas pendientes.',
    today: 'Hoy',
    inDays: (days) => `En ${days} días`,
    tomorrow: 'Mañana',
    defaultAllDates: 'Ver todas las fechas importantes',
    backToAnchors: 'Volver al menú de secciones',
    backToAnchorsShort: 'Menú',
  },
  en: {
    linksTitle: 'On this page',
    widgetTitle: 'Next key date',
    nextStage: 'Following stage',
    conferenceEnded: 'The conference has ended.',
    noUpcoming: 'There are no upcoming dates.',
    today: 'Today',
    inDays: (days) => `In ${days} days`,
    tomorrow: 'Tomorrow',
    defaultAllDates: 'See all important dates',
    backToAnchors: 'Back to sections menu',
    backToAnchorsShort: 'Menu',
  },
  pt: {
    linksTitle: 'Nesta página',
    widgetTitle: 'Próxima data-chave',
    nextStage: 'Etapa seguinte',
    conferenceEnded: 'A conferência já terminou.',
    noUpcoming: 'Não há mais datas pendentes.',
    today: 'Hoje',
    inDays: (days) => `Em ${days} dias`,
    tomorrow: 'Amanhã',
    defaultAllDates: 'Veja todas as datas importantes',
    backToAnchors: 'Voltar ao menu de seções',
    backToAnchorsShort: 'Menu',
  },
}

const text = computed(() => copyByLocale[locale.value] || copyByLocale.en)

const normalizedMilestones = computed(() => {
  return props.milestones
    .map((item, index) => {
      const ts = Date.parse(`${item.date}T00:00:00`)
      return Number.isNaN(ts) ? null : { ...item, index, ts }
    })
    .filter(Boolean)
    .sort((a, b) => a.ts - b.ts || a.index - b.index)
})

const todayTs = computed(() => {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return now.getTime()
})

const nextMilestone = computed(() => {
  return normalizedMilestones.value.find((item) => item.ts >= todayTs.value) || null
})

const followingMilestone = computed(() => {
  if (!nextMilestone.value) return null
  const currentIndex = normalizedMilestones.value.findIndex((item) => item === nextMilestone.value)
  return normalizedMilestones.value[currentIndex + 1] || null
})

const conferenceEnd = computed(() => {
  const explicitConferenceEnd = normalizedMilestones.value.find((item) => item.kind === 'conference-end')
  return explicitConferenceEnd || normalizedMilestones.value[normalizedMilestones.value.length - 1] || null
})

const conferenceEnded = computed(() => {
  if (!conferenceEnd.value) return false
  return conferenceEnd.value.ts < todayTs.value
})

const hasWidget = computed(() => normalizedMilestones.value.length > 0)

const formatDate = (isoDate) => {
  const date = new Date(`${isoDate}T12:00:00`)
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

const relativeLabel = (isoDate) => {
  const target = new Date(`${isoDate}T00:00:00`)
  const today = new Date()
  target.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  const days = Math.round((target.getTime() - today.getTime()) / 86400000)

  if (days <= 0) return text.value.today
  if (days === 1) return text.value.tomorrow
  return text.value.inDays(days)
}

const handleScroll = () => {
  showBackToAnchors.value = window.scrollY > 380
}

const scrollToAnchors = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const behavior = prefersReducedMotion ? 'auto' : 'smooth'
  const navbar = document.querySelector('.mexihc-navbar')
  const navHeight = navbar ? navbar.getBoundingClientRect().height : 0
  const safetyGap = 12
  const offset = navHeight + safetyGap

  if (panelRef.value) {
    const targetY = window.scrollY + panelRef.value.getBoundingClientRect().top - offset
    window.scrollTo({ top: Math.max(0, targetY), behavior })
    return
  }
  window.scrollTo({ top: 0, behavior })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section v-if="links.length || hasWidget" ref="panelRef" class="in-page-nav my-3">
    <nav v-if="links.length" class="in-page-nav-links" aria-label="In-page navigation">
      <h2 class="in-page-nav-title">{{ text.linksTitle }}</h2>
      <ol class="in-page-nav-list">
        <li v-for="(item, index) in links" :key="`${index}-${item.label}`" class="in-page-nav-item">
          <RouterLink :to="item.to" class="in-page-nav-link">
            <span class="in-page-nav-index">{{ index + 1 }}</span>
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ol>
    </nav>

    <aside v-if="hasWidget" class="next-date-widget" aria-live="polite">
      <h2 class="in-page-nav-title">{{ text.widgetTitle }}</h2>

      <template v-if="nextMilestone">
        <p class="next-date-name mb-1">{{ nextMilestone.label }}</p>
        <p class="next-date-value mb-2">{{ formatDate(nextMilestone.date) }}</p>
        <p class="next-date-relative mb-0">{{ relativeLabel(nextMilestone.date) }}</p>

        <p v-if="followingMilestone" class="next-date-following mt-3 mb-0">
          {{ text.nextStage }}: {{ followingMilestone.label }}
        </p>
      </template>

      <p v-else class="next-date-ended mb-0">
        {{ conferenceEnded ? text.conferenceEnded : text.noUpcoming }}
      </p>

      <RouterLink
        v-if="allDatesTo"
        :to="allDatesTo"
        class="next-date-all-dates"
      >
        {{ allDatesLabel || text.defaultAllDates }}
      </RouterLink>
    </aside>
  </section>

  <button
    v-if="showBackToAnchors && (links.length || hasWidget)"
    type="button"
    class="anchors-float-btn"
    :aria-label="text.backToAnchors"
    :title="text.backToAnchors"
    @click="scrollToAnchors"
  >
    <span class="anchors-float-symbol" aria-hidden="true">@</span>
    <span class="anchors-float-arrow" aria-hidden="true">↑</span>
    <span class="visually-hidden">{{ text.backToAnchorsShort }}</span>
  </button>
</template>

<style scoped>
.in-page-nav {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 1rem;
  align-items: start;
}

.in-page-nav-links,
.next-date-widget {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(1, 22, 56, 0.1);
  border-radius: 14px;
  box-shadow: 0 10px 24px rgba(1, 22, 56, 0.09);
  backdrop-filter: blur(8px);
  padding: 0.95rem 1rem;
}

.in-page-nav-title {
  margin: 0 0 0.7rem;
  font-family: 'Inter', sans-serif !important;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #535b68 !important;
}

.in-page-nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.in-page-nav-item + .in-page-nav-item {
  margin-top: 0.4rem;
}

.in-page-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #011638 !important;
  text-decoration: none;
  font-weight: 600;
  line-height: 1.2;
}

.in-page-nav-link:hover,
.in-page-nav-link:focus-visible {
  color: #870058 !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.in-page-nav-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.4rem;
  height: 1.4rem;
  border-radius: 999px;
  background: rgba(135, 0, 88, 0.12);
  border: 1px solid rgba(135, 0, 88, 0.26);
  color: #870058;
  font-size: 0.76rem;
}

.next-date-name {
  color: #870058;
  font-weight: 700;
  line-height: 1.25;
}

.next-date-value {
  color: #011638;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.15;
}

.next-date-relative {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: rgba(73, 99, 137, 0.12);
  border: 1px solid rgba(73, 99, 137, 0.25);
  color: #223149;
  padding: 0.16rem 0.56rem;
  font-size: 0.79rem;
  font-weight: 700;
}

.next-date-following {
  color: #535b68;
  font-size: 0.88rem;
  line-height: 1.3;
}

.next-date-ended {
  color: #535b68;
  line-height: 1.4;
  font-weight: 600;
}

.next-date-all-dates {
  margin-top: 0.85rem;
  display: inline-block;
  font-weight: 700;
  color: #870058 !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.anchors-float-btn {
  position: fixed;
  left: max(0.8rem, env(safe-area-inset-left));
  bottom: 1.2rem;
  width: 2.85rem;
  height: 2.85rem;
  border: 1px solid rgba(1, 22, 56, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 12px 26px rgba(1, 22, 56, 0.2);
  color: #870058;
  font-size: 1rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.05rem;
  cursor: pointer;
  z-index: 1025;
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.anchors-float-btn:hover,
.anchors-float-btn:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(135, 0, 88, 0.42);
  box-shadow: 0 16px 30px rgba(1, 22, 56, 0.24);
  outline: 2px solid rgba(135, 0, 88, 0.34);
  outline-offset: 2px;
}

.anchors-float-symbol {
  font-size: 0.72rem;
  line-height: 1;
}

.anchors-float-arrow {
  font-size: 1.05rem;
  line-height: 1;
}

@media (max-width: 991.98px) {
  .in-page-nav {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 575.98px) {
  .in-page-nav-links,
  .next-date-widget {
    border-radius: 12px;
    padding: 0.8rem 0.85rem;
  }

  .in-page-nav-link {
    font-size: 0.95rem;
  }

  .next-date-value {
    font-size: 1rem;
  }

  .anchors-float-btn {
    left: auto;
    right: max(0.8rem, env(safe-area-inset-right));
    width: 2.75rem;
    height: 2.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .anchors-float-btn {
    transition: none;
  }
}
</style>
