<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Full program now available:</strong>
            explore MexIHC 2026 schedules, venues, activities and sessions.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'schedule' })" class="mexihc-postit-rss-link">
                View program
            </RouterLink>
        </p>
    </div>
</template>
