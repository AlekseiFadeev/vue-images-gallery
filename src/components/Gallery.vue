<template>
  <div class="app">
    <FullImage :FullImageLink="FullImageLink" :FullImageView="FullImageView" @FullImage="FullImage"></FullImage>
    <Pagination :NumPages="NumPages" :Page="Page" :TotalImages="TotalImages" @GetPhotos="GetPhotos"></Pagination>
    <ImagesCards :Images="Images" :ImageLoad="ImageLoad" :FullImageView="FullImageView" @FullImage="FullImage"></ImagesCards>
  </div>
</template>

<script>
import axios from 'axios'
import FullImage from './FullImage'
import Pagination from './Pagination'
import ImagesCards from './ImagesCards'

axios.defaults.baseURL = 'https://api.unsplash.com'
const key = "9404ae5ed465bacd0a7946af14a336d213fc0211605817fce330ba83886ce9a4"

export default {
  name: 'Gallery',
  components: {
    FullImage,
    Pagination,
    ImagesCards
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
      this.ImageLoad = false
      this.Page = PageNow

      axios.get('/photos/' + '?page=' + this.Page + '&per_page=' + this.PerPage + '&client_id=' + key)
      .then(response => {
        this.Images = response.data
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
</style>