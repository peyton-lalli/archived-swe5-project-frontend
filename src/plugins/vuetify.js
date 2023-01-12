import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        darkBlue: "#627985",
        lightBlue: "#b2bfc6",
        lightBlueDarker: "#919DA4",
        lightGray: "#ececec",
        lightRed: "#cd9a9a",
        darkerRed: "#9e7676",
        lightGreen: "#a4cd9a",
        darkerGreen: "#7e9e75",
      },
    },
  },
});
