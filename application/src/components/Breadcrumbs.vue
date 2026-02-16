<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

const route = useRoute()
const { t } = useI18n()
const isCompact = ref(false)

const PARENT_GROUPS = {
  calls: { key: 'nav.for_authors', routeName: 'call-for-participation' },
  attendees: { key: 'nav.for_attendees', routeName: 'getting-started' },
  program: { key: 'nav.program', routeName: 'keynote-speakers' },
  organizers: { key: 'nav.organizers', routeName: 'organizers' },
}

const PAGE_MAP = {
  'call-for-participation': { parent: PARENT_GROUPS.calls, currentKey: 'calls.title' },
  'call-for-papers': { parent: PARENT_GROUPS.calls, currentKey: 'calls.cfp' },
  'call-for-posters': { parent: PARENT_GROUPS.calls, currentKey: 'calls.cpt' },
  'call-for-workshops-and-tutorials': { parent: PARENT_GROUPS.calls, currentKey: 'calls.cwt' },
  'calls-for-accepted-workshops': { parent: PARENT_GROUPS.calls, currentKey: 'nav.workshop_title' },
  'accepted-tutorials': { parent: PARENT_GROUPS.attendees, currentKey: 'nav.tutorial_title' },
  'student-design-competition': { parent: PARENT_GROUPS.calls, currentKey: 'calls.sdc' },
  'graduate-colloquium': { parent: PARENT_GROUPS.calls, currentKey: 'calls.cgc' },
  'accessibility-recommendations-for-authors': { parent: PARENT_GROUPS.calls, currentKey: 'accessibility.title' },
  'getting-started': { parent: PARENT_GROUPS.attendees, currentKey: 'nav.getting_started_title' },
  registration: { parent: PARENT_GROUPS.attendees, currentKey: 'nav.rates_and_registration_title' },
  'keynote-speakers': { parent: PARENT_GROUPS.program, currentKey: 'nav.keynotes' },
  organizers: { parent: PARENT_GROUPS.organizers, currentKey: 'organizers.title' },
  'accepted-papers': { parent: PARENT_GROUPS.program, currentKey: 'accepted_papers.title' },
}

const breadcrumbs = computed(() => {
  if (route.name === 'home') return []

  const items = [
    { label: t('nav.home'), to: Tr.i18nRoute({ name: 'home' }) },
  ]

  const page = PAGE_MAP[route.name] || {}
  if (page.parent && page.parent.routeName && page.parent.routeName !== route.name) {
    items.push({
      label: t(page.parent.key),
      to: Tr.i18nRoute({ name: page.parent.routeName }),
    })
  }

  const currentLabel = page.currentKey ? t(page.currentKey) : (route.meta?.title || '')
  items.push({ label: currentLabel, current: true })

  return items.filter((item) => item.label)
})

const visibleBreadcrumbs = computed(() => {
  if (!isCompact.value || breadcrumbs.value.length <= 2) return breadcrumbs.value

  const first = breadcrumbs.value[0]
  const current = breadcrumbs.value[breadcrumbs.value.length - 1]

  return [
    first,
    { label: '...', ellipsis: true },
    { ...current, current: true },
  ]
})

const updateCompact = () => {
  isCompact.value = window.innerWidth < 768
}

onMounted(() => {
  updateCompact()
  window.addEventListener('resize', updateCompact)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCompact)
})
</script>

<template>
  <div v-if="breadcrumbs.length" class="container">
    <nav aria-label="breadcrumb" class="mexihc-breadcrumb-wrap">
      <ol class="mexihc-breadcrumb mb-0">
        <li
          v-for="(item, index) in visibleBreadcrumbs"
          :key="index"
          class="mexihc-breadcrumb-item"
        >
          <span v-if="item.ellipsis" class="breadcrumb-ellipsis" aria-hidden="true">
            ...
          </span>

          <RouterLink v-else-if="!item.current" :to="item.to" class="breadcrumb-link">
            <span v-if="index === 0" class="breadcrumb-home-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 3.2 3.8 9.8a1 1 0 0 0-.3 1.1 1 1 0 0 0 1 .7h1.1V19a2 2 0 0 0 2 2h3.7a1 1 0 0 0 1-1v-4.1h1.4V20a1 1 0 0 0 1 1h3.7a2 2 0 0 0 2-2v-7.4h1.1a1 1 0 0 0 1-.7 1 1 0 0 0-.3-1.1L12.9 3.2a1 1 0 0 0-1.3 0Z" />
              </svg>
            </span>
            {{ item.label }}
          </RouterLink>

          <span v-else class="breadcrumb-current" aria-current="page">
            {{ item.label }}
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<style scoped>
.mexihc-breadcrumb-wrap {
  padding-top: 1rem;
}

.mexihc-breadcrumb {
  list-style: none;
  margin: 0;
  padding: 0.44rem 0.9rem;
  min-height: 40px;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-radius: 14px;
  border: 1px solid rgba(1, 22, 56, 0.1);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 8px 20px rgba(1, 22, 56, 0.08);
  backdrop-filter: blur(8px);
}

.mexihc-breadcrumb-item {
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 500;
  color: #535b68;
}

.mexihc-breadcrumb-item + .mexihc-breadcrumb-item::before {
  content: '›';
  margin: 0 0.25rem 0 0.1rem;
  color: rgba(1, 22, 56, 0.36);
  font-size: 1rem;
}

.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #535b68 !important;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.1rem 0.36rem;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.breadcrumb-link:hover,
.breadcrumb-link:focus-visible {
  color: #870058 !important;
  text-decoration: underline;
  text-underline-offset: 2px;
  background: rgba(135, 0, 88, 0.08);
}

.breadcrumb-current {
  display: inline-flex;
  align-items: center;
  color: #011638;
  font-weight: 700;
  line-height: 1.2;
  background: rgba(135, 0, 88, 0.09);
  border: 1px solid rgba(135, 0, 88, 0.22);
  border-radius: 999px;
  padding: 0.15rem 0.55rem;
}

.breadcrumb-ellipsis {
  color: rgba(1, 22, 56, 0.55);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.breadcrumb-home-icon {
  width: 0.95rem;
  height: 0.95rem;
  display: inline-flex;
  color: currentColor;
}

.breadcrumb-home-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

@media (max-width: 767.98px) {
  .mexihc-breadcrumb-wrap {
    padding-top: 0.85rem;
  }

  .mexihc-breadcrumb {
    padding: 0.36rem 0.68rem;
    border-radius: 12px;
    gap: 0.1rem;
  }

  .mexihc-breadcrumb-item {
    font-size: 0.88rem;
  }

  .breadcrumb-current {
    max-width: 58vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
