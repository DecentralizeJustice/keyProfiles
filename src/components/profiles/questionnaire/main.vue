<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row wrap>
      <quest1 v-if='currentQuestion === 0'/>
    </v-layout>
  </v-container>
</template>
<script>
import quest1 from '@/components/profiles/questionnaire/questions/quest1.vue'
export default {
  name: 'questionnairMain',
  components: {
    quest1
  },
  data () {
    return {
      currentQuestion: 0
    }
  }
}
</script>
