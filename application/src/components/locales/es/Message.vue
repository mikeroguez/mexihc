<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Convocatoria de pósteres extendida:</strong>
            recibimos envíos hasta el 13 de septiembre.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters' })" class="mexihc-postit-rss-link">
                Ver convocatoria
            </RouterLink>
        </p>
    </div>
</template>
