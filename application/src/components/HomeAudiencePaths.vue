<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'
import UiInfoCard from '@/components/ui/UiInfoCard.vue'
import UiSectionTitle from '@/components/ui/UiSectionTitle.vue'

const { locale } = useI18n()

const copy = {
  es: {
    title: 'Elige tu ruta',
    paths: [
      {
        title: 'Quiero publicar o presentar',
        description: 'Consulta convocatorias, fechas clave, recomendaciones de accesibilidad y actividades para autores.',
        primaryLabel: 'Ver convocatorias',
        primaryRoute: 'call-for-participation',
        secondaryLabel: 'Recomendaciones de accesibilidad',
        secondaryRoute: 'accessibility-recommendations-for-authors',
      },
      {
        title: 'Quiero asistir a la conferencia',
        description: 'Revisa tarifas, registro, hospedaje, sedes, traslados y agenda preliminar para organizar tu visita.',
        primaryLabel: 'Primeros pasos',
        primaryRoute: 'getting-started',
        secondaryLabel: 'Agenda preliminar',
        secondaryRoute: 'schedule',
      },
    ],
  },
  en: {
    title: 'Choose your path',
    paths: [
      {
        title: 'I want to publish or present',
        description: 'Review calls, key dates, accessibility recommendations and author-facing activities.',
        primaryLabel: 'View calls',
        primaryRoute: 'call-for-participation',
        secondaryLabel: 'Accessibility recommendations',
        secondaryRoute: 'accessibility-recommendations-for-authors',
      },
      {
        title: 'I want to attend',
        description: 'Review rates, registration, lodging, venues, transportation and the preliminary schedule.',
        primaryLabel: 'Getting started',
        primaryRoute: 'getting-started',
        secondaryLabel: 'Preliminary schedule',
        secondaryRoute: 'schedule',
      },
    ],
  },
}

const content = computed(() => copy[locale.value] || copy.en)

const getActions = (path) => [
  { label: path.primaryLabel, to: Tr.i18nRoute({ name: path.primaryRoute }), variant: 'primary' },
  { label: path.secondaryLabel, to: Tr.i18nRoute({ name: path.secondaryRoute }), variant: 'muted' },
]
</script>

<template>
  <section class="audience-paths-section mexihc-section-gap" aria-labelledby="audience-paths-title">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <UiSectionTitle id="audience-paths-title">{{ content.title }}</UiSectionTitle>
          <div class="audience-paths-grid">
            <UiInfoCard
              v-for="path in content.paths"
              :key="path.title"
              :title="path.title"
              :description="path.description"
              :actions="getActions(path)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.audience-paths-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

@media (max-width: 767.98px) {
  .audience-paths-grid {
    grid-template-columns: 1fr;
  }
}
</style>
