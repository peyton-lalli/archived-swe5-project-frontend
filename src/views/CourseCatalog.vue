<template>
  <v-container fluid>
    <v-card-title>
      <v-text-field
        color="darkBlue"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details></v-text-field>
      <v-dialog v-model="createDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="font-weight-bold darkBlue--text"
            v-bind="attrs"
            v-on="on">
            <font-awesome-icon
              class="darkBlue--text mr-2"
              icon="fa-solid fa-plus"
              size="xl" />
          </v-btn>
        </template>
        <CourseItemCreate
          @closeCourseDialogEvent="closeCreateDialog"
          @openCourseSnackbarEvent="openCourseSnackbar"></CourseItemCreate>
      </v-dialog>
      <v-btn color="darkBlue" plain v-on:click="filterShowing = !filterShowing">
        <font-awesome-icon
          class="darkBlue--text"
          icon="fa-solid fa-filter"
          size="xl" />
      </v-btn>
    </v-card-title>
    <v-container fluid>
      <v-row v-if="filterShowing">
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "SEMESTER" }}
          </v-card-title>
          <v-checkbox label="Fall" value="fall" hide-details></v-checkbox>
          <v-checkbox label="Winter" value="winter" hide-details></v-checkbox>
          <v-checkbox label="Spring" value="spring" hide-details></v-checkbox>
          <v-checkbox label="Summer" value="summer" hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "LOCATION" }}
          </v-card-title>
          <v-checkbox
            label="In-Class"
            value="in-class"
            hide-details></v-checkbox>
          <v-checkbox label="Online" value="online" hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "CLASS LEVEL" }}
          </v-card-title>
          <v-checkbox
            label="Freshman"
            value="freshman"
            hide-details></v-checkbox>
          <v-checkbox
            label="Sophomore"
            value="sophomore"
            hide-details></v-checkbox>
          <v-checkbox label="Junior" value="junior" hide-details></v-checkbox>
          <v-checkbox label="Senior" value="senior" hide-details></v-checkbox>
          <v-checkbox
            label="Graduate"
            value="graduate"
            hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "DAYS OF CLASS" }}
          </v-card-title>
          <v-checkbox label="Sunday" value="sunday" hide-details></v-checkbox>
          <v-checkbox label="Monday" value="monday" hide-details></v-checkbox>
          <v-checkbox label="Tuesday" value="tuesday" hide-details></v-checkbox>
          <v-checkbox
            label="Wednesday"
            value="wednesday"
            hide-details></v-checkbox>
          <v-checkbox
            label="Thursday"
            value="thursday"
            hide-details></v-checkbox>
          <v-checkbox label="Friday" value="friday" hide-details></v-checkbox>
          <v-checkbox label="Saturday" value="saturday"></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "LAB" }}
          </v-card-title>
          <v-checkbox
            label="Only Labs"
            value="onlylabs"
            hide-details></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    <v-pagination v-model="page" :length="6"></v-pagination>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="course in courses"
                :key="course.courseId"
                :lg="6"
                :md="6"
                :sm="12"
                :xs="12">
                <CourseItem
                  :course="course"
                  @openCourseSnackbarEvent="openCourseSnackbar"></CourseItem>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="6"></v-pagination>
    <v-snackbar
      class="font-weight-bold"
      v-model="snackbar"
      :timeout="timeout"
      :color="snackbarColor">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
          class="font-weight-bold">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import CourseItem from "../components/CourseItem.vue";
  import CourseItemCreate from "../components/CourseItemCreate.vue";

  export default {
    name: "CourseCatalog",
    components: {
      CourseItem,
      CourseItemCreate,
    },
    data() {
      return {
        createDialog: false,
        deleteDialog: false,
        filterShowing: false,
        timeout: 2000,
        snackbar: false,
        snackbarText: "",
        snackbarColor: "darkBlue",
        // Fake course data that will be replaced by a store getter to fill this list with course objects.
        courses: [
          {
            courseId: 0,
            courseNumber: "CMSC-2113",
            courseClass: "Object Oriented Programming",
            courseSemester: ["Fall"],
            courseLab: true,
            coursePrereq: "CMSC-1111",
            courseDescription:
              "Here is the long description that no student has ever read and then takes the class without looking it over and regrets it because they thought it would be easy.",
          },
          {
            courseId: 1,
            courseNumber: "CMSC-2413",
            courseClass: "Assembly Language",
            courseSemester: ["Fall", "Spring"],
            courseLab: false,
            coursePrereq: "",
            courseDescription:
              "Here is the long description that no student has ever read and then takes the class without looking it over and regrets it because they thought it would be easy.",
          },
        ],
      };
    },
    methods: {
      closeCreateDialog(val) {
        this.createDialog = val;
      },
      closeDeleteDialog(val) {
        this.deleteDialog = val;
      },
      openCourseSnackbar(val) {
        this.snackbar = val[1];
        this.snackbarText = val[0];
        this.snackbarColor = val[2];
      },
    },
  };
</script>
