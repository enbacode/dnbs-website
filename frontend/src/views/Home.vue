<template>
  <div class="home">
    <v-sheet class="pa-3 debug" color="transparent">
      <v-btn-toggle mandatory v-model="debugOption" @change="debugChange">
        <v-btn x-small>Spin</v-btn>
        <v-btn x-small>Kein</v-btn>
        <v-btn x-small>Datum</v-btn>
        <v-btn x-small>T-24</v-btn>
        <v-btn x-small>Live</v-btn>
      </v-btn-toggle>
    </v-sheet>
    <div class="hero">
      <v-container fill-height>
        <v-row>
          <v-container>
            <v-row v-if="loaded && !scheduled">
              <v-col cols="12" md="8" offset-md="2">
                <div :class="`${$vuetify.breakpoint.mobile ? 'text-h3' : 'text-h2'} white--text text-center`">
                  {{ $vuetify.lang.t("$vuetify.no_stream_scheduled") }}
                </div>
              </v-col>
            </v-row>
            <v-row v-if="loaded && live">
              <v-col cols="12" md="8" offset-md="2">
                <live-player></live-player>
              </v-col>
            </v-row>
            <v-row v-if="loaded && scheduled && !live">
              <v-col cols="12" class="text-center">
                <broadcast-countdown :date="date"></broadcast-countdown>
              </v-col>
            </v-row>
            <v-row v-if="!loaded">
              <v-col cols="12" class="text-center">
                <v-progress-circular
                  :size="60"
                  :width="7"
                  color="white"
                  indeterminate
                ></v-progress-circular>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-5">
              <v-col cols="12" class="text-center">
                <v-btn
                  x-large
                  icon
                  outlined
                  color="white"
                  class="mr-5"
                  elevation="20"
                  ><v-icon x-large>mdi-youtube</v-icon></v-btn
                >
                <v-btn
                  x-large
                  icon
                  outlined
                  color="white"
                  class="mx-5"
                  elevation="20"
                  ><v-icon x-large>mdi-instagram</v-icon></v-btn
                >
                <v-btn
                  x-large
                  icon
                  outlined
                  color="white"
                  class="mx-5"
                  elevation="20"
                  ><v-icon x-large>mdi-soundcloud</v-icon></v-btn
                >
                <v-btn
                  x-large
                  icon
                  outlined
                  color="white"
                  class="ml-5"
                  elevation="20"
                  ><v-icon x-large>mdi-facebook</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
      <div class="light x1"></div>
      <div class="light x2"></div>
      <div class="light x3"></div>
      <div class="light x4"></div>
      <div class="light x5"></div>
      <div class="light x6"></div>
      <div class="light x7"></div>
      <div class="light x8"></div>
      <div class="light x9"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LivePlayer from "@/components/LivePlayer.vue";
import BroadcastCountdown from "@/components/BroadcastCountdown.vue";
import dayjs from "dayjs";
import broadcast from "@/assets/broadcast.json";

@Component({
  components: {
    LivePlayer,
    BroadcastCountdown,
  },
})
export default class Home extends Vue {
  private broadcast = null
  private debugOption = 2;

  created() {
    fetch("http://localhost:3080/api/streams/next");
    this.debugChange()
  }
  
  get live() {
    return this.loaded && ['live', 'liveStarting'].includes(this.broadcast?.status?.lifeCycleStatus)
  }

  get loaded() {
    return this.broadcast !== null
  }

  get date() {
    return new Date(this.broadcast?.snippet?.scheduledStartTime)
  }

  get scheduled() {
    return this.loaded && this.broadcast.snippet
  }

  debugChange() {
    switch (this.debugOption) {
      case 0:
        this.broadcast = null
        break;
      case 1:
        this.broadcast = {}
        break;
      case 2:
        this.broadcast = JSON.parse(JSON.stringify(broadcast))
        this.broadcast.snippet.scheduledStartTime = dayjs().add(11, 'days').toISOString()
        break;
      case 3:
        this.broadcast = JSON.parse(JSON.stringify(broadcast))
        this.broadcast.snippet.scheduledStartTime = dayjs().add(23, 'hours').toISOString()
        break;
      case 4:
        this.broadcast = JSON.parse(JSON.stringify(broadcast))
        this.broadcast.snippet.scheduledStartTime = dayjs().toISOString()
        this.broadcast.status.lifeCycleStatus = 'live'
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  background: radial-gradient(#572b9e, #1f1013);
  overflow-y: hidden;
  animation: fadeIn 1 1s ease-out;
}
.shine {
  box-shadow: 0 0 30px lighten(#572b9e, 40%);
}

.light {
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: #e9f1f1 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}

.x1 {
  animation: floatUp 4s infinite linear;
  transform: scale(1);
}

.x2 {
  animation: floatUp 7s infinite linear;
  transform: scale(1.6);
  left: 15%;
}

.x3 {
  animation: floatUp 2.5s infinite linear;
  transform: scale(0.5);
  left: -15%;
}

.x4 {
  animation: floatUp 4.5s infinite linear;
  transform: scale(1.2);
  left: -34%;
}

.x5 {
  animation: floatUp 8s infinite linear;
  transform: scale(2.2);
  left: -57%;
}

.x6 {
  animation: floatUp 3s infinite linear;
  transform: scale(0.8);
  left: -81%;
}

.x7 {
  animation: floatUp 5.3s infinite linear;
  transform: scale(3.2);
  left: 37%;
}

.x8 {
  animation: floatUp 4.7s infinite linear;
  transform: scale(1.7);
  left: 62%;
}

.x9 {
  animation: floatUp 4.1s infinite linear;
  transform: scale(0.9);
  left: 85%;
}

@keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}

.z-100 {
  z-index: 100;
}

.debug {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
