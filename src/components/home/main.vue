<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row fill-height wrap>
      <landingPage v-if="true"/>
    </v-layout>
  </v-container>
</template>
<script>
import landingPage from '@/components/home/landingPage.vue'
export default {
  name: 'firstVisit',
  components: {
    landingPage
  },
  data () {
    return {
      currentWindow: 'landingPage'
    }
  },
  methods: {
    selectNewWindow (newWindow) {
      this.currentWindow = newWindow
    },
    exit () {
      this.currentWindow = 'landingPage'
    }
  }
}
</script>
