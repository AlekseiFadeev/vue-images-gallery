<template>
    <div class="fullView" v-if="fullImageViewWatcher">
      <div class="fullView-description">
        <span class="fullView-open"><a v-bind:href="'' + fullLink + ''" target="_blank">Open full in new tab</a></span>
        <span class="close" @click="getFullImage('')">&#215;</span>
      </div>
      <div class="fullView-image" :style="{ backgroundImage: 'url(' + fullLink + ')' }"></div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
    name: 'fullView',
    data() {
        return {
            fullImageViewWatcher: false
        }
    },
    computed: {
        fullLink() {
            return this.$store.getters.FullImage
        }
    },
    methods: mapActions(['getFullImage']),
    created() {
        this.$store.watch(() => this.$store.getters.getShowFullImage, FullViewChange => {
            this.fullImageViewWatcher = FullViewChange
        })
    },
}
</script>

<style scoped>
  .fullView {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    z-index: 999;
  }

  .fullView-description {
    color: lightgray;
    font-size: 50px;
    margin: 15px;
    display: flex;
    justify-content: space-between;
  }

  .fullView-open {
    font-size: 24px;
    line-height: 50px;
    cursor: pointer;
  }

  .fullView-open a:visited {
    color: lightgray;
  }

  .fullView-open a:link {
    color: lightgray;
  }

  .close {
    cursor: pointer;
  }

  .fullView-image {
    width: 90%;
    height: 85%;
    background-color: #fff;
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    border: 10px solid #fff;
  }
</style>