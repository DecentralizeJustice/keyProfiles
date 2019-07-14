<template>
  <v-container  fluid class="ma-0 pa-0" text-xs-center fill-height>
    <topNav/>
    <budget/>
    <bottomNav/>
  </v-container>
</template>
<script>
import budget from '@/components/tutorial/budget.vue'
import bottomNav from '@/components/tutorial/bottomNav.vue'
import topNav from '@/components/tutorial/topNav.vue'
export default {
  components: {
    budget,
    bottomNav,
    topNav
  },
  methods: {
    handleClick: function () {
    }
  },
  data () {
    return {

    }
  }
}
</script>
