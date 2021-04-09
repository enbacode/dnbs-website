<template>
  <div>
    <div class="text-h4 white--text" v-if="lessThanADay">
      {{ $vuetify.lang.t("$vuetify.stream_starts") }}
    </div>
    <div class="text-h4 white--text" v-else>
      {{ $vuetify.lang.t("$vuetify.next_stream") }}
    </div>
    <div class="text-h1 white--text" v-if="lessThanADay">
      <vue-countdown :time="time" v-slot="{ hours, minutes, seconds }">
        {{ hours | padZeros }}:{{ minutes | padZeros }}:{{ seconds | padZeros }}
      </vue-countdown>
    </div>
    <div :class="`${h1Class} white--text`" v-else>{{ displayDate }}</div>
    <div :class="`${h4Class} white--text`" v-if="!lessThanADay">
      <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
        <span>{{ days }} {{ $vuetify.lang.t("$vuetify.days") }}, </span>
        <span>{{ hours }} {{ $vuetify.lang.t("$vuetify.hours") }}, </span>
        <span>{{ minutes }} {{ $vuetify.lang.t("$vuetify.minutes") }}, </span>
        <span>{{ seconds }} {{ $vuetify.lang.t("$vuetify.seconds") }}</span>
      </vue-countdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, Model } from "vue-property-decorator";
import dayjs from "dayjs";
import VueCountdown from "@chenfengyuan/vue-countdown";

@Component({
  components: {
    VueCountdown,
  },
  filters: {
    padZeros: function (value: number, padLength: number) {
      return value.toString().padStart(2, "0");
    },
  },
})
export default class BroadcastCountdown extends Vue {
  @Prop({ default: new Date() }) readonly date: Date

  get h1Class() {
      return this.$vuetify.breakpoint.mobile ? 'text-h3' : 'text-h1'
  }
  get h4Class() {
      return this.$vuetify.breakpoint.mobile ? '' : 'text-h4'
  }

  get displayDate(): string {
    return this.$vuetify.lang.current == "de"
      ? dayjs(this.date).format("DD.MM.YYYY HH:mm")
      : dayjs(this.date).format("YYYY/MM/DD hh:mm A");
  }

  get lessThanADay() {
    return dayjs.duration(this.time).days() < 1;
  }

  get time() {
    return dayjs(this.date).diff(Date.now());
  }
}
</script>
