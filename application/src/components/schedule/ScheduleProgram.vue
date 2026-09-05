<script>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'
import UiSectionTitle from '@/components/ui/UiSectionTitle.vue'
import UiSurfaceCard from '@/components/ui/UiSurfaceCard.vue'
import ScheduleAudienceCard from './ScheduleAudienceCard.vue'
import ScheduleDayCard from './ScheduleDayCard.vue'
import ScheduleGrid from './ScheduleGrid.vue'

export default {
    components: {
        InPageNavigationPanel,
        ScheduleAudienceCard,
        ScheduleDayCard,
        ScheduleGrid,
        UiSectionTitle,
        UiSurfaceCard,
    },
    props: {
        content: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const isDesktop = ref(typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true)
        let mediaQuery

        const syncViewport = (event) => {
            isDesktop.value = event.matches
        }

        onMounted(() => {
            mediaQuery = window.matchMedia('(min-width: 768px)')
            isDesktop.value = mediaQuery.matches
            mediaQuery.addEventListener('change', syncViewport)
        })

        onBeforeUnmount(() => {
            mediaQuery?.removeEventListener('change', syncViewport)
        })

        return { Tr, isDesktop }
    }
}
</script>

<template>
    <div class="schedule-program">
        <InPageNavigationPanel
            :links="content.days.map((day) => ({
                label: day.shortLabel,
                to: Tr.i18nRoute({ name: 'schedule', hash: `#${day.id}` })
            }))"
        />

        <section class="schedule-intro">
            <div class="schedule-status" role="status">{{ content.status }}</div>
            <h2 class="text-primary text-gradient text-center">{{ content.title }}</h2>
            <p class="schedule-dateline text-center fst-italic">{{ content.dateline }}</p>

            <div class="schedule-summary" :aria-label="content.summaryLabel">
                <UiSurfaceCard v-for="item in content.summary" :key="item.label" class="schedule-summary-card">
                    <strong>{{ item.value }}</strong>
                    <span>{{ item.label }}</span>
                </UiSurfaceCard>
            </div>
        </section>

        <section class="schedule-audience-section mt-4" aria-labelledby="schedule-audience-heading">
            <UiSectionTitle id="schedule-audience-heading">{{ content.audienceTitle }}</UiSectionTitle>
            <div class="schedule-audience-grid">
                <ScheduleAudienceCard v-for="card in content.audienceCards" :key="card.label" :card="card" />
            </div>
        </section>

        <section class="schedule-highlight-section mt-4" aria-labelledby="highlights-heading">
            <UiSectionTitle id="highlights-heading">{{ content.highlightsTitle }}</UiSectionTitle>
            <div class="schedule-highlight-list">
                <span v-for="item in content.highlights" :key="item" class="schedule-highlight-pill">{{ item }}</span>
            </div>
        </section>

        <section class="schedule-grid-section mt-5" aria-labelledby="schedule-grid-heading">
            <UiSectionTitle id="schedule-grid-heading">{{ content.overviewTitle }}</UiSectionTitle>
            <ScheduleGrid
                :days="content.days"
                :time-blocks="content.timeBlocks"
                :time-header="content.timeHeader"
                :empty-label="content.emptyLabel"
                :is-desktop="isDesktop"
            />
        </section>

        <section class="schedule-mobile-section mt-5" aria-labelledby="schedule-days-heading">
            <UiSectionTitle id="schedule-days-heading">{{ content.mobileTitle }}</UiSectionTitle>
            <ScheduleDayCard
                v-for="day in content.days"
                :id="isDesktop ? null : day.id"
                :key="day.id"
                :day="day"
                :empty-label="content.emptyLabel"
            />
        </section>
    </div>
</template>

<style scoped>
.schedule-program {
    --schedule-presenter: #1d5f75;
}

.schedule-intro {
    margin-top: 1rem;
}

.schedule-audience-section,
.schedule-highlight-section,
.schedule-grid-section,
.schedule-mobile-section {
    margin-top: 2.5rem !important;
}

.schedule-status {
    width: fit-content;
    max-width: 100%;
    border: 1px solid rgba(135, 0, 88, 0.16);
    border-radius: 999px;
    padding: 0.4rem 0.72rem;
    margin: 0 auto 1rem;
    background: rgba(135, 0, 88, 0.08);
    color: var(--mexihc-magenta);
    font-size: 0.88rem;
    font-weight: 800;
    line-height: 1.2;
    text-align: center;
}

.schedule-dateline {
    color: var(--mexihc-slate);
}

.schedule-summary,
.schedule-audience-grid {
    display: grid;
    gap: 1rem;
    margin: 1.75rem 0;
}

.schedule-summary {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.schedule-audience-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

:deep(.schedule-summary-card) {
    position: relative;
    padding: 1.35rem 1.5rem;
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}

:deep(.schedule-summary-card)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-image: linear-gradient(130deg, var(--mexihc-magenta) 0%, var(--mexihc-rose) 100%);
}

:deep(.schedule-summary-card strong) {
    display: block;
    color: var(--mexihc-magenta);
    font-size: 1.9rem;
    line-height: 1;
}

:deep(.schedule-summary-card span) {
    display: block;
    margin-top: 0.4rem;
    color: var(--mexihc-slate);
    font-size: 0.9rem;
    font-weight: 700;
}

:deep(.schedule-day-card h3) {
    color: var(--mexihc-magenta);
    font-family: 'Inter', sans-serif !important;
    font-size: 1.08rem;
    font-weight: 800;
    margin-bottom: 0.55rem;
}

:deep(.schedule-day-card p) {
    margin-bottom: 0;
    color: var(--mexihc-slate);
    font-weight: 700;
    line-height: 1.45;
}

.schedule-highlight-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.schedule-highlight-pill {
    border: 1px solid rgba(135, 0, 88, 0.18);
    border-radius: 999px;
    padding: 0.42rem 0.72rem;
    background: rgba(135, 0, 88, 0.08);
    color: var(--mexihc-magenta);
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.2;
}

:deep(.schedule-table-wrap) {
    border: 1px solid var(--mexihc-border-strong);
    border-radius: var(--mexihc-radius-md);
    background: var(--mexihc-surface);
    box-shadow: var(--mexihc-shadow-md);
}

:deep(.schedule-table) {
    min-width: 960px;
    border: 0;
    margin-bottom: 0;
}

:deep(.schedule-table thead th) {
    border-bottom: 0;
    background: var(--mexihc-night);
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 800;
    text-align: center;
    vertical-align: top;
}

:deep(.schedule-table thead span) {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.86rem;
    font-weight: 600;
    opacity: 0.82;
}

:deep(.schedule-table tbody th) {
    width: 12rem;
    border-color: var(--mexihc-border);
    color: var(--mexihc-night);
    background: var(--mexihc-surface-muted);
    font-size: 0.94rem;
    font-weight: 800;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}

:deep(.schedule-table td) {
    border-color: var(--mexihc-border);
    background: rgba(255, 255, 255, 0.64);
    vertical-align: top;
    padding: 1rem 1.1rem;
    transition: background-color 0.15s ease;
}

:deep(.schedule-table tbody tr:hover td) {
    background: rgba(135, 0, 88, 0.05);
}

:deep(.schedule-items) {
    display: grid;
    gap: 0.32rem;
    list-style: none;
    margin: 0;
    padding-left: 0;
}

:deep(.schedule-items li) {
    position: relative;
    border: 0;
    border-radius: var(--mexihc-radius-sm);
    padding: 0.25rem 0 0.25rem 0.75rem;
    background: transparent;
    color: var(--mexihc-night);
    font-size: 0.94rem;
    line-height: 1.32;
}

:deep(.schedule-items li::before) {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 0.28rem;
    height: 0.28rem;
    border-radius: 50%;
    background: var(--mexihc-border-strong);
}

:deep(.schedule-featured) {
    background: transparent !important;
    color: var(--mexihc-magenta) !important;
    font-weight: 800;
}

:deep(.schedule-featured::before) {
    background: var(--mexihc-magenta);
}

:deep(.schedule-kind-author:not(.schedule-featured)) {
    color: var(--schedule-presenter);
    font-weight: 750;
}

:deep(.schedule-kind-author:not(.schedule-featured)::before) {
    background: var(--schedule-presenter);
}

:deep(.schedule-meta) {
    background: transparent !important;
    color: var(--mexihc-slate) !important;
    font-size: 0.86rem !important;
    font-weight: 700;
    font-style: italic;
    padding: 0.05rem 0 !important;
}

:deep(.schedule-meta::before) {
    display: none;
}

:deep(.schedule-empty) {
    color: var(--mexihc-slate);
    font-weight: 700;
}

.schedule-mobile-section {
    display: none;
}

:deep(.schedule-day-card) {
    display: block;
    padding: 1.35rem 1.5rem;
}

:deep(.schedule-day-card + .schedule-day-card) {
    margin-top: 1.25rem;
}

:deep(.schedule-day-card header) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    border-bottom: 1px solid var(--mexihc-border);
    margin-bottom: 0.95rem;
    padding-bottom: 0.75rem;
}

:deep(.schedule-day-card header p) {
    flex: 0 0 auto;
    border: 1px solid var(--mexihc-border);
    border-radius: 999px;
    padding: 0.22rem 0.55rem;
    background: var(--mexihc-surface-muted);
    font-size: 0.82rem;
    line-height: 1.2;
    text-align: right;
}

:deep(.schedule-day-block) {
    display: grid;
    grid-template-columns: 7.6rem minmax(0, 1fr);
    gap: 0.8rem;
    align-items: start;
}

:deep(.schedule-day-block + .schedule-day-block) {
    border-top: 1px solid var(--mexihc-border);
    margin-top: 0.85rem;
    padding-top: 0.85rem;
}

:deep(.schedule-time) {
    display: block;
    color: var(--mexihc-night) !important;
    font-size: 0.92rem;
    font-weight: 800 !important;
    margin-bottom: 0 !important;
    white-space: nowrap;
}

:deep(.schedule-day-block-content) {
    min-width: 0;
}

@media (max-width: 767.98px) {
    .schedule-summary,
    .schedule-audience-grid {
        grid-template-columns: 1fr;
    }

    .schedule-summary,
    .schedule-audience-grid {
        margin: 1rem 0;
    }

    .schedule-grid-section {
        display: none;
    }

    .schedule-mobile-section {
        display: block;
        margin-top: 2rem !important;
    }

    :deep(.schedule-day-card) {
        width: 100%;
        padding: 0 !important;
        overflow: hidden;
    }

    :deep(.schedule-day-card header) {
        display: block;
        margin-bottom: 0;
        padding: 0.9rem 1rem;
        border-bottom: 1px solid var(--mexihc-border);
        background: rgba(240, 239, 236, 0.5);
    }

    :deep(.schedule-day-card header p) {
        width: fit-content;
        margin-top: 0.5rem;
        text-align: left;
    }

    :deep(.schedule-day-block) {
        grid-template-columns: 1fr;
        gap: 0.45rem;
        padding: 0.9rem 1rem;
    }

    :deep(.schedule-day-block + .schedule-day-block) {
        margin-top: 0;
        padding-top: 0.9rem;
    }

    :deep(.schedule-time) {
        width: fit-content;
        border-radius: 999px;
        padding: 0.22rem 0.55rem;
        background: rgba(1, 22, 56, 0.08);
        font-size: 0.84rem;
        line-height: 1.2;
    }

    :deep(.schedule-items) {
        gap: 0.42rem;
    }

    :deep(.schedule-items li) {
        padding-left: 0.85rem;
    }
}
</style>
