<template>
  <div class="hero" id="hero">
    <div class="hero__content">
      <div class="hero__text">
        <p class="wow zoomIn">{{ $t('common.heroMessage') }}</p>
        <h1 class="hero__title wow fadeIn">
          <span class="wow flipInY" data-wow-delay="0.15s">A</span>
          <span class="wow flipInY" data-wow-delay="0.20s">n</span>
          <span class="wow flipInY" data-wow-delay="0.25s">d</span>
          <span class="wow flipInY" data-wow-delay="0.30s">e</span>          
          <span class="wow flipInY" data-wow-delay="0.35s">r</span>
          <span class="wow flipInY" data-wow-delay="0.40s">s</span>
          <span class="wow flipInY" data-wow-delay="0.45s">o</span>
          <span class="wow flipInY" data-wow-delay="0.50s">n</span>
          <br />
          <span class="wow flipInY" data-wow-delay="0.55s">L</span>
          <span class="wow flipInY" data-wow-delay="0.6s">o</span>
          <span class="wow flipInY" data-wow-delay="0.65s">n</span>
          <span class="wow flipInY" data-wow-delay="0.70s">d</span>
          <span class="wow flipInY" data-wow-delay="0.75s">o</span>
          <span class="wow flipInY" data-wow-delay="0.80s">ñ</span>
          <span class="wow flipInY" data-wow-delay="0.85s">o</span>
        </h1>
      </div>
      <div class="hero__image-wp wow zoomIn">
        <img
          class="hero__image"
          src="../assets/images/hero.jpg"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.hero {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  max-height: 600px;
  padding-top: 60px;
  position: relative;

  @include from('md') {
    max-height: 800px;
  }

  @include from('lg') {
    max-height: unset;
    min-height: 740px;
  }

  &__content {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;

    @include from('md') {
      justify-content: space-between;
    }
  }

  &__image-wp {
    width: 250px;

    @include from('md') {
      width: 300px;
    }

    @include from('lg') {
      transform: translateX(80px);
      width: 500px;
    }
  }

  &__text {
    color: $mandy;
    font-weight: 700;
    left: 0;
    position: absolute;

    @include from('md') {
      position: initial;
    }

    @include from('lg') {
      margin-right: -60px;
    }

    p {
      font-size: 30px;
      margin: 0;
      text-decoration: underline;
    }
  }

  &__title {
    font-size: 60px;

    @include from('md') {
      font-size: 5em;
    }
  }
}
</style>
