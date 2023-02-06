<template>
  <v-app>
    <v-container fluid>
      //Add MenuBar component here

      <v-row>
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
  export default {
    name: "App",
    components: {},
    data: () => ({}),
  };
</script>
