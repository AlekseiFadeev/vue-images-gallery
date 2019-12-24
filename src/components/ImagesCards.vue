<template>
    <div class="gallery" v-if="!FullImageView">
      <div class="lds-ellipsis" v-if="!ImageLoad"><div></div><div></div><div></div><div></div></div>
      <div v-for="image in allImages" :key="image.id" class="card">
        <div class="image" :style="{ backgroundImage: 'url(' + image.urls.small + ')' }" @click="FullImage(image.urls.full)"></div>
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
    props: {
        ImageLoad: {
            type: Boolean,
            required: true
        },
        FullImageView: {
            type: Boolean,
            required: true
        }
    },
    computed: mapGetters(['allImages', 'getPagesNumeric']),
    methods: {
        ...mapActions(['getImages', 'PagesNumeric']),
        FullImage(link) {
            this.$emit('FullImage', link);
        }
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