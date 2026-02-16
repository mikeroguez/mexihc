<script setup>
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>Notícias e prazos oficiais do MexIHC 2026.</p>
        <p>
            <a :href="`${baseUrl}rss.xml`" class="mexihc-postit-rss-link">
                <i class="fas fa-rss" aria-hidden="true"></i>
                RSS de notícias
            </a>
        </p>
    </div>
</template>
