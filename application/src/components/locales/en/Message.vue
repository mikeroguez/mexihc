<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Graduate Colloquium:</strong>
            submissions due August 16.
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" class="mexihc-postit-rss-link">
                View call
            </RouterLink>
        </p>
    </div>
</template>
