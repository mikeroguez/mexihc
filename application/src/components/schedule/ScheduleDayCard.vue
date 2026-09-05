<script setup>
import UiSurfaceCard from '@/components/ui/UiSurfaceCard.vue'
import ScheduleActivityList from './ScheduleActivityList.vue'

defineProps({
    day: {
        type: Object,
        required: true,
    },
    emptyLabel: {
        type: String,
        required: true,
    },
})

const getNonEmptyBlocks = (day) => day.blocks.filter((block) => block.items.length)
</script>

<template>
    <UiSurfaceCard class="schedule-day-card">
        <header>
            <h3>{{ day.label }}</h3>
            <p>{{ day.venue }}</p>
        </header>
        <div v-for="block in getNonEmptyBlocks(day)" :key="`${day.id}-${block.time}`" class="schedule-day-block">
            <time class="schedule-time">{{ block.time }}</time>
            <div class="schedule-day-block-content">
                <ScheduleActivityList :items="block.items" :empty-label="emptyLabel" />
            </div>
        </div>
    </UiSurfaceCard>
</template>
