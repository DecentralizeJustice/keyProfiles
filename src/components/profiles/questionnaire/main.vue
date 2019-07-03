<template>
  <v-container  text-xs-center fluid grid-list-md>
    <v-layout  align-center justify-space-around row wrap>
      <component :is="currentQuest"></component>
      <!-- <quest1 v-if='currentQuestion === 0'/> -->
      <navBar class="mt-4" />
    </v-layout>
  </v-container>
</template>
<script>
import navBar from '@/components/profiles/questionnaire/nav.vue'

export default {
  name: 'questionnairMain',
  components: {
    navBar
  },
  data () {
    return {
      currentQuestion: 0,
      maxQuestion: 0
    }
  },
  computed: {
    currentQuest () {
      return () => import(`@/components/profiles/questionnaire/questions/quest${this.currentQuestion}.vue`)
    }
  }
}
</script>
