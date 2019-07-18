<template>
  <v-container  fluid class="ma-0 pa-0" text-xs-center fill-height>
    <topNav v-bind:currentSection="currentSection" v-bind:steps="steps"
    v-on:goTo="goTo"/>
    <component v-bind:is="currentMain"></component>
    <bottomNav v-bind:currentSection="currentSection" v-bind:steps="steps"
    v-on:goBack="goBack" v-on:goNext="goNext" v-on:goTo="goTo"/>
  </v-container>
</template>
<script>

import bottomNav from '@/components/tutorial/bottomNav.vue'
import topNav from '@/components/tutorial/topNav.vue'
// import { createNamespacedHelpers } from 'vuex'

// const { mapState, mapActions } = createNamespacedHelpers('tutorial')
export default {
  components: {

    bottomNav,
    topNav
  },
  data () {
    return {
      steps: ['Budget', 'Time', 'Resources', 'Needs', 'Source', 'Suggestions'],
      currentSection: 0
    }
  },
  computed: {
    currentMain () {
      const name = this.steps[this.currentSection].toLowerCase()
      return () => import(`@/components/tutorial/${name}/${name}.vue`)
    }
  },
  methods: {
    goBack: function () {
      if (this.currentSection === 0) {
        this.$router.go(-1)
      } else {
        this.currentSection = this.currentSection - 1
      }
    },
    goNext: function () {
      this.currentSection = this.currentSection + 1
    },
    goTo: function (goal) {
      this.currentSection = goal
    }
  }
}
</script>
