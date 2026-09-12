<template>
  <header
    class="nav"
    :class="{ 'nav--open': isOpen }"
  >
    <a
      class="nav__brand"
      href="#hero"
      @click="close"
    >
      <span class="nav__bolt">⚡</span>
      <span class="nav__brand-text">A. Londoño</span>
    </a>

    <button
      class="nav__toggle"
      :aria-expanded="isOpen"
      aria-label="Menu"
      @click="toggle"
    >
      <span class="nav__toggle-bar" />
      <span class="nav__toggle-bar" />
      <span class="nav__toggle-bar" />
    </button>

    <nav class="nav__menu">
      <ul class="nav__list">
        <li
          v-for="link in links"
          :key="link.hash"
          class="nav__item"
        >
          <a
            class="nav__link"
            :href="link.hash"
            @click="close"
          >
            {{ t(link.key) }}
          </a>
        </li>
      </ul>

      <div class="nav__locale">
        <button
          class="nav__locale-btn"
          :class="{ 'is-active': locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
        <span class="nav__locale-sep">/</span>
        <button
          class="nav__locale-btn"
          :class="{ 'is-active': locale === 'es' }"
          @click="setLocale('es')"
        >
          ES
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isOpen = ref(false)

const links = [
  { key: 'common.about', hash: '#about' },
  { key: 'common.blogs', hash: '#blog' },
  { key: 'common.talks', hash: '#talks' },
  { key: 'common.contact', hash: '#contact' }
]

function toggle () {
  isOpen.value = !isOpen.value
  const isMobile = document.documentElement.clientWidth < 1024
  document.documentElement.style.overflow =
    isOpen.value && isMobile ? 'hidden' : 'auto'
}

function close () {
  isOpen.value = false
  document.documentElement.style.overflow = 'auto'
}

function setLocale (value) {
  locale.value = value
}
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 5%;
  background: rgba($void, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba($flux-cyan, 0.25);
  box-shadow: 0 1px 22px rgba($flux-blue, 0.25);

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Orbitron', 'Orbitron Fallback', sans-serif;
    font-weight: 800;
    letter-spacing: 2px;
    color: $ink;

    &:hover { color: $ink; }
  }

  &__bolt {
    @include neon-text($time-amber, 1);
    font-size: 20px;
  }

  &__brand-text {
    @include neon-text($flux-cyan, 0.4);
  }

  &__toggle {
    display: inline-flex;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;

    @include from('lg') { display: none; }
  }

  &__toggle-bar {
    width: 26px;
    height: 2px;
    background: $flux-cyan;
    box-shadow: 0 0 8px rgba($flux-cyan, 0.9);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  &--open {
    .nav__toggle-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav__toggle-bar:nth-child(2) { opacity: 0; }
    .nav__toggle-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  }

  &__menu {
    position: fixed;
    inset: 62px 0 auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    padding: 40px 0;
    background: rgba($night, 0.97);
    border-bottom: 1px solid rgba($flux-cyan, 0.2);
    transform: translateY(-140%);
    transition: transform 0.32s cubic-bezier(0.2, 0.7, 0.2, 1);

    @include from('lg') {
      position: static;
      flex-direction: row;
      gap: 34px;
      padding: 0;
      background: none;
      border: none;
      transform: none;
    }
  }

  &--open .nav__menu {
    transform: translateY(0);
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    @include from('lg') {
      flex-direction: row;
      gap: 30px;
    }
  }

  &__link {
    font-family: 'Orbitron', 'Orbitron Fallback', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: $muted;

    &:hover { @include neon-text($flux-cyan, 0.9); }
  }

  &__locale {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: $muted;
  }

  &__locale-btn {
    padding: 4px 6px;
    font-family: 'Orbitron', 'Orbitron Fallback', sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    color: $muted;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;

    &.is-active,
    &:hover { @include neon-text($time-amber, 0.9); }
  }

  &__locale-sep { opacity: 0.4; }
}
</style>
