<template>
  <div id="app">
    <v-app dark >
    <!-- <navBar app ></navBar> -->
    <tutorialTopNav v-if="navVisible"/>
      <v-content   v-bind:class="{ desk: $vuetify.breakpoint.mdAndUp,
          mobile: $vuetify.breakpoint.smAndDown }"
        >
        <router-view/>
      </v-content>
      <tutorialNav v-if="navVisible"/>
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
import tutorialNav from '@/components/tutorial/bottomNav.vue'
import tutorialTopNav from '@/components/tutorial/topNav.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('tutorialnav')

// import navBar from '@/components/nav/mainNavBar.vue'
export default {

  components: {
    tutorialNav,
    tutorialTopNav
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'navVisible'
    ])
  }
}
</script>
