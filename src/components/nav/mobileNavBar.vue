<template>
  <div>
  <v-toolbar class="hidden-md-and-up" scroll-off-screen app>

      <v-toolbar-title>Keys By Any Means</v-toolbar-title>

  <v-spacer></v-spacer>
  <v-toolbar-items >
    <v-btn
      dark
      flat
      @click.stop="drawer = !drawer"
    >
    <v-icon >menu</v-icon>
    </v-btn>
  </v-toolbar-items>
</v-toolbar>

  <v-navigation-drawer class="hidden-md-and-up" v-model="drawer"
      absolute
      temporary>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Keys By Any Means
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title style="font-size:2em;">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
       @click.stop="drawer = !drawer"
      >
        <v-list-tile-action>
          <v-icon >close</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title style="font-size:2em;">Close</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>

</template>
<script>
export default {
  name: 'mobileNavBar',
  props: ['items'],
  data () {
    return {
      drawer: null
    }
  }
}
</script>
