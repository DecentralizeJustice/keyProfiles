<template>
  <div>
  <v-toolbar class="hidden-sm-and-down">
  <v-toolbar-side-icon></v-toolbar-side-icon>

  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn  v-for="item in items"
            :key="item.title"
            :to="item.link" flat>{{ item.title }}
    </v-btn>
  </v-toolbar-items>
</v-toolbar>
<v-container class="hidden-md-and-up">
  <v-layout justify-center>
    <v-btn
      color="pink"
      dark
      @click.stop="drawer = !drawer"
    >
      Toggle
    </v-btn>
  </v-layout>
</v-container>
  <v-navigation-drawer class="hidden-md-and-up"      v-model="drawer"
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
    </v-list>
  </v-navigation-drawer>

</div>
</template>
<script>
export default {
  name: 'navBar',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'ballot', link: '/' },
        { title: 'Glossary', icon: 'book', link: '/gloss' },
        { title: 'Shop', icon: 'shopping_cart', link: '/shop' },
        { title: 'About', icon: 'supervised_user_circle', link: '/about' }
      ]
    }
  }
}
</script>
