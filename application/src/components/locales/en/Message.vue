<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Registration and payment are open:</strong>
            you can now register and check the payment instructions for MexIHC 2026.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'registration', hash: '#payment' })" class="mexihc-postit-rss-link">
                View payment instructions
            </RouterLink>
        </p>
    </div>
</template>
