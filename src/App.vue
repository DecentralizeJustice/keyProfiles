<template>
  <div id="app">
    <v-app dark >
    <!-- <navBar app ></navBar> -->

      <v-content   v-bind:class="{ desk: $vuetify.breakpoint.mdAndUp,
          mobile: $vuetify.breakpoint.smAndDown }"
        >
        <router-view/>
      </v-content>

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

  },
  data () {
    return {

    }
  },
  computed: {
  }
}
</script>
