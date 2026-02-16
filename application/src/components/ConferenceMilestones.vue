<script setup>
import { computed } from 'vue'
import Tr from '@/i18n/translation'

const items = computed(() => [
  {
    key: 'call',
    titleKey: 'about.call',
    descriptionKey: 'about.call_desc',
    status: 'open',
    iconClass: 'far fa-file-alt',
    routeName: 'call-for-participation'
  },
  {
    key: 'registration',
    titleKey: 'about.registration',
    descriptionKey: 'about.registration_desc',
    status: 'coming_soon',
    iconClass: 'fas fa-user-check',
    routeName: 'registration'
  }
])

const statusLabelKeyByType = {
  open: 'about.open',
  closed: 'about.closed',
  coming_soon: 'nav.coming_soon',
  planned: 'about.planned'
}

const badgeClassByType = {
  open: 'milestone-badge-open',
  closed: 'milestone-badge-closed',
  coming_soon: 'milestone-badge-coming-soon',
  planned: 'milestone-badge-planned'
}

const isLinkEnabled = (item) => item.status === 'open' && Boolean(item.routeName)
</script>

<template>
  <section class="milestones-wrap" aria-label="Conference milestones">
    <div class="milestones-list">
      <component
        :is="isLinkEnabled(item) ? 'RouterLink' : 'article'"
        v-for="item in items"
        :key="item.key"
        :to="isLinkEnabled(item) ? Tr.i18nRoute({ name: item.routeName }) : undefined"
        class="milestone-card"
        :class="[
          `milestone-card-${item.status}`,
          { 'milestone-card-link': isLinkEnabled(item) },
        ]"
      >
        <div class="milestone-icon">
          <i :class="item.iconClass"></i>
        </div>

        <div class="milestone-content">
          <h3 class="milestone-title">
            <span>{{ $t(item.titleKey) }}</span>
          </h3>
          <p class="milestone-description">{{ $t(item.descriptionKey) }}</p>
        </div>

        <span class="milestone-badge" :class="badgeClassByType[item.status]">
          {{ $t(statusLabelKeyByType[item.status]) }}
        </span>
      </component>
    </div>
  </section>
</template>

<style scoped>
.milestones-wrap {
  margin: 0 auto;
  max-width: 700px;
}

.milestones-list {
  display: grid;
  gap: 0.6rem;
}

.milestone-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 14px;
  border: 1px solid rgba(1, 22, 56, 0.1);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 24px rgba(1, 22, 56, 0.08);
  backdrop-filter: blur(8px);
  padding: 0.82rem 0.9rem;
}

.milestone-card-link {
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.milestone-card-link:hover {
  border-color: rgba(135, 0, 88, 0.32);
  box-shadow: 0 14px 28px rgba(1, 22, 56, 0.13);
  transform: translateY(-1px);
}

.milestone-card-link:hover .milestone-title {
  color: #870058 !important;
}

.milestone-card-link:hover .milestone-title span {
  color: #870058 !important;
}

.milestone-card-link:hover .milestone-description {
  color: #5c6f8f;
}

.milestone-card-link:focus-visible {
  outline: 2px solid rgba(135, 0, 88, 0.35);
  outline-offset: 2px;
}

.milestone-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid rgba(73, 99, 137, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #496389;
  font-size: 1rem;
  flex: 0 0 auto;
  background: rgba(73, 99, 137, 0.08);
}

.milestone-card-open .milestone-icon {
  border-color: #79e2cf;
  color: #148a74;
  background: #c8f6ec;
}

.milestone-card-coming-soon .milestone-icon {
  border-color: #dfc55e;
  color: #bf6e08;
  background: #fff3bf;
}

.milestone-content {
  min-width: 0;
  flex: 1 1 auto;
}

.milestone-title {
  margin: 0;
  color: #1c2a46;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.15;
}

.milestone-description {
  margin: 0.15rem 0 0;
  color: #535b68;
  font-size: 0.85rem;
  line-height: 1.3;
}

.milestone-badge {
  border-radius: 999px;
  border: 1px solid #d6deea;
  color: #8f9cb3;
  background: #ecf1f7;
  padding: 0.2rem 0.56rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.72rem;
  font-weight: 800;
  white-space: nowrap;
}

.milestone-badge-open {
  border-color: #79e2cf;
  color: #148a74;
  background: #c8f6ec;
}

.milestone-badge-coming-soon {
  border-color: #dfc55e;
  color: #bf6e08;
  background: #fff3bf;
}

.milestone-badge-planned {
  color: #91a0b8;
}

@media (max-width: 767px) {
  .milestone-card {
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0.7rem 0.75rem;
  }

  .milestone-icon {
    width: 46px;
    height: 46px;
    border-radius: 11px;
    font-size: 1rem;
  }

  .milestone-title {
    font-size: 1rem;
  }

  .milestone-description {
    font-size: 0.82rem;
  }

  .milestone-badge {
    margin-left: auto;
  }
}
</style>
