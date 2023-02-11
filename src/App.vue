<template>
  <v-app>
    <v-app-bar app color="darkBlue" dark>
      <v-img
        alt="OC Logo"
        class="shrink mr-4"
        contain
        src="./assets/OC_LOGO_WHITE.svg"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title 
        color = "mediumBlue"
        class = "font-weight-bold">MUSIC DEPARTMENT</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container> </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>