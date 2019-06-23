<template>
  <v-container  text-xs-center fluid fill-height grid-list-md>
    <v-layout  align-center justify-space-around row wrap>

    <v-flex xs10   md5 >
      <v-card>
        <v-card-title primary-title text-xs-center class="justify-center">
          <div>
            <h3 text-xs-center class="headline">Security Profile</h3>
          </div>
        </v-card-title>
        <v-img
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1561271106/keyapp/secureSetup.jpg"
          aspect-ratio="1.75"
        ></v-img>
        <v-card-actions class="justify-center">
          <v-btn flat large color="orange">Start</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs10   md5 >
      <v-card>
        <v-card-title primary-title text-xs-center class="justify-center">
          <div>
            <h3 text-xs-center class="headline">Introduction</h3>
          </div>
        </v-card-title>
        <v-img
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1561271979/keyapp/welcome.jpg"
          aspect-ratio="1.75"
        ></v-img>
        <v-card-actions class="justify-center">
          <v-btn flat large to="/about" color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'main',
  props: [],
  data () {
    return {

    }
  }
}
</script>
