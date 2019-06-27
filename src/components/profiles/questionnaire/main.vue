<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row wrap>

    <v-flex xs10   md5 >
      <v-card>
          <v-card-title primary-title text-xs-center class="justify-center">
            <div>
              <h3 text-xs-center class="headline">Budget</h3>
            </div>
          </v-card-title>
          <video-player :videoLink="videoLink"/>
      </v-card>
    </v-flex>

    <v-flex xs10   md5 >

    </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
  name: 'questionnairMain',
  components: { VideoPlayer
  },
  data () {
    return {
      videoLink: 'https://res.cloudinary.com/dylevfpbl/video/upload/v1551009310/decenMain/yes.mp4'
    }
  }
}
</script>
