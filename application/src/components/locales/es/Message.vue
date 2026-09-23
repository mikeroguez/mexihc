<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Tutoriales aceptados:</strong>
            ya puedes conocer los tres tutoriales de MexIHC 2026.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'accepted-tutorials' })" class="mexihc-postit-rss-link">
                Ver tutoriales
            </RouterLink>
        </p>
    </div>
</template>
