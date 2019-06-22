<template>
  <div id="app">
    <v-app dark >
      <v-content class="all">
        <navBar/>
        <router-view/>
    </v-content>
  </v-app>
 </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700');
.all{
  font-family: 'Karla', sans-serif;
  height: 100vh;
  width: 100vw;
  background-image: url("https://res.cloudinary.com/dylevfpbl/image/upload/v1557131879/keyapp/black-and-white.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
import navBar from '@/components/mainNavBar.vue'
export default {
  components: {
    navBar
  },
  data () {
  }
}
</script>
