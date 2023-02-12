<template>
  <v-container fluid fill-height>
    <v-row class="fill-height">
      <v-col cols="8">
        <v-row>
          <v-col cols="7">
            <v-card elevation="12">
              <v-row align="center" justify="center" class="text-center">
                <v-col cols="8">
                  <v-card-title>Repertoire</v-card-title>
                </v-col>
                <v-col cols="4">
                  <v-btn elevation="2">View All</v-btn>
                </v-col>
              </v-row>
              <v-row><RepertoireItem /></v-row>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card elevation="12">
              <v-card-title>Quicklinks</v-card-title>
              <v-btn>Make this button pretty</v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card elevation="12">
              <v-row align="center" justify="center" class="text-center">
                <v-col cols="10">
                  <v-card-title>Recent Critiques</v-card-title>
                </v-col>
                <v-col cols="2">
                  <v-btn elevation="2">View All</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <RecentItem />
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card elevation="12" class="rounded-card">
          <v-row align="center" justify="center" class="text-center">
            <v-col cols="8">
              <v-card-title>Your Events</v-card-title>
            </v-col>
            <v-col cols="4">
              <v-btn elevation="2">View All</v-btn>
            </v-col>
          </v-row>
          <v-row><EventsItem /></v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import RecentItem from "../components/RecentItem.vue";
  import EventsItem from "../components/EventsItem.vue";
  import RepertoireItem from "../components/RepertoireItem.vue";
  export default {
    name: "StudentHomeDashboard",
    components: {
      RecentItem,
      EventsItem,
      RepertoireItem,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
