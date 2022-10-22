<template>
  <div class="presentation">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis fuga quia delectus officia sint maiores, error ipsam accusamus eum neque maxime minima officiis porro iste adipisci itaque pariatur suscipit. Necessitatibus.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ipsa dolorem iusto dolores explicabo autem aliquam voluptatem exercitationem, repellendus natus sapiente dicta id quo aperiam. Debitis magnam reiciendis veritatis blanditiis.
    </p>

    <img src="@/assets/img/presentation.svg" alt="Ibook presentation" />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .presentation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    @include screen('small', 'medium') {
      grid-template-columns: 1fr;
    }
    p {
      line-height: 26px;
    }
    img {
      max-width: 100%;
    }
  }
</style>