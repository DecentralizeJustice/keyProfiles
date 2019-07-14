<template>
  <v-layout align-start row style="height:80%;position: relative;top:0%">
      <v-flex xs10   md8 style="background-color: black;height:100%;top:0px;position: relative;">

      </v-flex>

      <v-flex xs10   md4 style="background-color: red;height:100%;">
      </v-flex>

  </v-layout>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    startQuestionnaire () {
      this.$emit('startQuestionnaire')
    }
  }
}
</script>
