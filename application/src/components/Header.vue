<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
  <header class="header-2">
    <div class="page-header section-height-40 relative mexihc-hero-bg">
      <div class="container">
        <div class="row text-center">
          <h1 id="top" class="text-white"><slot name="page-name"></slot></h1>
        </div>
      </div>
    </div>
  </header>
  <Breadcrumbs />
</template>
