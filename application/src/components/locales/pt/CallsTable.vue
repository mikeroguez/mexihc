<script setup>
import Tr from '@/i18n/translation'

const calls = [
  {
    key: 'cfp',
    title: 'Chamada de trabalhos (CFP)',
    to: Tr.i18nRoute({ name: 'call-for-papers' }),
    statusLabel: 'Aberta',
    statusType: 'open',
    deadline: 'Prazo de envio: 1 de junho de 2026',
  },
]
</script>

<template>
  <section class="calls-catalog" aria-label="Chamadas disponíveis">
    <RouterLink
      v-for="item in calls"
      :key="item.key"
      :to="item.to"
      class="call-card"
    >
      <div class="call-card-content">
        <h2 class="call-card-title">{{ item.title }}</h2>
        <p class="call-card-deadline">{{ item.deadline }}</p>
      </div>

      <div class="call-card-right">
        <span class="call-card-status" :class="`call-card-status-${item.statusType}`">
          {{ item.statusLabel }}
        </span>
        <span class="call-card-arrow" aria-hidden="true">›</span>
      </div>
    </RouterLink>
  </section>
</template>

<style scoped>
.calls-catalog {
  display: grid;
  gap: 0.65rem;
}

.call-card {
  display: flex;
  justify-content: space-between;
  gap: 0.9rem;
  align-items: center;
  border-radius: 14px;
  border: 1px solid rgba(1, 22, 56, 0.1);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 24px rgba(1, 22, 56, 0.08);
  backdrop-filter: blur(8px);
  padding: 0.85rem 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.call-card:hover,
.call-card:focus-visible {
  border-color: rgba(135, 0, 88, 0.34);
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(1, 22, 56, 0.13);
}

.call-card-title {
  margin: 0;
  font-size: 1.06rem;
  font-family: 'Inter', sans-serif !important;
  font-weight: 700;
  color: #011638 !important;
}

.call-card-deadline {
  margin: 0.35rem 0 0;
  color: #535b68;
  line-height: 1.35;
}

.call-card-right {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.call-card-status {
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 0.2rem 0.56rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.call-card-status-open {
  border-color: #79e2cf;
  color: #148a74;
  background: #c8f6ec;
}

.call-card-arrow {
  color: #870058;
  font-size: 1.45rem;
  line-height: 1;
}

@media (max-width: 767.98px) {
  .call-card {
    padding: 0.72rem 0.78rem;
  }

  .call-card-title {
    font-size: 0.98rem;
  }

  .call-card-deadline {
    font-size: 0.92rem;
  }
}
</style>
