<template>
  <div id="app">
    <v-app dark >
    <!-- <navBar app ></navBar> -->
      <v-content   v-bind:class="{ desk: $vuetify.breakpoint.mdAndUp,
          mobile: $vuetify.breakpoint.smAndDown }"
        >
        <router-view/>
      </v-content>
      <!-- <v-bottom-nav
      :value="true"
      absolute
      app
      :height="70"
    >
    <v-stepper value="2">
<v-stepper-header>
<v-stepper-step step="1" complete>Select campaign settings</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step step="2">Create an ad group</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step step="3">Create an ad</v-stepper-step>
</v-stepper-header>
</v-stepper>
    </v-bottom-nav> -->
    </v-app>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700');
.desk{
  font-family: 'Karla', sans-serif;
}
.mobile{
  font-family: 'Karla', sans-serif;
}
</style>
<script>
// import navBar from '@/components/nav/mainNavBar.vue'
export default {

  components: {
    // navBar
  },
  data () {
    return {

    }
  },
  computed: {
  }
}
</script>
