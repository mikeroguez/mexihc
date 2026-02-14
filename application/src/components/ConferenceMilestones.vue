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
    routeName: null
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
</script>

<template>
  <section class="milestones-wrap" aria-label="Conference milestones">
    <div class="milestones-list">
      <component
        :is="item.routeName ? 'RouterLink' : 'article'"
        v-for="item in items"
        :key="item.key"
        :to="item.routeName ? Tr.i18nRoute({ name: item.routeName }) : undefined"
        class="milestone-card"
        :class="{ 'milestone-card-link': item.routeName }"
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
  border-radius: 16px;
  border: 1px solid #d6d0c8;
  background-color: #f3f1ed;
  box-shadow: 0 1px 0 rgba(20, 32, 56, 0.04);
  padding: 0.7rem 0.85rem;
}

.milestone-card-link {
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.milestone-card-link:hover {
  border-color: #c9bcc6;
  background-color: #f6f3f0;
  box-shadow: 0 2px 10px rgba(1, 22, 56, 0.08);
}

.milestone-card-link:focus-visible {
  outline: 2px solid rgba(135, 0, 88, 0.35);
  outline-offset: 2px;
}

.milestone-icon {
  width: 46px;
  height: 46px;
  border-radius: 11px;
  border: 1px solid #cfd6e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8f9eb5;
  font-size: 1.02rem;
  flex: 0 0 auto;
  background: #eceff4;
}

.milestone-card-open .milestone-icon {
  border-color: #96e4d4;
  color: #21b69c;
  background: #effffb;
}

.milestone-card-coming-soon .milestone-icon {
  border-color: #edcf71;
  color: #e79b08;
  background: #fff8e5;
}

.milestone-content {
  min-width: 0;
  flex: 1 1 auto;
}

.milestone-title {
  margin: 0;
  color: #1c2a46;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.15;
}

.milestone-description {
  margin: 0.15rem 0 0;
  color: #667793;
  font-size: 0.86rem;
  line-height: 1.3;
}

.milestone-badge {
  border-radius: 999px;
  border: 1px solid #d6deea;
  color: #8f9cb3;
  background: #ecf1f7;
  padding: 0.22rem 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.68rem;
  font-weight: 700;
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
    padding: 0.7rem;
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
