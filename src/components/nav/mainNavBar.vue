<template>
  <div>
    <deskNavBar v-bind:items="items"/>
    <mobileNavBar v-bind:items="items"/>
  </div>
</template>
<script>
import mobileNavBar from '@/components/nav/mobileNavBar.vue'
import deskNavBar from '@/components/nav/deskNavBar.vue'
export default {
  components: {
    mobileNavBar,
    deskNavBar
  },
  name: 'navBar',
  data () {
    return {
      items: [
        { title: 'Profiles', icon: 'face', link: '/profiles' },
        { title: 'Glossary', icon: 'book', link: '/gloss' },
        { title: 'Shop', icon: 'shopping_cart', link: '/shop' },
        { title: 'About', icon: 'supervised_user_circle', link: '/about' }
      ]
    }
  }
}
</script>
