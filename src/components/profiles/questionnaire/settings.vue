<template>

  <v-dialog
     v-model="dialog"
     width="500"
   >
     <template v-slot:activator="{ on }">
       <v-btn  large color="orange" v-on="on"><v-icon>settings</v-icon></v-btn>
     </template>

     <v-card dark>
       <v-card-title
        text-xs-center
        class="headline grey lighten-1 justify-center"
        primary-title
        style="color:black;"
       >
         Settings
       </v-card-title>

       <v-card-text>
         Content Type:<br>
         <v-btn large v-bind:flat="!contentTypeVideo" color="info"
          v-on:click="checkForChange(true)">Video</v-btn>
         <v-btn large v-bind:flat="contentTypeVideo"
          v-on:click="checkForChange(false)" color="yellow">Text</v-btn>
       </v-card-text>

       <v-divider></v-divider>

       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn
           color="primary"
           flat
           @click="dialog = false"
         >
           Close
         </v-btn>
       </v-card-actions>
     </v-card>
   </v-dialog>

</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('settings')
export default {
  name: 'settings',
  components: {
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    ...mapActions([
      'changeContentType'
    ]),
    checkForChange: function (checkingContentType) {
      if (checkingContentType !== this.contentTypeVideo) {
        this.changeContentType()
      }
    }
  },
  computed: {
    ...mapState([
      'contentTypeVideo'
    ])
  }
}
</script>
