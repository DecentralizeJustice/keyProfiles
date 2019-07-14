<template>
  <v-layout align-start row style="height:80%;position: relative;top:0%">
      <v-flex xs10   md8 style="background-color: #FAFAFA;height:100%;top:0px;position: relative;">

      </v-flex>

      <v-flex xs10   md4 style="background-color: #bbdefb;height:100%;">
      </v-flex>

  </v-layout>
</template>
<script>
export default {
  name: 'budget',
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
