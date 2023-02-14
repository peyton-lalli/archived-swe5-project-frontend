<template>
  <v-container fluid fill-height>
    <v-row class="fill-height">
      <v-col cols="8">
        <v-row class="fill-height">
          <v-col cols="7">
            <v-card class="fill-height mainBlur rounded-lg">
              <v-row>
                <v-col>
                  <v-card-title class="font-weight-bold darkGray--text pt-0">
                    <v-col>Repertoire</v-col>
                    <v-col class="text-right">
                      <v-btn rounded="pill" elevation="2">Add New</v-btn>
                    </v-col>
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
            <v-card class="fill-height mainBlur rounded-lg">
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
            <v-card class="fill-height mainBlur rounded-lg">
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
        <v-card class="rounded-card fill-height mainBlur rounded-lg">
          <v-card-title class="font-weight-bold darkGray--text py-2">
            <v-col>Your Events</v-col>
            <v-col class="text-right">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on"> Upcoming </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
      return {
        items: [{ title: "Upcoming" }, { title: "Past" }],
      };
    },
    methods: {},
  };
</script>
