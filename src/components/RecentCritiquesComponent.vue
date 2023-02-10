<template>
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
</template>

<script>
  import RecentItem from "../components/RecentItem.vue";

  export default {
    name: "RepertoireComponent",
    components: {
      RecentItem,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
