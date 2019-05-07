<template>
  <div>

  </div>
</template>
<script>
// import toolBar from '@/components/toolBar.vue'

export default {
  name: 'about',
  components: {
  },
  data () {
    return {
      data: [
      ]
    }
  },
  computed: {
    bannerfontSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm': return '3em'
        case 'xs': return '2em'
        default: return '5em'
      }
    }
  }
}
</script>
<style scoped>

.first{
  height: 80vh;
  background-image: url("https://res.cloudinary.com/dylevfpbl/image/upload/v1555400445/decenMain/techblack_2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.second{
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.third{
  background-color: #b1bfd8;
  background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
}
.center{
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
