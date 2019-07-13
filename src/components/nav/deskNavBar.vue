<template>



    <v-container grid-list-md fluid text-xs-center class="ma-0 pa-0">
        <v-layout row >
          <v-flex xs12>
            <v-stepper value="2">
    <v-stepper-header>
      <v-stepper-step step="1" complete>Select campaign settings</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2">Create an ad group</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Create an ad</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
          </v-flex>

        </v-layout>
      </v-container>


</template>
<script>
export default {
  name: 'deskNavBar',
  props: ['items'],
  data () {
    return {
    }
  }
}
</script>
