<template>
    <div class="gallery" v-if="!fullImageViewWatcher">
      <div v-for="image in allImages" :key="image.id" class="card">
        <div class="image" :style="{ backgroundImage: 'url(' + image.urls.small + ')' }" @click="getFullImage(image.urls.full)"></div>
        <div class="info">
          <span>{{ image.user.first_name }}</span>
          <span>&#10084; {{ image.likes }} Likes</span>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'ImagesCards',
    data() {
        return {
            fullImageViewWatcher: false
        }
    },
    computed: mapGetters(['allImages']),
    methods: {
        ...mapActions(['getImages', 'PagesNumeric', 'getFullImage', 'showFullImage'])
    },
    created() {
        this.$store.watch(() => this.$store.getters.getShowFullImage, FullViewChange => {
            this.fullImageViewWatcher = FullViewChange
        })
    }
}
</script>

<style scoped>
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
</style>