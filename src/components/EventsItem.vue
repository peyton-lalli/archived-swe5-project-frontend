<template>
  <v-col cols="12">
    <v-card elevation="20" color="blue">
      <v-card elevation="0" color="white" style="margin: 5px">
        <v-row>
          <v-col cols="8">
            <v-card-title>Recital Hearing</v-card-title>
            <v-card-subtitle>Date</v-card-subtitle>
            <v-card-subtitle>Time</v-card-subtitle>
            <v-card-subtitle>Place</v-card-subtitle>
          </v-col>
          <v-col cols="4">
            <v-btn>Edit</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-avatar><img src="../assets/Unknown.jpeg" /></v-avatar>
          Person Name
        </v-row>
      </v-card>
      Music Selction
      <v-row>
        <v-avatar><img src="../assets/Unknown.jpeg" /></v-avatar>
        Person Name
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    name: "EventsItem",
    components: {},
    data() {
      return {};
    },
    methods: {},
  };
</script>
