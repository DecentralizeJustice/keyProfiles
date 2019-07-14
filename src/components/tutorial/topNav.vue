<template>
  <v-layout  row wrap align-center
    style="height:10%;position: absolute;top:0;width:100%;">
    <v-flex xs12>
      <v-stepper value="2" class="elevation-0" non-linear>
        <v-stepper-header>
          <v-stepper-step step="1">Budget</v-stepper-step>
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
</template>
<script>
export default {
  name: 'topNav',
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
