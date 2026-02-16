<script setup>
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>Official MexIHC 2026 news and deadlines.</p>
        <p>
            <a :href="`${baseUrl}rss-en.xml`" class="mexihc-postit-rss-link">
                <i class="fas fa-rss" aria-hidden="true"></i>
                RSS in English
            </a>
        </p>
    </div>
</template>
