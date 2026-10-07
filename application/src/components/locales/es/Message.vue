<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Programa completo disponible:</strong>
            consulta horarios, sedes, actividades y sesiones de MexIHC 2026.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'schedule' })" class="mexihc-postit-rss-link">
                Ver programa
            </RouterLink>
        </p>
    </div>
</template>
