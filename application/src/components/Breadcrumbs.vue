<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

const route = useRoute()
const { t } = useI18n()

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
</script>

<template>
  <div v-if="breadcrumbs.length" class="container">
    <nav aria-label="breadcrumb" class="pt-3">
      <ol class="breadcrumb text-sm mb-0">
        <li
          v-for="(item, index) in breadcrumbs"
          :key="index"
          class="breadcrumb-item"
          :class="{ active: item.current }"
        >
          <RouterLink v-if="!item.current" :to="item.to" class="text-secondary opacity-8">
            {{ item.label }}
          </RouterLink>
          <span v-else class="text-dark opacity-9" aria-current="page">
            {{ item.label }}
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>
