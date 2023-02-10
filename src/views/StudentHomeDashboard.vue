<template>
  <v-container fluid fill-height>
    <v-row class="fill-height">
      <v-col cols="8">
        <v-row>
          <v-col cols="7"><RepertoireComponent /></v-col>
          <v-col cols="5"><QuickLinksComponent /></v-col>
        </v-row>
        <v-row>
          <v-col cols="12"><RecentCritiquesComponent /></v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <YourEventsComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import RepertoireComponent from "../components/RepertoireComponent.vue";
  import QuickLinksComponent from "../components/QuickLinksComponent.vue";
  import RecentCritiquesComponent from "../components/RecentCritiquesComponent.vue";
  import YourEventsComponent from "../components/YourEventsComponent.vue";

  export default {
    name: "StudentHomeDashboard",
    components: {
      RepertoireComponent,
      QuickLinksComponent,
      RecentCritiquesComponent,
      YourEventsComponent,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
