<template>
  <div>
    <v-container grid-list-md fluid text-xs-center class="ma-0 pa-0" :height="70">
        <v-layout row wrap>
          <v-flex xs12>
            <v-stepper value="2">
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
    </div>
</template>
<script>
export default {
  name: 'tutorialTopNav',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
