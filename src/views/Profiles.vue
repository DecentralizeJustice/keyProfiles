<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row wrap>
        <firstVisit v-if="true" v-on:startQuestionnaire/>
        <questionnairMain v-if="false"/>
    </v-layout>
  </v-container>
</template>
<script>
import firstVisit from '@/components/profiles/firstVisit/firstVisit.vue'
import questionnairMain from '@/components/profiles/questionnaire/main.vue'
export default {
  components: {
    firstVisit,
    questionnairMain
  },
  methods: {
    handleClick: function () {
      this.alert('test')
    }
  },
  data () {
    return {

    }
  }
}
</script>
