<template>
    <div class="gallery">
        <div v-for="image in images" :key="image.id" class="card">
          <div class="image" :style="{ backgroundImage: 'url(' + image.urls.small + ')' }"></div>
          <div class="author">{{ image.user.first_name }}</div>
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
      images: []
    }
  },
  mounted() {
    axios
      .get('/photos/', {
        params: {
          client_id: key
        }
      })
      .then(response => {
        this.images = response.data
        console.log(response.data[0].urls.small)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
  .gallery {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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