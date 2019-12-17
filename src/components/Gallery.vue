<template>
  <div class="app">
    <div class="next" @click="GetPhotos()">Next</div>
    <div class="gallery">
      <div v-for="image in Images" :key="image.id" class="card">
        <div class="image" :style="{ backgroundImage: 'url(' + image.urls.small + ')' }"></div>
        <div class="author">{{ image.user.first_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com'
const key = "9404ae5ed465bacd0a7946af14a336d213fc0211605817fce330ba83886ce9a4"

export default {
  name: 'Gallery',
  data() {
    return {
      Images: [],
      Page: 1,
      PerPage: 9
    }
  },
  mounted() {
    this.GetPhotos()
  },
  methods: {
    GetPhotos() {
      axios
      .get('/photos/' + '?page=' + this.Page + '&per_page=' + this.PerPage, {
        params: {
          client_id: key
        }
      })
      .then(response => {
        this.Images = response.data
      })
      .catch(error => {
        console.log(error)
      })

      this.Page = this.Page+1
    }
  }
}
</script>

<style scoped>
  .gallery {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .next {
    background-color: gray;
    width: 100px;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    font-size: 24px;
    cursor: pointer;
    transition: all .5s ease;
  }

  .next:hover {
  background-color: lightgray;
  transform: scale(1.2);
  }

  .card {
    margin: 20px;
    width: 300px;
    height: 300px;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .author{
    margin-top: 3px;
    text-align: left;
    font-size: 11px;
    color: gray;
  }
</style>