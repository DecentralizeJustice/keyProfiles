<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row wrap>
    <v-flex xs10 md5 >
      <videoCard :videoInfo="videoInfo" />
    </v-flex>
      <v-flex xs10   md5 >
        <v-card>
          <v-layout align-center justify-space-around row wrap>
          <v-flex xs10>
              <div>
                <v-btn   large :class="{flat: false}" color="success">0</v-btn>
                <v-btn  flat large color="error">50-100</v-btn>
                <v-btn  flat large color="warning">100-200</v-btn>
                <v-btn flat large color="info">200-500</v-btn>
                <v-btn flat large color="yellow">500+</v-btn>
              </div>
            </v-flex>
            </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import videoCard from '@/components/videoCard.vue'
export default {
  name: 'quest0',
  components: {
    videoCard
  },
  data () {
    return {
      videoInfo: {
        title: 'Budget',
        videoLink: 'https://res.cloudinary.com/dylevfpbl/video/upload/v1551009310/decenMain/yes.mp4'
      },
      price: 0
    }
  }
}
</script>
