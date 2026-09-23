<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Accepted tutorials:</strong>
            explore the three tutorials selected for MexIHC 2026.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'accepted-tutorials' })" class="mexihc-postit-rss-link">
                View tutorials
            </RouterLink>
        </p>
    </div>
</template>
