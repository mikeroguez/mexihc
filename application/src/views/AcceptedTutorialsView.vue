<script>
import TheHeader from '@/components/Header.vue'
import Tr from '@/i18n/translation'

export default {
  components: {
    TheHeader
  },
  setup() {
    return { Tr }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t('nav.tutorial_title') }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-lg-8">
          <p class="mb-0">To be announced</p>
        </div>
      </div>
    </div>
  </section>
</template>
