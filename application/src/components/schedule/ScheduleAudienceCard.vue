<script setup>
import UiInfoCard from '@/components/ui/UiInfoCard.vue'

defineProps({
    card: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <UiInfoCard :title="card.label" :description="card.description" :tags="card.tags" />
</template>
