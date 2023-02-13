import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        darkBlue: "#2E6799",
        mediumBlue: "#3F86C5",
        lightBlue: "#B8D3EA",
        darkGray: "#343434",
        gradientColor: "linear-gradient(#2E6799, #FFFFFF)",
      },
    },
  },
});
