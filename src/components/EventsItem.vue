<template>
  <v-col cols="12">
    <v-card color="blue">
      <v-col cols="12">
        <v-card>
          <v-card-title class="font-weight-bold darkGray--text py-1 px-0">
            <v-col>Recital Hearing</v-col>
            <v-col class="text-right">
              <v-btn rounded="pill" elevation="2">View All</v-btn>
            </v-col>
          </v-card-title>
          <v-card-subtitle class="font-weight-bold pb-0 mb-0 darkBlue--text">
            Date
          </v-card-subtitle>
          <v-card-subtitle
            class="font-weight-bold pt-0 mt-0 pb-0 mb-0 darkBlue--text">
            Time
          </v-card-subtitle>
          <v-card-subtitle
            class="font-weight-medium pt-0 mt-0 mediumBlue--text">
            Place
          </v-card-subtitle>
          <v-row justify="center" class="pl-5 pt-t pb-0">
            <v-col cols="2" align-self="center">
              <v-avatar>
                <v-img src="../assets/Unknown.jpeg"> </v-img>
              </v-avatar>
            </v-col>
            <v-col cols="10" align-self="center">
              <v-card-title class="pt-0 font-weight-bold darkGray--text">
                Name Here
              </v-card-title>
              <v-card-subtitle class="darkBlue--text pb-0">
                Profession Here
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-card-subtitle class="white--text">Music Selction</v-card-subtitle>
      <v-row justify="center" class="pl-5 pt-t pb-0">
        <v-col cols="2" align-self="center">
          <v-avatar>
            <v-img src="../assets/Unknown.jpeg"> </v-img>
          </v-avatar>
        </v-col>
        <v-col cols="10" align-self="center">
          <v-card-title class="pt-0 font-weight-bold darkGray--text">
            Song Title Here
          </v-card-title>
          <v-card-subtitle class="darkBlue--text pb-0">
            Artist Name Here
          </v-card-subtitle>
        </v-col>
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
