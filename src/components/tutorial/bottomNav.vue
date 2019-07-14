<template>

  <v-layout  row wrap align-center class="elevation-0"
    style="height:10%;position: absolute;bottom:0;width:100%;">
    <v-flex xs4 >
        <v-btn color="info" v-on:click="goBack()">Back</v-btn>
    </v-flex>
    <v-flex xs4>
        <v-btn color="red">
          <v-icon>video_library</v-icon>
        </v-btn>
    </v-flex>
    <v-flex xs4>
        <v-btn color="success" v-on:click="goNext()" v-if='currentSection !== steps.length'>Next</v-btn>
        <v-btn color="red" v-if='currentSection === steps.length' v-on:click="goTo(1)">Start Over</v-btn>
        <v-btn color="pink" v-if='currentSection === steps.length' >Explore More</v-btn>
    </v-flex>
  </v-layout>

</template>
<style>
</style>
<script>
export default {
  name: 'bottomNav',
  props: ['currentSection', 'steps'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    goBack: function () {
      this.$emit('goBack')
    },
    goNext: function () {
      this.$emit('goNext')
    },
    goTo: function (aim) {
      this.$emit('goTo', aim)
    }
  }
}
</script>
