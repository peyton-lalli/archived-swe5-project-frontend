<template>
  <v-app>
    <MenuBar></MenuBar>

    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import MenuBar from "./components/MenuBar.vue";
  export default {
    name: "App",
    components: {
      MenuBar,
    },
    data: () => ({}),
  };
</script>
