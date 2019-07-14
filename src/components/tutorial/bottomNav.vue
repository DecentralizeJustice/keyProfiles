<template>

  <v-layout  row wrap align-center class="elevation-0"
    style="height:10%;position: absolute;bottom:0;width:100%;">
    <v-flex xs4 >
        <v-btn color="info" v-on:click="goBack">Back</v-btn>
    </v-flex>
    <v-flex xs4>
        <v-btn color="red">
          <v-icon>video_library</v-icon>
        </v-btn>
    </v-flex>
    <v-flex xs4>
        <v-btn color="success">Next</v-btn>
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
    }
  }
}
</script>
