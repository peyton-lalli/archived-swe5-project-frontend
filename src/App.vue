<template>
  <v-app>
    <MenuBar></MenuBar>
  </v-app>
</template>

<script>
import MenuBar from "./components/MenuBar";
export default {
  name: "App",
  components: {
    MenuBar,
  },
};
</script>