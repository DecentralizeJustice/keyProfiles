<template>
  <v-toolbar class="hidden-sm-and-down" app>

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
  props: ['items'],
  data () {
    return {
    }
  }
}
</script>
