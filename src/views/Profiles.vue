<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row wrap>
        <firstVisit v-if="true" />
    </v-layout>
  </v-container>
</template>
<script>
import firstVisit from '@/components/profiles/firstVisit/main.vue'
export default {
  components: {
    firstVisit
  },
  methods: {
    handleClick: function () {
      this.alert('test')
    }
  },
  data () {
    return {

    }
  }
}
</script>
