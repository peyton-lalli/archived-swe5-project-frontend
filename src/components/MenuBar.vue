<template>
  <v-container>
    <v-app-bar app color="mediumBlue" dark>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <v-img
        alt="OC Logo"
        class="shrink mr-4"
        contain
        src="../assets/OC_LOGO_WHITE.svg"
        transition="scale-transition"
        width="40" />

      <v-toolbar-title class="font-weight-bold darkBlue--text">{{
        title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          class="font-weight-bold"
          color="white"
          plain
          v-for="item in menuItemsForRole"
          :key="item.title"
          :to="item.path">
          {{ item.title }}
        </v-btn>
        <v-btn
          class="font-weight-bold"
          color="white"
          plain
          v-on:click="logout()">
          {{ "LOGOUT" }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-if="drawer" v-model="drawer" app left>
      <v-list>
        <v-list-item
          exact
          v-for="item in menuItemsForRole"
          :key="item.title"
          :to="item.path">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
        <v-list-item v-on:click="logout()">
          {{ "Logout" }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
  import Utils from "@/config/utils.js";
  import AuthServices from "@/services/authServices.js";
  export default {
    name: "MenuBar",
    userFeatures: ["LOGOUT"],
    data: () => ({
      title: "MUSIC DEPARTMENT",
      name: "",
      role: "",
      drawer: false,
      userName: "",
      menuItems: [
        {
          title: "Dashboard",
          path: "/HomeDashboard",
          roles: ["admin", "faculty", "chair"],
        },
        {
          title: "Section Planner",
          path: "/SectionPlanner",
          roles: ["admin", "faculty", "chair"],
        },
        {
          title: "Course Catalog",
          path: "/CourseCatalog",
          roles: ["admin", "faculty", "chair"],
        },
      ],
      menuItemsForRole: [],
    }),
    async created() {
      this.user = Utils.getStore("user");
      if (this.user != null) {
        this.name = this.user.fname + " " + this.user.lname;
        this.role = this.user.role;
      }

      this.setMenu();
    },
    computed: {
      theme() {
        return this.$vuetify.theme.dark ? "dark" : "light";
      },
      drawerChange() {
        if (this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl) {
          return false;
        } else {
          return true;
        }
      },
    },
    mounted() {
      this.setMenu();
    },
    methods: {
      setMenu() {
        this.menuItemsForRole = [];
        for (var i = 0; i < this.menuItems.length; i++) {
          const item = this.menuItems[i];
          if (item.roles.includes(this.role)) {
            this.menuItemsForRole.push(item);
          }
        }
      },
      setRoles() {
        this.user = Utils.getStore("user");
        if (this.user != null) {
          this.name = this.user.fname + " " + this.user.lname;
          this.role = this.user.role;
          console.log(this.role);
        }
      },
      logout: function () {
        const user = Utils.getStore("user");
        AuthServices.logoutUser(user)
          .then((response) => {
            console.log(response);
            Utils.removeItem("user");
            this.$router.go();
            this.$router.push({ name: "login" });
          })
          .catch((error) => {
            console.log("error", error);
          });
      },
    },
  };
</script>
