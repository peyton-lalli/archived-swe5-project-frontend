<template>
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
</template>

<script>
  import RepertoireItem from "../components/RepertoireItem.vue";

  export default {
    name: "RepertoireComponent",
    components: {
      RepertoireItem,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
