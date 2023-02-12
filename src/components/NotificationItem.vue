<template>
  <v-card elevation="0" class="fullBorderCurve">
    <v-card-title class="font-weight-bold pb-0"
      >Jury Signups Now Open!</v-card-title
    >
    <v-card-text class="mediumBlue--text font-weight-medium"
      >Spring 2023 jury signups are now open. Sign up now to get your
      spot!</v-card-text
    >
  </v-card>
</template>

<script>
  export default {
    name: "NotificationItem",
    data() {
      return {
        notificationTitle: "",
        notificationText: "",
      };
    },
  };
</script>
