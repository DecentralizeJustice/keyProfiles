<template>
  <v-container  fluid class="ma-0 pa-0" text-xs-center fill-height>
    <topNav v-bind:currentSection="currentSection" v-bind:steps="steps" />
    <component :is="currentMain"></component>
    <bottomNav v-bind:currentSection="currentSection" v-bind:steps="steps" v-on:goBack="goBack"/>
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
      return () => import(`@/components/tutorial/${this.steps[this.currentSection - 1].toLowerCase()}.vue`)
    }
  },
  methods: {
    goBack: function () {
      if (this.currentQuestion === 0) {
        this.$emit('exit')
      } else {
      }
    }
  }
}
</script>
