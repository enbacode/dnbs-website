<template>
  <v-app>
    <v-app-bar app color="primary" flat inverted-scroll>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-soundcloud</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  created() {
    this.$vuetify.lang.current = navigator.language.startsWith("de")
      ? "de"
      : "en";
  }
}
</script>
