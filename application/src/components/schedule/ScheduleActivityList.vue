<script setup>
defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    emptyLabel: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <ul v-if="items.length" class="schedule-items">
        <li
            v-for="item in items"
            :key="item.text"
            :class="{
                'schedule-featured': item.featured,
                'schedule-meta': item.meta,
                [`schedule-kind-${item.kind}`]: item.kind,
            }"
        >
            {{ item.text }}
        </li>
    </ul>
    <span v-else class="schedule-empty">{{ emptyLabel }}</span>
</template>
