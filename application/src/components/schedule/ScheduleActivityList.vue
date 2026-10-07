<script setup>
defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    emptyLabel: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <ul v-if="items.length" class="schedule-items">
        <li
            v-for="item in items"
            :key="item.text"
            :id="item.id || null"
            :class="{
                'schedule-featured': item.featured,
                'schedule-meta': item.meta,
                [`schedule-kind-${item.kind}`]: item.kind,
            }"
        >
            <span>{{ item.text }}</span>
            <details v-if="item.details?.length" class="schedule-item-details">
                <summary>
                    <span class="visually-hidden">{{ item.text }}: </span>{{ item.detailsLabel }}
                </summary>
                <ol>
                    <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
                </ol>
            </details>
        </li>
    </ul>
    <span v-else-if="emptyLabel" class="schedule-empty">{{ emptyLabel }}</span>
</template>
