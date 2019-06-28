<template>
  <v-card>
      <v-card-title primary-title text-xs-center class="justify-center">
        <div>
          <h3 text-xs-center class="headline">{{videoInfo.title}}</h3>
        </div>
      </v-card-title>
      <video-player :videoLink="videoInfo.videoLink"/>
  </v-card>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
  name: 'videoCard',
  props: ['videoInfo'],
  components: {
    VideoPlayer
  },
  data () {
    return {
    }
  }
}
</script>
