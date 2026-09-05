<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>
            <strong>Registro y pago disponibles:</strong>
            ya puedes registrarte y consultar las instrucciones de pago para MexIHC 2026.
        </p>
        <p>
            <RouterLink :to="Tr.i18nRoute({ name: 'registration', hash: '#payment' })" class="mexihc-postit-rss-link">
                Ver instrucciones de pago
            </RouterLink>
        </p>
    </div>
</template>
