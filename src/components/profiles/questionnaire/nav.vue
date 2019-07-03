<template>
  <v-flex xs12>
    <v-layout  align-center row wrap>
      <v-flex xs12 md6 fluid>
        <v-btn   large color="red"><v-icon>arrow_back</v-icon></v-btn>
        <v-btn  large color="green" disabled><v-icon>check_circle</v-icon></v-btn>
      </v-flex>
      <v-flex xs12 md3 offset-md3>
        <settings/>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
<script>
import settings from '@/components/profiles/questionnaire/settings.vue'
export default {
  name: 'navBar',
  components: {
    settings
  },
  data () {
    return {
    }
  }
}
</script>
