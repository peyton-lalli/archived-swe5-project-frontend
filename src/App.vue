<template>
  <v-app>
    <v-container fluid fill-height>
      <MenuBar></MenuBar>

      <v-row class="fill-height">
        <v-col cols="3"> Static user Nav </v-col>
        <v-col cols="9">
          <v-main>
            <router-view :key="$route.fullPath"></router-view>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
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