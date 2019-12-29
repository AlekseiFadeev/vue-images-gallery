<template>
    <div class="pagination">
      <router-link class="prevPage" v-bind:class="{hide: this.Page == 1}" :to="{ name: 'PageNow', params: {id: Page-1} }">Previous</router-link>
      <div class="numeric">
        <router-link class="numPage" 
          v-for="NumPage in getPagesNumeric" 
          :key="NumPage.id" 
          :class="{active: NumPage == Page}"
          :to="{ name: 'PageNow', params: {id: NumPage} }">
          {{ NumPage }}
        </router-link>
      </div>
      <router-link class="nextPage" :to="{ name: 'PageNow', params: {id: Page+1} }">Next</router-link>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'Pagination',
    computed: mapGetters(['getPagesNumeric', 'Page']),
    created() {
        this.getImages(1)
    },
    watch: {
      $route(to) {
        this.getImages(to.params.id)
        console.log(to.params.id)
      }
    },
    methods: mapActions(['getImages'])
}
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: space-between;
  }

  .nextPageWrap, .prevPageWrap {
    width: 80px;
    height: 30px;
  }

  .nextPage, .prevPage {
    display: block;
    margin: 5px 20px;
    width: 80px;
    height: 30px;
    background-color: lightgray;
    line-height: 30px;
    cursor: pointer;
    transition: transform .5s ease;
    text-decoration: none;
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
    text-decoration: none;
  }

  .numPage:hover {
    background-color: gray;
    transform: scale(1.3);
  }

  .active {
    background-color: lightblue;
    transform: scale(1.2);
  }

  a:visited {
    color: #2c3e50;
  }

  a:link {
    color: #2c3e50;
  }
</style>