<template>
  <v-card>
    <v-card-title class="font-weight-bold lightRed white--text">
      DELETE {{ course.courseNumber }}
    </v-card-title>
    <v-card-text class="font-weight-bold text-center pt-8">
      Are you sure you want to delete {{ course.courseNumber }}:
      {{ course.courseClass }}?
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        class="font-weight-bold"
        color="darkBlue"
        @click="closeDialog()"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        class="font-weight-bold"
        color="darkerRed"
        @click="closeDialog(), openSnackbar(course.courseNumber + ' Deleted.')"
      >
        Delete
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CourseItemDelete",
  data() {
    return {};
  },
  props: {
    course: Object,
  },
  methods: {
    closeDialog() {
      this.$emit("closeCourseDialogEvent", false);
    },
    openSnackbar(val) {
      this.$emit("openCourseSnackbarEvent", [val, true, "lightRed"]);
    },
  },
};
</script>
