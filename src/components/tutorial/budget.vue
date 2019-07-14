<template>
  <v-layout align-center row style="height:80%;position: relative;top:0%">
      <v-flex md8 style="background-color: #FAFAFA;height:100%;top:0px;position: relative;">

      </v-flex>

      <v-flex md4 style="background-color: #bbdefb;height:100%;" >
        <v-container  text-xs-center fluid fill-height grid-list-md>
          <v-layout align-center justify-space-around row wrap style="height:75%;">
            <v-flex xs12>
                <p class="display-2">Select Your Budget</p>
                <p class="title">(USD)</p>
            </v-flex>
            <v-flex v-for="(item, index) in budgets" :key="`items-${index}`" xs5>
              <v-btn :color="(index === currentChoice ) ? 'primary' : 'secondary'"
              class="headline" v-on:click="changeChoice(index)">
                {{getCorrectString (item)}}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

  </v-layout>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      budgets: [ [0], [1, 50], [50, 100], [100, 200], [200, 400], [400] ],
      currentChoice: 0
    }
  },
  methods: {
    startQuestionnaire () {
      this.$emit('startQuestionnaire')
    },
    getCorrectString (item) {
      if (item[0] === 0) {
        return '0'
      } else if (item[0] === 400) {
        return '400+'
      } else {
        const min = item[0].toString()
        const max = item[1].toString()
        return `${min}-${max}`
      }
    },
    changeChoice (newChoice) {
      if (newChoice !== this.currentChoice) {
        this.currentChoice = newChoice
      }
    }
  }
}
</script>
