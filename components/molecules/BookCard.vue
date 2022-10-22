<template>
  <NuxtLink class="book-card" :to="`/books/${book.id}`">
    <img :src="`${book.imageLink}`" :alt="`Livro ${book.title}`"/>

    <div class="text">
      <h4>{{ book.title }}</h4>
      <p>{{ book.author }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Book } from '@/models/Book'

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true,
    } as PropOptions<Book>
  }
})
</script>

<style scoped>

</style>