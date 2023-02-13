<template>
  <v-container fluid fill-height class="pl-0">
    <v-row class="fill-height">
      <v-col cols="12">
        <v-card class="fill-height rounded-r-lg mainBlur">
          <v-card-text class="fill-height pl-0">
            <v-card outlined class="fill-height borderTest">
              <v-card-title class="pb-0">
                <v-avatar>
                  <v-img src="../assets/Unknown.jpeg"> </v-img>
                </v-avatar>
              </v-card-title>

              <v-card-title class="font-weight-bold darkGray--text">
                {{ userName.toUpperCase() }}
              </v-card-title>
              <v-card-subtitle
                class="font-weight-medium pb-0 mb-0 darkBlue--text">
                {{ userMajor }} Major
              </v-card-subtitle>
              <v-card-subtitle
                class="font-weight-medium pt-0 mt-0 mediumBlue--text">
                {{ userClassification }}
              </v-card-subtitle>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-progress-linear
                      v-model="userVocalLevel"
                      color="mediumBlue"
                      height="15"
                      class="rounded-xl">
                    </v-progress-linear>
                  </v-col>
                  <v-col cols="12">
                    <v-progress-linear
                      v-model="userSemesters"
                      color="mediumBlue"
                      height="15"
                      class="rounded-xl">
                    </v-progress-linear>
                  </v-col>
                  <v-col cols="12">
                    <v-card class="mainBlur bottomRightBorderDeepCurve">
                      <v-row justify="center" class="pl-5 pt-t pb-0">
                        <v-col cols="2" align-self="center">
                          <v-avatar>
                            <v-img src="../assets/Unknown.jpeg"> </v-img>
                          </v-avatar>
                        </v-col>
                        <v-col cols="10" align-self="center">
                          <v-card-title class="pt-0">
                            Private Instructor
                          </v-card-title>
                          <v-card-subtitle
                            class="darkBlue--text font-weight-bold pb-0">
                            Jane Doe
                          </v-card-subtitle>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="fill-height gradient rounded-r-lg mainBlur">
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
        userName: "John Doe",
        userMajor: "Vocal Music",
        userClassification: "Senior",
        userVocalLevel: 60,
        userSemesters: 80,
        userInstructor: 1,
      };
    },
  };
</script>
