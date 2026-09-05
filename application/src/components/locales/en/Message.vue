<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Poster call extended:</strong>
            we're now accepting submissions through September 13.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters' })" class="mexihc-postit-rss-link">
                View call
            </RouterLink>
        </p>
    </div>
</template>
