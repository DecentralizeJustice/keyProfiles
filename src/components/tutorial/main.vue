<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row fill-height wrap>
      <landingPage v-if="this.currentWindow === 'landingPage'"
      v-on:startQuestionnaire="selectNewWindow('questionnairMain')"/>
      <questionnairMain v-on:exit="exit"
      v-if="this.currentWindow === 'questionnairMain'"/>
    </v-layout>
  </v-container>
</template>
<script>
import questionnairMain from '@/components/profiles/questionnaire/main.vue'
import landingPage from '@/components/firstVisit/landingPage.vue'
export default {
  name: 'firstVisit',
  components: {
    questionnairMain,
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
