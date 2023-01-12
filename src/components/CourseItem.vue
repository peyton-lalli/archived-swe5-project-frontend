<template>
  <v-card elevation="2" class="lightBlue">
    <v-card-title class="font-weight-bold lightBlue white--text">
      {{ course.courseClass }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold darkBlue--text pb-0">
      {{ course.courseNumber }}
    </v-card-subtitle>

    <v-chip-group column class="mx-4 my-2">
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text mr-2">
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-clock" />
        {{ course.courseNumber.slice(-1) }}
      </v-chip>
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text mr-2">
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-calendar-days" />
        {{ course.courseSemester.join(", ") }}
      </v-chip>
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text"
        v-if="course.courseLab">
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-flask" />
        {{ "LAB" }}
      </v-chip>
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text"
        v-if="course.coursePrereq != ''">
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-circle-exclamation" />
        {{ course.coursePrereq }}
      </v-chip>
    </v-chip-group>
    <v-list disabled class="white darkBlue--text pt-0 pb-0">
      <v-list-item-group>
        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-content>
            {{ course.courseDescription }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider class="lightGray"></v-divider>
    </v-list>
    <v-card-actions class="white" v-if="role === 'admin' || role === 'chair'">
      <v-dialog v-model="editDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="font-weight-bold darkBlue--text"
            v-bind="attrs"
            v-on="on">
            Edit
          </v-btn>
        </template>
        <CourseItemEdit
          @closeCourseDialogEvent="closeEditDialog"
          @openCourseSnackbarEvent="openSnackBar"
          :course="course"></CourseItemEdit>
      </v-dialog>
      <v-dialog v-model="deleteDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="font-weight-bold darkerRed--text"
            v-bind="attrs"
            v-on="on">
            Delete
          </v-btn>
        </template>
        <CourseItemDelete
          @closeCourseDialogEvent="closeDeleteDialog"
          @openCourseSnackbarEvent="openSnackBar"
          :course="course"></CourseItemDelete>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
  import CourseItemEdit from "./CourseItemEdit.vue";
  import CourseItemDelete from "./CourseItemDelete.vue";
  import Utils from "../config/utils.js";

  export default {
    name: "courseItem",
    data() {
      return {
        role: "",
        name: "",
        editDialog: false,
        deleteDialog: false,
      };
    },
    components: {
      CourseItemEdit,
      CourseItemDelete,
    },
    props: {
      course: Object,
    },
    async created() {
      this.user = Utils.getStore("user");
      if (this.user != null) {
        this.name = this.user.fname + " " + this.user.lname;
        this.role = this.user.role;
      }
    },
    methods: {
      closeEditDialog(val) {
        this.editDialog = val;
      },
      closeDeleteDialog(val) {
        this.deleteDialog = val;
      },
      openSnackBar(val) {
        this.$emit("openCourseSnackbarEvent", val);
      },
    },
  };
</script>
