<script setup>
import UiActionLink from '@/components/ui/UiActionLink.vue'
import UiSurfaceCard from '@/components/ui/UiSurfaceCard.vue'

defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: () => [],
    },
    actions: {
        type: Array,
        default: () => [],
    },
})
</script>

<template>
    <UiSurfaceCard class="ui-info-card">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div v-if="tags.length" class="ui-info-card-tags">
            <span v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>
        <div v-if="actions.length" class="ui-info-card-actions">
            <UiActionLink
                v-for="action in actions"
                :key="action.label"
                :to="action.to"
                :variant="action.variant"
            >
                {{ action.label }}
            </UiActionLink>
        </div>
    </UiSurfaceCard>
</template>

<style scoped>
.ui-info-card {
    position: relative;
    padding: 1.35rem 1.5rem;
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.ui-info-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-image: linear-gradient(130deg, var(--mexihc-magenta) 0%, var(--mexihc-rose) 100%);
}

.ui-info-card:hover,
.ui-info-card:focus-within {
    transform: translateY(-3px);
    box-shadow: var(--mexihc-shadow-md);
}

.ui-info-card h3 {
    color: var(--mexihc-magenta);
    font-family: 'Inter', sans-serif !important;
    font-size: 1.08rem;
    font-weight: 800;
    margin-bottom: 0.55rem;
}

.ui-info-card p {
    margin-bottom: 0;
    color: var(--mexihc-slate);
    font-weight: 700;
    line-height: 1.45;
}

.ui-info-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1rem;
}

.ui-info-card-tags span {
    border: 1px solid var(--mexihc-border);
    border-radius: 999px;
    padding: 0.3rem 0.6rem;
    background: var(--mexihc-surface-muted);
    color: var(--mexihc-night);
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.2;
}

.ui-info-card-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 1rem;
}
</style>
