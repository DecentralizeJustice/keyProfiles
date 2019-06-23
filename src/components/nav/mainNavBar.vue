<template>
  <div>
    <deskNavBar/>
    <mobileNavBar/>
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
    }
  }
}
</script>
