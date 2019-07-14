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
export default {
  components: {

    bottomNav,
    topNav
  },
  data () {
    return {
      currentSection: 1,
      steps: ['Budget', 'Time', 'Resources', 'Needs', 'Suggestions']
    }
  },
  computed: {
    currentMain () {
      const name = this.steps[this.currentSection - 1].toLowerCase()
      return () => import(`@/components/tutorial/${name}.vue`)
    }
  },
  methods: {
    goBack: function () {
      if (this.currentSection === 1) {
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
