<template>
  <v-layout  row wrap align-center
    style="height:10%;position:absolute;top:0;width:100%;">
    <v-flex xs2>

    </v-flex>
    <v-flex v-for="(item, index) in steps" :key="item" xs2>
      <v-btn :color="(index+1 === currentSection ) ? 'primary' : 'secondary'" >
        {{index+1}}. {{item}}
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'topNav',
  components: {
  },
  props: ['currentSection', 'steps'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
