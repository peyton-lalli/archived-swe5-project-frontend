<template>
  <v-card ref="form">
    <v-card-title class="font-weight-bold lightGreen white--text">
      ADD COURSE
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              ref="courseClass"
              required
              v-model="courseClass"
              :rules="[() => !!courseClass || 'This field is required']"
              color="darkBlue"
              label="Course Name"
              placeholder="Programming I"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              ref="courseNumber"
              required
              v-model="courseNumber"
              :rules="[
                () => !!courseNumber || 'This field is required',
                () =>
                  (!!courseNumber && courseNumber.length >= 9) ||
                  'Number too short',
                () =>
                  (!!courseNumber && courseNumber.length <= 9) ||
                  'Number too long',
                () => courseNumber[4] === '-' || 'Format must be \'ABCD-1234\'',
                () =>
                  !/\d/.test(courseNumber.substring(0, 4)) ||
                  'First 4 must be char',
                () =>
                  !/[a-zA-Z]/g.test(courseNumber.substring(5, 9)) ||
                  'Last 4 must be num',
              ]"
              color="darkBlue"
              label="Course Number"
              placeholder="CMSC-1111"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-select
              ref="courseSemester"
              required
              :rules="[
                () => courseSemester.length > 0 || 'This field is required',
              ]"
              color="darkBlue"
              v-model="courseSemester"
              :items="semesterOptions"
              :menu-props="{ maxHeight: '400' }"
              label="Semster Options"
              multiple
              persistent-hint
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              ref="coursePrereq"
              v-model="coursePrereq"
              color="darkBlue"
              label="Course Prerequisite"
              placeholder="CMSC-1111"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-checkbox
              ref="courseLab"
              color="darkBlue"
              v-model="courseLab"
              label="Has a Lab"
            >
            </v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              ref="courseDescription"
              color="darkBlue"
              v-model="courseDescription"
              label="Course Description"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        class="font-weight-bold"
        color="darkerRed"
        @click="closeDialog()"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        class="font-weight-bold"
        color="darkerGreen"
        @click="closeDialog(), openSnackbar(courseNumber + ' Saved.')"
        >Save</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CourseItemEdit",
  data() {
    return {
      semesterOptions: ["Fall", "Winter", "Spring", "Summer"],
      courseId: 0,
      courseNumber: "",
      courseClass: "",
      courseSemester: [],
      courseLab: false,
      coursePrereq: "",
      courseDescription: "",
    };
  },
  computed: {
    form() {
      return {
        courseId: this.courseId,
        courseNumber: this.courseNumber,
        courseClass: this.courseClass,
        courseSemester: this.courseSemester,
        courseLab: this.courseLab,
        coursePrereq: this.coursePrereq,
        courseDescription: this.courseDescription,
      };
    },
  },
  methods: {
    closeDialog() {
      this.$emit("closeCourseDialogEvent", false);
    },
    openSnackbar(val) {
      this.$emit("openCourseSnackbarEvent", [val, true, "lightGreen"]);
    },
  },
};
</script>
