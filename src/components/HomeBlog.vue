<template>
  <section class="blogs" id="blogs">
    <h2 class="blogs__title wow fadeIn">{{ $t('common.blogs') }}</h2>
    <ul class="blogs__list">
      <li
        v-for="blog in filteredBlogs"
        :key="blog.title"
        class="blogs__item wow fadeIn"
      >
        <span class="blogs__date"
          >{{ blog.date ? localizedDate(blog.date) : ''
          }}{{ blog.date && blog.event ? '  |  ' : '' }} {{ blog.event }}</span
        >
        <h3><a :href=blog.url>{{blog.title}}</a></h3>
      </li>
    </ul>
    <button class="blogs__show-more" @click="showMore = !showMore">
      <span v-if="!showMore">{{ $t('common.showMore') }}</span>
      <span v-else>{{ $t('common.showLess') }}</span>
    </button>
  </section>
</template>

<script>
import blogs from '@/assets/data/blogs.js'

export default {
  data () {
    return {
      blogs,
      showMore: false
    }
  },
  computed: {
    filteredBlogs () {
      if (this.showMore) {
        return this.blogs
      } else {
        return this.blogs.slice(0, 4)
      }
    }
  },
  methods: {
    localizedDate (blogDate) {
      const dateElement = new Date(`${blogDate}T03:24:00`)
      const locale = this.$i18n.locale

      return dateElement.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.blogs {
  &__date {
    color: $mandy;
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  &__item {
    padding: 30px 10px;
    position: relative;

    @include from('lg') {
      padding: 50px 20px;
      transition: all 0.3s ease-in;

      &:hover {
        border-color: transparent;
        color: $white;

        + .blogs__item {
          border-color: transparent;
        }

        .blogs__date,
        .blogs__resource {
          color: $white;
        }

        &::after {
          opacity: 1;
          width: calc(100% + 60px);
        }
      }
    }

    &:not(:first-child) {
      border-top: 1px solid $silver;

      @include from('lg') {
        &:hover {
          border-color: transparent;
        }
      }
    }

    &::after {
      background: $mandy;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: all 0.3s ease-in;
      top: 0;
      width: 100%;
      z-index: -1;
    }
  }

  &__resource {
    color: $mandy;
    display: inline-block;
    font-size: 12px;
    padding-top: 5px;
    text-transform: uppercase;

    &:not(:last-child) {
      &::after {
        content: '|';
        margin: 0 5px;
      }
    }
  }

  &__show-more {
    @extend %cta;

    background: none;
    border: none;
    cursor: pointer;
  }

  &__title {
    @extend %section-title;
  }
}
</style>