<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Concurso de diseño estudiantil:</strong>
            extendimos la fecha límite de envíos al 30 de agosto.
            <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" class="mexihc-postit-rss-link">
                Ver convocatoria
            </RouterLink>
        </p>
    </div>
</template>
