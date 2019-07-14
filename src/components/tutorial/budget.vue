<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row wrap>

    <v-flex xs10   md5>
      <videoCard :videoInfo="videoInfo" />
    </v-flex>

    <v-flex xs10   md5 >
      <v-card>
        <v-card-title primary-title>
          <div>

            <div> {{ card_text }} </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs10   md5 >
      <div>
        <v-btn color="success" to="/tutorial">Start Tutorial</v-btn>
      <v-btn color="info">Profile Tool</v-btn>
      </div>
    </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import videoCard from '@/components/videoCard.vue'
export default {
  name: 'budget',
  components: {
    videoCard
  },
  data () {
    return {
      videoInfo: {
        title: 'Introduction',
        videoLink: 'https://res.cloudinary.com/dylevfpbl/video/upload/v1551009310/decenMain/yes.mp4'
      },
      card_text: `Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad,
      te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no
      invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec
      propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.`

    }
  },
  methods: {
    startQuestionnaire () {
      this.$emit('startQuestionnaire')
    }
  }
}
</script>
