<template>
  <v-container fluid fill-height class="pl-0">
    <v-row class="fill-height">
      <v-col cols="12">
        <v-card class="fill-height rightBorderCurve mainBlur">
          <v-card-text class="fill-height pl-0">
            <v-card outlined class="fill-height borderTest">
              <v-card-text>test</v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="fill-height gradient rightBorderCurve mainBlur">
          <v-card-title class="white--text font-weight-bold">
            Notifications
          </v-card-title>
          <v-card-text>
            <NotificationItem></NotificationItem>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import NotificationItem from "./NotificationItem.vue";
  export default {
    name: "UserSidebar",
    components: {
      NotificationItem,
    },
    data() {
      return {
        userId: 2,
        userName: "",
        userMajor: "",
        userClassification: "",
        userVocalLevel: 0,
        userSemesters: 0,
        userInstructor: 1,
      };
    },
  };
</script>
