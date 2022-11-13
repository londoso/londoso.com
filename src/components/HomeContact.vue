<template>
  <section class="contact" id="contact">
    <h2 class="contact__title wow fadeIn">{{ $t('common.contact') }}</h2>

    <ul class="contact__list">
      <li
        v-for="item in social"
        :key="item.url"
        class="contact__item wow fadeIn"
      >
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <i :class="cssSocialClass(item.name)"></i
        ></a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      social: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/londoso'
        },
        {
          name: 'twitter',
          url: 'https://www.twitter.com/londoso'
        },
        {
          name: 'github',
          url: 'https://www.github.com/londoso'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/londoso'
        }
      ]
    }
  },
  methods: {
    cssSocialClass (item) {
      return `contact__icon fab fa-${item}`
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/typography';

.contact {
  &__coffee {
    &-img {
      height: 28px;
      width: 101px;
    }
  }

  &__icon {
    color: $mandy;
    font-size: 28px;
    transition: 0.2s ease-in;

    &:hover {
      color: $silver;
    }
  }

  &__item {
    display: inline-block;
    transition: transform 0.1s ease-in;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover{
      transform: scale(1.05);
    }
  }

  &__list {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  &__title {
    @extend %section-title;
  }
}
</style>
