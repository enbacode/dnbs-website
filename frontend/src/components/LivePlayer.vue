<template>
  <v-responsive :aspect-ratio="16 / 9" class="z-100" :elevation="20">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/axsW47q4hTw?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </v-responsive>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {
  live = false;
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  background-color: red;
}
.shine {
  box-shadow: 0 0 15px white;
}
</style>
