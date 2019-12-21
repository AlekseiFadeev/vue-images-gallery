<template>
  <div class="app">
    <FullImage :FullImageLink="FullImageLink" :FullImageView="FullImageView" @FullImage="FullImage"></FullImage>
    <Pagination :NumPages="NumPages" :Page="Page" :TotalImages="TotalImages" @GetPhotos="GetPhotos"></Pagination>
    <div class="gallery">
      <div class="lds-ellipsis" v-if="!ImageLoad"><div></div><div></div><div></div><div></div></div>
      <div v-for="image in Images" :key="image.id" class="card">
        <div class="image" :style="{ backgroundImage: 'url(' + image.urls.small + ')' }" @click="FullImage(image.urls.full)"></div>
        <div class="info">
          <span>{{ image.user.first_name }}</span>
          <span>&#10084; {{ image.likes }} Likes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FullImage from './FullImage'
import Pagination from './Pagination'

axios.defaults.baseURL = 'https://api.unsplash.com'
const key = "9404ae5ed465bacd0a7946af14a336d213fc0211605817fce330ba83886ce9a4"

export default {
  name: 'Gallery',
  components: {
    FullImage,
    Pagination
  },
  data() {
    return {
      Images: [],
      Page: 1,
      PerPage: 9,
      TotalImages: '',
      NumPages: [],
      ImageLoad: false,
      FullImageView: false,
      FullImageLink: ''
    }
  },
  mounted() {
    this.GetPhotos(1)
  },
  methods: {
    GetPhotos(PageNow) {
      this.ImageLoad = false;
      this.Page = PageNow

      axios.get('/photos/' + '?page=' + this.Page + '&per_page=' + this.PerPage, {
        params: {
          client_id: key
        }
      })
      .then(response => {
        this.Images = response.data
        console.log(response.data);
        this.TotalImages = parseInt(response.headers['x-total'])
      })
      .catch(error => {
        console.log(error)
      })
      
      this.ImageLoad = true;
      this.PagesNumeric()
    },
    PagesNumeric() {
      this.NumPages = []
      let p = this.Page
      if(p == 1){
        for(let i = 7; p <= i; p++){
          this.NumPages.push(p)
        }
      } else {
        if(p == 2){
          p = p - 1;
          for(let i = 7; p <= i; p++){
            this.NumPages.push(p)
          }
        }else {
          if(p == 3){
            p = p - 2;
            for(let i = 7; p <= i; p++){
              this.NumPages.push(p)
            }
          }else {
              p = p - 3;
              for(let i = p+6; p <= i; p++){
                this.NumPages.push(p)
              }
            }
          }
        }
    },
    FullImage(link) {
      this.FullImageView = !this.FullImageView
      this.FullImageLink = link
    }
  }
}
</script>

<style scoped>
  .app {
    width: 1100px;
    margin: 0 auto;
  }

  .gallery {
    display: flex;
    justify-content: space-between;
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
    cursor: pointer;
    background-position: center;
    background-size: cover;
  }

  .info{
    margin-top: 3px;
    text-align: left;
    font-size: 11px;
    color: gray;
    display: flex;
    justify-content: space-between;
  }

  /* LOADER */

  .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: gray;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

/* /LOADER */
</style>