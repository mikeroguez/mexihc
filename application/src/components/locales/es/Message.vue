<script setup>
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
    <div class="alert alert-warning mexihc-postit col-md-8 m-auto" role="alert">
        <p>Noticias y fechas oficiales de MexIHC 2026.</p>
        <p>
            <a :href="`${baseUrl}rss-es.xml`" class="mexihc-postit-rss-link">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                        d="M6 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2-6v3a9 9 0 0 1 9 9h3C16 15.93 10.07 10 4 10m0-6v3c8.84 0 16 7.16 16 16h3C23 12.51 14.49 4 4 4" />
                </svg>
                RSS en español
            </a>
        </p>
    </div>
</template>
