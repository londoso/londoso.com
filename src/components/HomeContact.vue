<template>
  <section
    id="contact"
    class="contact"
  >
    <h2 class="contact__title reveal">
      {{ t('common.contact') }}
    </h2>
    <ul class="contact__list reveal">
      <li
        v-for="item in social"
        :key="item.url"
        class="contact__item"
      >
        <a
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="item.name"
        >
          <i :class="['fab', `fa-${item.name}`, 'contact__icon']" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const social = [
  { name: 'instagram', url: 'https://www.instagram.com/londoso' },
  { name: 'twitter', url: 'https://www.twitter.com/londoso' },
  { name: 'github', url: 'https://www.github.com/londoso' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/londoso' }
]
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';
@import '@/scss/typography';

.contact {
  &__title { @extend %section-title; }

  &__list {
    display: flex;
    gap: 18px;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: rgba($panel, 0.7);
    border-radius: 50%;
    border: 1px solid rgba($flux-cyan, 0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: rgba($flux-cyan, 0.7);
      box-shadow: 0 0 22px rgba($flux-cyan, 0.55);
    }
  }

  &__icon {
    font-size: 24px;
    color: $flux-cyan;
    transition: color 0.2s ease;

    .contact__item:hover & {
      @include neon-text($flux-cyan, 1);
    }
  }
}
</style>
