<template>
  <v-app>
    <v-container fluid fill-height>
      <!-- Add MenuBar component here -->

      <v-row class="fill-height">
        <v-col cols="3" class="pl-0"> <UserSidebar></UserSidebar> </v-col>
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
  import UserSidebar from "./components/UserSidebar.vue";
  export default {
    name: "App",
    components: { UserSidebar },
    data: () => ({}),
  };
</script>
