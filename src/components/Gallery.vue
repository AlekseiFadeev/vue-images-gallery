<template>
    <div class="gallery">
        Thats was gallery.
    </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com'
const key = "9404ae5ed465bacd0a7946af14a336d213fc0211605817fce330ba83886ce9a4"

export default {
  name: 'Gallery',
  images: [],
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

