<template>
  <div class="app">
    <FullImage></FullImage>
    <Pagination></Pagination>
    <ImagesCards></ImagesCards>
  </div>
</template>

<script>
import FullImage from './FullImage'
import Pagination from './Pagination'
import ImagesCards from './ImagesCards'

export default {
  name: 'Gallery',
  components: {
    FullImage,
    Pagination,
    ImagesCards
  }
}
</script>

<style scoped>
  .app {
    width: 1100px;
    margin: 0 auto;
  }
</style>