<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    to: {
        type: [String, Object],
        default: null,
    },
    href: {
        type: String,
        default: '',
    },
    variant: {
        type: String,
        default: 'primary',
    },
})

const componentName = computed(() => props.to ? RouterLink : 'a')
const componentProps = computed(() => props.to ? { to: props.to } : { href: props.href })
</script>

<template>
    <component
        :is="componentName"
        v-bind="componentProps"
        class="btn btn-round mexihc-action-link"
        :class="`mexihc-action-link-${variant}`"
    >
        <slot />
    </component>
</template>
