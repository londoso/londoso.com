<template>
  <footer class="footer">
    <p class="footer__text">
      {{ t('common.footerMessage') }}
      <a
        class="footer__user"
        href="https://github.com/londoso/londoso.com"
        target="_blank"
        rel="noopener noreferrer"
      >@londoso</a>
    </p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';

.footer {
  margin-top: 60px;
  padding: 32px 5%;
  text-align: center;
  border-top: 1px solid rgba($flux-cyan, 0.2);
  background: rgba($void, 0.6);

  &__text {
    margin: 0;
    font-size: 14px;
    letter-spacing: 1px;
    color: $muted;
  }

  &__user {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    @include neon-text($time-amber, 0.7);
  }
}
</style>
