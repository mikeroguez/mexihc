<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
  <header class="header-2">
    <div class="page-header section-height-40 relative mexihc-secondary-bg">
      <div class="container">
        <div class="row text-center">
          <h1 id="top" class="text-white secondary-header-title"><slot name="page-name"></slot></h1>
        </div>
      </div>
    </div>
  </header>
  <Breadcrumbs />
</template>

<style scoped>
.secondary-header-title {
  text-shadow: 0 2px 8px #011638;
}
</style>
