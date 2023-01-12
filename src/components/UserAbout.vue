<template>
  <v-container class="px-0 py-0">
    <v-list disabled class="font-weight-bold white darkBlue--text px-0 py-0">
      <v-list-item-group>
        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-icon class="mr-2">
            <font-awesome-icon class="darkBlue--text" icon="fa-solid fa-user" />
          </v-list-item-icon>
          <v-list-item-content>
            {{ this.name }}
          </v-list-item-content>
        </v-list-item>

        <v-divider class="lightGray"></v-divider>

        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-icon class="mr-2">
            <font-awesome-icon
              class="darkBlue--text"
              icon="fa-solid fa-envelope" />
          </v-list-item-icon>
          <v-list-item-content>
            {{ this.email }}
          </v-list-item-content>
        </v-list-item>

        <v-divider class="lightGray"></v-divider>
        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-icon class="mr-2">
            <font-awesome-icon class="darkBlue--text" icon="fa-solid fa-lock" />
          </v-list-item-icon>
          <v-list-item-content>
            {{ role.charAt(0).toUpperCase() + role.substr(1) }}
          </v-list-item-content>
        </v-list-item>

        <v-divider class="lightGray"></v-divider>
      </v-list-item-group>
    </v-list>

    <v-card-actions v-if="role === 'admin'">
      <v-dialog v-model="adminDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="font-weight-bold darkBlue--text"
            v-bind="attrs"
            v-on="on">
            Admin Panel
          </v-btn>
        </template>
        <v-card>
          <AdminPanel @closeDialogEvent="closeAdminDialog"></AdminPanel>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-container>
</template>
<script>
  import Utils from "../config/utils.js";
  import AdminPanel from "../components/AdminPanel.vue";
  export default {
    name: "UserAbout",
    components: {
      AdminPanel,
    },
    data() {
      return {
        name: "",
        role: "",
        email: "",
        adminDialog: false,
      };
    },
    methods: {
      closeAdminDialog(val) {
        this.adminDialog = val;
      },
    },
    async created() {
      this.user = Utils.getStore("user");
      if (this.user != null) {
        this.name = this.user.fName + " " + this.user.lName;
        this.role = this.user.role;
        this.email = this.user.email;
      }
    },
  };
</script>
