<template>
  <v-card>
    <v-card-title class="font-weight-bold darkBlue white--text">
      ADMIN PANEL
    </v-card-title>
    <v-card-text>
      <v-card-subtitle class="pb-0 pl-0">Edit User Permissions</v-card-subtitle>
      <v-container fluid class="pt-0 pb-0">
        <v-row dense>
          <v-col class="px-0">
            <v-text-field
              class="pb-0"
              color="darkBlue"
              v-model="userSearchValue"
              label="Enter Faculty ID">
              <template #append>
                <v-btn
                  class="font-weight-bold"
                  color="darkBlue"
                  text
                  @click="searchUsers(userSearchValue)"
                  >Search</v-btn
                >
              </template>
            </v-text-field>
            <v-radio-group
              class="pt-0 pb-0"
              row
              mandatory
              v-model="returnedUser.role"
              ref="rolesEdit">
              <v-radio
                class="font-weight-bold"
                color="darkBlue"
                label="Admin"
                value="admin"></v-radio>
              <v-radio
                class="font-weight-bold"
                color="darkBlue"
                label="Chair"
                value="chair"></v-radio>
              <v-radio
                class="font-weight-bold"
                color="darkBlue"
                label="Faculty"
                value="faculty"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="pt-0">
      <v-btn
        text
        class="font-weight-bold"
        color="darkerRed"
        @click="closeDialog()">
        Cancel
      </v-btn>
      <v-btn
        text
        class="font-weight-bold"
        color="darkerGreen"
        @click="saveUser(), closeDialog()">
        Save
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: "AdminPanel",
    data() {
      return {
        userSearchValue: "",
        userNewRole: "",
        roles: ["admin", "faculty", "chair"],
        returnedUser: {
          name: "Logan Demaray",
          facultyID: 1111111,
          role: "faculty",
        },
      };
    },
    methods: {
      closeDialog() {
        this.$emit("closeDialogEvent", false);
      },
      searchUsers(user) {
        console.log(user);
      },
      saveUser() {
        // CHANGE TO REAL PUT REQUEST
        console.log(this.$refs.rolesEdit.value);
      },
    },
  };
</script>
