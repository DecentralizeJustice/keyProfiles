<template>
    <div>
        <video ref="videoPlayer" class="video-js vjs-fluid vjs-big-play-centered"></video>
    </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
export default {
  name: 'VideoPlayer',
  props: {
    videoLink: String
  },
  data () {
    return {
      player: null,
      options: {
        controls: true,
        sources: [
          {
            src:
              this.videoLink,
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
