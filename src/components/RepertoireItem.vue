<template>
  <v-col cols="12">
    <v-card>
      <v-row justify="center" class="pl-5 pt-t pb-0">
        <v-col cols="2" align-self="center">
          <v-avatar>
            <v-img src="../assets/Unknown.jpeg"> </v-img>
          </v-avatar>
        </v-col>
        <v-col cols="8" align-self="center">
          <v-card-title class="pt-0 font-weight-bold darkGray--text">
            Song Title Here
          </v-card-title>
          <v-card-subtitle class="darkBlue--text pb-0">
            Artist Name Here
          </v-card-subtitle>
        </v-col>
        <v-col cols="2" align-self="center">Cal </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    name: "RepertoireItem",
    components: {},
    data() {
      return {};
    },
    methods: {},
  };
</script>
