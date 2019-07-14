<template>
  <v-container  fluid class="ma-0 pa-0" text-xs-center fill-height>
    <v-layout  row wrap align-center
      style="height:10%;position: absolute;top:0;width:100%;">
      <v-flex xs12>
        <v-stepper value="2" class="elevation-0" non-linear>
          <v-stepper-header>
            <v-stepper-step step="1" complete>Budget</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2">Time</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Resources</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Suggestions</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row style="height:90%;position: absolute;top:0">

      <budget/>

    </v-layout>

    <v-layout  row wrap align-center class="elevation-0"
      style="height:10%;position: absolute;bottom:0;width:100%;">
      <v-flex xs12>
        <v-stepper value="2" class="elevation-0" non-linear>
          <v-stepper-header>
            <v-stepper-step step="1" complete>Budget</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2">Time</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Resources</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Suggestions</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
import budget from '@/components/tutorial/budget.vue'
export default {
  components: {
    budget
  },
  methods: {
    handleClick: function () {
    }
  },
  data () {
    return {

    }
  }
}
</script>
