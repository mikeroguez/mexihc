<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Coloquio de Graduados:</strong>
            envíos hasta el 16 de agosto.
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" class="mexihc-postit-rss-link">
                Ver convocatoria
            </RouterLink>
        </p>
    </div>
</template>
