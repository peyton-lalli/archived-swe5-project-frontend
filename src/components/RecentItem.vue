<template>
  <v-col cols="12">
    <v-card elevation="20">
      <v-row>
        <v-col cols="8">
          <v-card-title class="font-weight-bold darkGray--text pt-0">
            Jury Critique
            <v-card-subtitle class="font-weight-bold darkBlue--text ml-5">
              Soprano
            </v-card-subtitle>
          </v-card-title>
          <v-card-subtitle class="font-weight-bold darkBlue--text">
            Date
          </v-card-subtitle>
          <v-card-title> Jurors </v-card-title>
          <v-row>
            <v-col cols="4">
              <v-row justify="center" class="pl-5 pt-t pb-0">
                <v-col cols="2" align-self="center">
                  <v-avatar>
                    <v-img src="../assets/Unknown.jpeg"> </v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="10" align-self="center">
                  <v-card-subtitle class="font-weight-bold pl-8 darkGray--text">
                    Name Here
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row justify="center" class="pl-5 pt-t pb-0">
                <v-col cols="2" align-self="center">
                  <v-avatar>
                    <v-img src="../assets/Unknown.jpeg"> </v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="10" align-self="center">
                  <v-card-subtitle class="font-weight-bold pl-8 darkGray--text">
                    Name Here
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row justify="center" class="pl-5 pt-t pb-0">
                <v-col cols="2" align-self="center">
                  <v-avatar>
                    <v-img src="../assets/Unknown.jpeg"> </v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="10" align-self="center">
                  <v-card-subtitle class="font-weight-bold pl-8 darkGray--text">
                    Name Here
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-actions class="pl-5 pt-5">
            <v-btn rounded="pill">View Full Critique</v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="4">
          <v-card elevation="4" class="fill-height mr-3">
            <v-card-title class="font-weight-bold darkGray--text">
              Musical Selection
            </v-card-title>
            <v-card-title class="pt-0 font-weight-bold darkGray--text">
              Song Title Here
            </v-card-title>
            <v-card-subtitle class="darkBlue--text pb-0">
              Artist Name Here
            </v-card-subtitle>
            <v-card-title class="pt-0 font-weight-bold darkGray--text">
              Song Title Here
            </v-card-title>
            <v-card-subtitle class="darkBlue--text pb-0">
              Artist Name Here
            </v-card-subtitle>
            <v-card-title class="pt-0 font-weight-bold darkGray--text">
              Song Title Here
            </v-card-title>
            <v-card-subtitle class="darkBlue--text pb-0">
              Artist Name Here
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    name: "RecentItems",
    components: {},
    data() {
      return {};
    },
    methods: {},
  };
</script>
