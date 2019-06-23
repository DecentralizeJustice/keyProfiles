<template>
  <v-toolbar class="hidden-sm-and-down">

      <v-toolbar-title>Keys By Any Means</v-toolbar-title>

  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn  v-for="item in items"
            :key="item.title"
            :to="item.link" flat>{{ item.title }}
    </v-btn>
  </v-toolbar-items>
</v-toolbar>

</template>
<script>
export default {
  name: 'deskNavBar',
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
