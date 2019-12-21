<template>
    <div class="pagination">
      <div class="prevPage" v-bind:class="{hide: this.Page == 1}" @click="GetPhotos(Page-1)">Previous</div>
      <div class="numeric">
        <div class="numPage" v-for="NumPage in NumPages" :key="NumPage.id" v-bind:class="{active: NumPage == Page}" @click="GetPhotos(NumPage)">{{ NumPage }}</div>
      </div>
      <div class="nextPage" v-bind:class="{hide: this.Page == this.TotalImages}" @click="GetPhotos(Page+1)">Next</div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        NumPages: {
            type: Array,
            required: true
        },
        Page: {
            type: Number,
            required: true
        },
        TotalImages: {
            type: [Number, String],
            required: true
        }
    },
    methods: {
        GetPhotos(PageNow) {
            this.$emit('GetPhotos', PageNow);
        }
    }
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