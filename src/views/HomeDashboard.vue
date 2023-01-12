<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="font-weight-bold white--text darkBlue">
            YOUR SECTIONS
            <v-btn icon @click="triggerDownload()">
              <font-awesome-icon
                icon="fa-solid fa-download"
                class="white--text" />
            </v-btn>
          </v-card-title>
          <v-container fluid ref="content">
            <v-row dense>
              <v-col
                v-for="section in sections"
                :key="section.sectionId"
                :lg="sections.length < 4 ? 6 : 3"
                :md="6"
                :sm="6"
                :xs="12">
                <SectionItem
                  :section="section"
                  @openSnackbarEvent="openSnackBar"
                  @updateFavoritesEvent="updateFavorites"></SectionItem>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="font-weight-bold white--text darkBlue">
            FAVORITES
          </v-card-title>
          <v-container fluid ref="content">
            <v-row dense>
              <v-col
                v-for="section in favoriteSections"
                :key="section.sectionId"
                :lg="favoriteSections.length < 4 ? 6 : 3"
                :md="6"
                :sm="6"
                :xs="12">
                <SectionItem
                  :section="
                    sections[
                      this.sections
                        .map((section) => section.sectionId)
                        .indexOf(section.sectionId)
                    ]
                  "
                  @openSnackbarEvent="openSnackBar"
                  @updateFavoritesEvent="updateFavorites"></SectionItem>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="font-weight-bold white--text darkBlue">
            ABOUT
          </v-card-title>
          <v-card-text class="px-0 pb-0"><UserAbout></UserAbout></v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
  import SectionItem from "../components/SectionItem.vue";
  import UserAbout from "../components/UserAbout.vue";
  import jsPDF from "jspdf";
  import html2canvas from "html2canvas";

  export default {
    name: "HomeDashboard",
    components: {
      SectionItem,
      UserAbout,
    },
    data() {
      return {
        // Fake section data that will be replaced by a store getter to fill this list with section objects.
        sections: [
          {
            sectionId: 0,
            sectionNumber: "CMSC-2113",
            sectionInstanceNumber: 1,
            sectionName: "Object Oriented Programming",
            sectionStartTime: "10:00am",
            sectionEndTime: "10:55am",
            sectionDOW: ["Monday", "Wednesday", "Friday"],
            sectionLocation: "PEC 213",
            sectionSize: 30,
            sectionStartDate: "08/06/2022",
            sectionEndDate: "11/18/2022",
            sectionSemester: "Fall",
            sectionTerms: ["T1", "T2"],
            sectionIsFavorite: true,
          },
          {
            sectionId: 1,
            sectionNumber: "CMSC-2413",
            sectionInstanceNumber: 1,
            sectionName: "Assembly Language",
            sectionStartTime: "11:00am",
            sectionEndTime: "11:55am",
            sectionDOW: ["Tuesday", "Thursday"],
            sectionLocation: "PEC 211",
            sectionSize: 30,
            sectionStartDate: "08/06/2022",
            sectionEndDate: "11/18/2022",
            sectionSemester: "Fall",
            sectionTerms: ["T1", "T2"],
            sectionIsFavorite: true,
          },
        ],
        favoriteSections: [],
        timeout: 2000,
        snackbar: false,
        snackbarText: "",
        snackbarColor: "darkBlue",
      };
    },
    methods: {
      openSnackBar(val) {
        this.snackbar = val[1];
        this.snackbarText = val[0];
        this.snackbarColor = val[2];
      },
      updateFavorites(val) {
        console.log(val[0]);
        // NEED PUT TO DATABASE FOR FAVORITE FLAG
        const regIndex = this.sections
          .map((section) => section.sectionId)
          .indexOf(val[0]);
        console.log(this.sections[regIndex].sectionIsFavorite);

        const favIndex = this.favoriteSections
          .map((section) => section.sectionId)
          .indexOf(val[0]);

        if (!this.sections[regIndex].sectionIsFavorite) {
          this.sections[regIndex].sectionIsFavorite = true;
          this.favoriteSections.splice(regIndex, 0, this.sections[regIndex]);
        } else {
          this.sections[regIndex].sectionIsFavorite = false;
          this.favoriteSections.splice(favIndex, 1);
        }
      },
      triggerDownload() {
        const doc = new jsPDF({
          orientation: "l",
          unit: "px",
          format: "a4",
          hotfixes: ["px_scaling"],
        });
        // Searches for a ref value of 'content' and generates the download from that
        html2canvas(this.$refs.content, {
          width: doc.internal.pageSize.getWidth(),
          height: doc.internal.pageSize.getHeight(),
        }).then((canvas) => {
          const img = canvas.toDataURL("image/png");

          doc.addImage(
            img,
            "PNG",
            0,
            0,
            doc.internal.pageSize.getWidth(),
            doc.internal.pageSize.getHeight()
          );
          doc.save("yourSectionsDownload.pdf");
        });
      },
    },
  };
</script>
