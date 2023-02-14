<template>
  <v-container fluid fill-height>
    <v-row class="fill-height">
      <v-col cols="8">
        <v-row class="fill-height">
          <v-col cols="7">
            <v-card class="fill-height mainBlur">
              <v-row>
                <v-col>
                  <v-card-title class="font-weight-bold darkGray--text pt-0">
                    <v-col>Repertoire</v-col>
                    <v-col class="text-right">
                      <v-btn rounded="pill" elevation="2">View All</v-btn>
                    </v-col>
                  </v-card-title>
                </v-col>
              </v-row>
              <RepertoireItem />
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card elevation="12" class="fill-height">
              <v-card-title class="font-weight-bold darkGray--text"
                >Quicklinks</v-card-title
              >
              <v-row justify="center" class="pa-2 ma-2 text-start">
                <v-btn block rounded="pill" class="text-left">MyOC</v-btn>
              </v-row>
              <v-row justify="center" class="pa-2 ma-2 text-start">
                <v-btn block rounded="pill">Blackboard</v-btn>
              </v-row>
              <v-row justify="center" class="pa-2 ma-2 text-start">
                <v-btn block rounded="pill">Gmail</v-btn>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="fill-height">
          <v-col cols="12">
            <v-card elevation="12" class="fill-height">
              <v-card-title class="font-weight-bold darkGray--text">
                <v-col>Recent Critiques</v-col>
                <v-col class="text-right">
                  <v-btn rounded="pill" elevation="2">View All</v-btn>
                </v-col>
              </v-card-title>
              <RecentItem />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card elevation="12" class="rounded-card fill-height">
          <v-card-title class="font-weight-bold darkGray--text py-2">
            <v-col>Your Events</v-col>
            <v-col class="text-right">
              <v-btn rounded="pill" elevation="2">View All</v-btn>
            </v-col>
          </v-card-title>
          <EventsItem />
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
