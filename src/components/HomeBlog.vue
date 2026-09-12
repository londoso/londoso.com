<template>
  <section
    id="blog"
    class="cards"
  >
    <h2 class="cards__title reveal">
      {{ t('common.blogs') }}
    </h2>
    <ul class="cards__list">
      <li
        v-for="blog in visibleBlogs"
        :key="blog.title"
        class="card reveal"
      >
        <span class="card__date">{{ localizedDate(blog.date) }}</span>
        <h3 class="card__title">
          <a
            :href="blog.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ blog.title }}
          </a>
        </h3>
      </li>
    </ul>
    <button
      v-if="blogs.length > limit"
      class="cards__more"
      @click="showAll = !showAll"
    >
      {{ showAll ? t('common.showLess') : t('common.showMore') }}
    </button>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import blogs from '@/assets/data/blogs.js'

const { t, locale } = useI18n()
const limit = 4
const showAll = ref(false)

const visibleBlogs = computed(() =>
  showAll.value ? blogs : blogs.slice(0, limit)
)

function localizedDate (date) {
  if (!date) return ''
  return new Date(`${date}T03:24:00`).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style lang="scss" src="@/scss/_cards.scss"></style>
