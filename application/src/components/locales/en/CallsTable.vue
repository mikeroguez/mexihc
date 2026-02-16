<script setup>
import Tr from '@/i18n/translation'

const calls = [
  {
    key: 'cfp',
    title: 'Call for papers (CFP)',
    to: Tr.i18nRoute({ name: 'call-for-papers' }),
    statusLabel: 'Open',
    statusType: 'open',
    iconClass: 'fas fa-file-alt',
    deadline: 'Submission deadline: June 1, 2026',
  },
]
</script>

<template>
  <section class="calls-catalog" aria-label="Available calls">
    <RouterLink
      v-for="item in calls"
      :key="item.key"
      :to="item.to"
      class="call-card"
    >
      <div class="call-card-icon" aria-hidden="true">
        <i :class="item.iconClass"></i>
      </div>

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
  --mxh-navy: #011638;
  --mxh-wine: #870058;
  --mxh-ivory: #f0efec;
  --mxh-navy-soft: rgba(1, 22, 56, 0.1);
  --mxh-wine-soft: rgba(135, 0, 88, 0.12);
  --mxh-ivory-soft: rgba(240, 239, 236, 0.8);
  display: grid;
  gap: 0.65rem;
}

.call-card {
  display: flex;
  justify-content: flex-start;
  gap: 0.9rem;
  align-items: center;
  border-radius: 14px;
  border: 1px solid rgba(1, 22, 56, 0.14);
  background: rgba(240, 239, 236, 0.92);
  box-shadow: 0 10px 24px rgba(1, 22, 56, 0.09);
  backdrop-filter: blur(8px);
  padding: 0.85rem 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.call-card:hover,
.call-card:focus-visible {
  border-color: rgba(135, 0, 88, 0.38);
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(1, 22, 56, 0.16);
}

.call-card-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--mxh-navy-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mxh-wine);
  font-size: 1rem;
  flex: 0 0 auto;
  background: var(--mxh-wine-soft);
}

.call-card-title {
  margin: 0;
  font-size: 1.06rem;
  font-family: 'Inter', sans-serif !important;
  font-weight: 700;
  color: var(--mxh-navy) !important;
}

.call-card-deadline {
  margin: 0.35rem 0 0;
  color: rgba(1, 22, 56, 0.7);
  line-height: 1.35;
}

.call-card-right {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.call-card-status {
  border-radius: 999px;
  border: 1px solid rgba(1, 22, 56, 0.18);
  padding: 0.2rem 0.56rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(1, 22, 56, 0.72);
  background: rgba(1, 22, 56, 0.08);
}

.call-card-status-open {
  border-color: rgba(135, 0, 88, 0.3);
  color: var(--mxh-wine);
  background: var(--mxh-wine-soft);
}

.call-card-status-coming-soon {
  border-color: rgba(1, 22, 56, 0.24);
  color: var(--mxh-navy);
  background: rgba(1, 22, 56, 0.1);
}

.call-card-arrow {
  color: var(--mxh-wine);
  font-size: 1.45rem;
  line-height: 1;
}

@media (max-width: 767.98px) {
  .call-card {
    padding: 0.72rem 0.78rem;
  }

  .call-card-icon {
    width: 44px;
    height: 44px;
  }

  .call-card-title {
    font-size: 0.98rem;
  }

  .call-card-deadline {
    font-size: 0.92rem;
  }
}
</style>
