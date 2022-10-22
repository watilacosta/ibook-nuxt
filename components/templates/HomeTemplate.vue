<template>
  <div class="home-template">
    <PageTitle text="Bem vindo ao " strong-title="iBook" />
    <Releases />
  </div>
</template>

<script>
import PageTitle from '../atoms/PageTitle.vue';
  export default {
    components: { PageTitle }
}
</script>

<style lang="scss" scoped>
  .home-template {
    display: grid;
    grid-gap: 4rem;
  }
</style>