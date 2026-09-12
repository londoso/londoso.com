<template>
  <section
    id="hero"
    class="hero"
  >
    <div class="hero__inner">
      <div class="hero__text reveal">
        <p class="hero__hello">
          {{ t('common.heroMessage') }}
        </p>
        <h1 class="hero__title">
          Anderson<br>Londoño
        </h1>
        <p class="hero__role">
          {{ t('common.heroRole') }}
        </p>
        <p class="hero__tagline">
          “{{ t('common.heroTagline') }}”
        </p>

        <div
          class="hero__circuits"
          aria-hidden="true"
        >
          <div class="circuit circuit--amber">
            <span class="circuit__label">{{ t('common.destinationTime') }}</span>
            <span class="circuit__value">OCT 21 2015</span>
          </div>
          <div class="circuit circuit--green">
            <span class="circuit__label">{{ t('common.presentTime') }}</span>
            <span class="circuit__value">{{ today }}</span>
          </div>
          <div class="circuit circuit--red">
            <span class="circuit__label">{{ t('common.lastDeparture') }}</span>
            <span class="circuit__value">NOV 05 1955</span>
          </div>
        </div>
      </div>

      <div class="hero__portrait reveal">
        <div class="hero__portrait-ring">
          <img
            class="hero__image"
            src="@/assets/images/hero.jpg"
            alt="Anderson Londoño"
          >
        </div>
        <span class="hero__flux">1.21 GW</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const today = computed(() => {
  const d = new Date()
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ]
  const day = String(d.getDate()).padStart(2, '0')
  return `${months[d.getMonth()]} ${day} ${d.getFullYear()}`
})
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';

.hero {
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 110px 5% 60px;

  &__inner {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: $maxw;
    margin: 0 auto;

    @include from('lg') {
      flex-direction: row;
      justify-content: space-between;
      gap: 60px;
    }
  }

  &__text {
    text-align: center;

    @include from('lg') { text-align: left; }
  }

  &__hello {
    margin: 0 0 6px;
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    @include neon-text($flux-cyan, 0.7);
  }

  &__title {
    margin: 0;
    font-size: 52px;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    @include neon-text($time-amber, 0.55);

    @include from('md') { font-size: 76px; }
    @include from('lg') { font-size: 88px; }
  }

  &__role {
    margin: 16px 0 0;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1px;
    color: $ink;
  }

  &__tagline {
    margin: 6px 0 0;
    font-size: 16px;
    font-style: italic;
    color: $muted;
  }

  &__circuits {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 30px;

    @include from('lg') { justify-content: flex-start; }
  }

  &__portrait {
    position: relative;
    flex-shrink: 0;
  }

  &__portrait-ring {
    width: 220px;
    height: 220px;
    padding: 6px;
    border-radius: 50%;
    background: conic-gradient($flux-cyan, $flux-blue, $plutonium, $time-amber, $flux-cyan);
    box-shadow: 0 0 40px rgba($flux-cyan, 0.5);
    animation: hero-spin 12s linear infinite;

    @include from('md') { width: 300px; height: 300px; }
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: $panel;
    animation: hero-spin 12s linear infinite reverse;
  }

  &__flux {
    position: absolute;
    right: -6px;
    bottom: 12px;
    padding: 6px 12px;
    font-family: 'Orbitron', sans-serif;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1px;
    color: $void;
    background: $time-amber;
    border-radius: 999px;
    box-shadow: 0 0 20px rgba($time-amber, 0.9);
  }
}

.circuit {
  min-width: 108px;
  padding: 8px 12px;
  background: rgba($black, 0.55);
  border-radius: 6px;
  border: 1px solid rgba($white, 0.06);

  &__label {
    display: block;
    font-family: 'Rajdhani', sans-serif;
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: $muted;
  }

  &__value {
    display: block;
    font-family: 'Orbitron', sans-serif;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
  }

  &--amber .circuit__value { @include neon-text($time-amber, 1); }
  &--green .circuit__value { @include neon-text($time-green, 1); }
  &--red .circuit__value { @include neon-text($time-red, 1); }
}

@keyframes hero-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .hero__portrait-ring,
  .hero__image { animation: none; }
}
</style>
