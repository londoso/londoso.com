<template>
  <section
    id="about"
    class="about"
  >
    <h2 class="about__title reveal">
      {{ t('common.about') }}
    </h2>
    <div class="about__grid reveal">
      <div class="about__bio">
        <p
          v-for="(paragraph, i) in tm('about.bioParagraphs')"
          :key="i"
        >
          {{ paragraph }}
        </p>
        <p class="about__interests">
          <b>{{ t('about.interestsLabel') }}</b>
          {{ tm('about.interests').join(', ') }}
        </p>
      </div>
      <ul class="about__info">
        <li class="about__info-item">
          <span class="about__info-label">{{ t('about.name') }}</span>
          Anderson Londoño
        </li>
        <li class="about__info-item">
          <span class="about__info-label">{{ t('about.email') }}</span>
          <a href="mailto:londoso@gmail.com">londoso@gmail.com</a>
        </li>
        <li class="about__info-item">
          <span class="about__info-label">{{ t('about.location') }}</span>
          Medellín — Colombia
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';
@import '@/scss/typography';

.about {
  &__title { @extend %section-title; }

  &__grid {
    display: grid;
    gap: 24px;

    @include from('lg') {
      grid-template-columns: 1.6fr 1fr;
      align-items: start;
    }
  }

  &__bio {
    font-size: 17px;
    line-height: 1.75;
    color: $ink;

    p { margin: 0 0 14px; }
    p:last-child { margin-bottom: 0; }

    b { @include neon-text($flux-cyan, 0.5); }
  }

  &__interests {
    margin-top: 18px;
  }

  &__info {
    padding: 24px;
    background: linear-gradient(160deg, rgba($panel, 0.9), rgba($night, 0.9));
    border-radius: $radius;
    @include neon-box($flux-blue, 0.5);
  }

  &__info-item {
    font-size: 16px;
    color: $ink;

    &:not(:last-child) {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba($flux-cyan, 0.15);
    }
  }

  &__info-label {
    display: block;
    margin-bottom: 2px;
    font-family: 'Orbitron', 'Orbitron Fallback', sans-serif;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: $time-amber;
  }
}
</style>
