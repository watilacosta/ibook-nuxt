<template>
  <div class="book-list">
    <h2>Listagem de Livros</h2>

    <BookCard :key="book.id" :for="book in $books" :book="book" />
  </div>
</template>

<script>
import BookCard from '../molecules/BookCard.vue';
  import { books } from '@/store';

  export default {
    components: { BookCard },
    computed: {
        $books() {
            return books.$all;
        }
    }
}
</script>

<style lang="scss" scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  @include screen('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include screen('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>