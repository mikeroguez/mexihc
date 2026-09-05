<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
    status: {
        type: String,
        required: true,
        validator: (value) => ['open', 'closed', 'coming_soon', 'planned'].includes(value),
    },
})

const { t } = useI18n()

const labelKeyByStatus = {
    open: 'about.open',
    closed: 'about.closed',
    coming_soon: 'nav.coming_soon',
    planned: 'about.planned',
}

const label = computed(() => t(labelKeyByStatus[props.status]))
</script>

<template>
    <span class="ui-status-badge" :class="`ui-status-badge-${status}`">{{ label }}</span>
</template>

<style scoped>
.ui-status-badge {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    border: 1px solid rgba(1, 22, 56, 0.18);
    color: rgba(1, 22, 56, 0.72);
    background: rgba(1, 22, 56, 0.08);
    padding: 0.2rem 0.56rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.72rem;
    font-weight: 800;
    white-space: nowrap;
}

.ui-status-badge-open {
    border-color: rgba(135, 0, 88, 0.3);
    color: var(--mexihc-magenta);
    background: rgba(135, 0, 88, 0.12);
}

.ui-status-badge-coming_soon {
    border-color: rgba(1, 22, 56, 0.24);
    color: var(--mexihc-night);
    background: rgba(1, 22, 56, 0.1);
}

.ui-status-badge-planned {
    color: rgba(1, 22, 56, 0.68);
}
</style>
