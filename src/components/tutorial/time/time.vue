<template>
  <v-layout align-center row style="height:80%;position: relative;top:0%">
      <v-flex md8 style="background-color: #0277bd;height:100%;top:0px;position: relative;">
        <component v-bind:is="currentMain"></component>
      </v-flex>
      <v-flex md4 style="background-color: #29b6f6;height:100%;" >
        <v-container  text-xs-center fluid fill-height grid-list-md>
          <v-layout align-center justify-space-around row wrap>
            <v-flex xs12 >
              <v-card>
                <v-container bg fill-height grid-list-md text-xs-center>
                  <v-layout row wrap align-center justify-center>
                    <p class="display-1 pa-4">Select Setup Time</p>
                    <v-flex xs10>
                      <v-slider
                        v-model="slider"
                        label=""
                      ></v-slider>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

  </v-layout>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('tutorial')
export default {
  data () {
    return {
      budgets: [ [0], [50, 100], [100, 200], [200, 400], [400] ]
    }
  },
  methods: {
    getCorrectString (item) {
      if (item[0] === 0) {
        return '0'
      } else if (item[0] === 400) {
        return '400 +'
      } else {
        const min = item[0].toString()
        const max = item[1].toString()
        return `${min} - ${max}`
      }
    },
    changeChoice (newChoice) {
      if (newChoice !== this.budget) {
        this.changeBudget(newChoice)
      }
    },
    ...mapActions({
      changeBudget: 'changeBudget'
    })
  },
  computed: {
    currentMain () {
      const name = this.budget
      return () => import(`@/components/tutorial/budget/${name}.vue`)
    },
    ...mapState({
      budget: 'budget'
    })
  }
}
</script>
