import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import en from "@/locale/en";
import de from "@/locale/de";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { de, en },
    current: "en",
  },
});
