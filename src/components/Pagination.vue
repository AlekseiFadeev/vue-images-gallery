<template>
    <div class="pagination">
      <div class="prevPage" v-bind:class="{hide: this.Page == 1}" @click="getImages(Page-1)">Previous</div>
      <div class="numeric">
        <div class="numPage" v-for="NumPage in getPagesNumeric" :key="NumPage.id" v-bind:class="{active: NumPage == Page}" @click="getImages(NumPage)">{{ NumPage }}</div>
      </div>
      <div class="nextPage" @click="getImages(Page+1)">Next</div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'Pagination',
    computed: mapGetters(['getPagesNumeric', 'Page']),
    mounted() {
        this.getImages(this.Page)
    },
    methods: mapActions(['getImages'])
}
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: space-between;
  }

  .nextPage, .prevPage {
    margin: 5px 20px;
    width: 80px;
    height: 30px;
    background-color: lightgray;
    line-height: 30px;
    cursor: pointer;
    transition: transform .5s ease;
  }

  .hide {
    visibility: hidden;
  }

  .nextPage:hover, .prevPage:hover {
    background-color: gray;
    transform: scale(1.3);
  }

  .numPage {
    display: inline-block;
    margin: 5px;
    width: 30px;
    height: 30px;
    background-color: lightgray;
    line-height: 30px;
    cursor: pointer;
    transition: all .5s ease;
  }

  .numPage:hover {
    background-color: gray;
    transform: scale(1.3);
  }

  .active {
    background-color: lightblue;
    transform: scale(1.2);
  }
</style>