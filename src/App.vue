<template>
  <div id="app">
    <v-app dark >
      <navBar/>
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
  height: 100%;
  width: 100vw;
  background-image: url("https://res.cloudinary.com/dylevfpbl/image/upload/v1561245205/keyapp/sky.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.mobile{
  font-family: 'Karla', sans-serif;
  height: 100%;
  width: 100vw;
  background-image: url("https://res.cloudinary.com/dylevfpbl/image/upload/v1561274379/keyapp/nightsky.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
import navBar from '@/components/nav/mainNavBar.vue'
export default {

  components: {
    navBar
  },
  data () {
  },
  computed: {
    // imageHeight () {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return '220px'
    //     case 'sm': return '400px'
    //     case 'md': return '500px'
    //     case 'lg': return '600px'
    //     case 'xl': return '800px'
    //   }
    // }
  }
}
</script>
