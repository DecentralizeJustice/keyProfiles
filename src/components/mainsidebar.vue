<template>
  <v-navigation-drawer permanent>
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
  <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="page in pages"
          :key="page.title"
          :to="page.link"
          class="mt-2"
        >
          <v-list-tile-content style="font-size: 2em;">
            {{page.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
</v-navigation-drawer> -->
</template>
<script>
export default {
  name: 'sideBar',
  data () {
    return {
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
