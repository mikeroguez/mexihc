<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Student Design Competition:</strong>
            submissions are now due August 30.
            <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" class="mexihc-postit-rss-link">
                View call
            </RouterLink>
        </p>
    </div>
</template>
