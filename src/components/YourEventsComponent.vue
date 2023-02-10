<template>
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
</template>

<script>
  import EventsItem from "../components/EventsItem.vue";

  export default {
    name: "YourEventsComponent",
    components: {
      EventsItem,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
