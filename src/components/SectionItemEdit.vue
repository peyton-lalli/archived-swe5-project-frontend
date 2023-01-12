<template>
  <v-card ref="form">
    <v-card-title class="font-weight-bold lightGreen white--text">
      EDIT SECTION
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              ref="sectionName"
              required
              v-model="sectionName"
              :rules="[() => !!sectionName || 'This field is required']"
              color="darkBlue"
              label="Section Name"
              placeholder="Programming I">
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              ref="sectionNumber"
              required
              v-model="sectionNumber"
              :rules="[
                () => !!sectionNumber || 'This field is required',
                () =>
                  (!!sectionNumber && sectionNumber.length >= 9) ||
                  'Number too short',
                () =>
                  (!!sectionNumber && sectionNumber.length <= 9) ||
                  'Number too long',
                () =>
                  sectionNumber[4] === '-' || 'Format must be \'ABCD-1234\'',
                () =>
                  !/\d/.test(sectionNumber.substring(0, 4)) ||
                  'First 4 must be char',
                () =>
                  !/[a-zA-Z]/g.test(sectionNumber.substring(5, 9)) ||
                  'Last 4 must be num',
              ]"
              color="darkBlue"
              label="Section Number"
              placeholder="CMSC-1111">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              ref="sectionLocation"
              required
              v-model="sectionLocation"
              :rules="[() => !!sectionLocation || 'This field is required']"
              color="darkBlue"
              label="Section Location"
              placeholder="PEC-213"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
              ref="sectionDOW"
              required
              :rules="[() => sectionDOW.length > 0 || 'This field is required']"
              color="darkBlue"
              v-model="sectionDOW"
              :items="daysOptions"
              :menu-props="{ maxHeight: '400' }"
              label="Days of Week"
              multiple
              persistent-hint></v-select>
          </v-col>
        </v-row>
        <v-row>
          <!-- Section Start Time Picker -->
          <v-col cols="6">
            <v-dialog
              ref="dialog"
              v-model="sectionStartTimePickerShown"
              :return-value.sync="sectionStartTime"
              persistent
              width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  color="darkBlue"
                  v-model="sectionStartTime"
                  label="Section Start Time"
                  readonly
                  v-bind="attrs"
                  v-on="on">
                </v-text-field>
              </template>
              <v-time-picker
                ampm-in-title
                color="darkBlue"
                v-if="sectionStartTimePickerShown"
                v-model="sectionStartTime"
                full-width>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  class="font-weight-bold"
                  color="darkerRed"
                  @click="sectionStartTimePickerShown = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  class="font-weight-bold"
                  color="darkerGreen"
                  @click="$refs.dialog.save(sectionStartTime)">
                  Save
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
          <!-- Section End Time Picker -->
          <v-col cols="6">
            <v-dialog
              ref="dialog2"
              v-model="sectionEndTimePickerShown"
              :return-value.sync="sectionEndTime"
              persistent
              width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  color="darkBlue"
                  v-model="sectionEndTime"
                  label="Section End Time"
                  readonly
                  v-bind="attrs"
                  v-on="on">
                </v-text-field>
              </template>
              <v-time-picker
                ampm-in-title
                color="darkBlue"
                v-if="sectionEndTimePickerShown"
                v-model="sectionEndTime"
                full-width>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  class="font-weight-bold"
                  color="darkerRed"
                  @click="sectionEndTimePickerShown = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  class="font-weight-bold"
                  color="darkerGreen"
                  @click="$refs.dialog2.save(sectionEndTime)">
                  Save
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <!-- Dates may change depending on how we represent it in the database -->
        <v-row>
          <!-- Section Start Date Picker -->
          <v-col cols="6">
            <v-dialog
              ref="dialog3"
              v-model="sectionStartDatePickerShown"
              :return-value.sync="sectionStartDate"
              persistent
              width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="sectionStartDate"
                  label="Section Start Date"
                  v-bind="attrs"
                  @blur="formattedStartDate = formatDate(sectionStartDate)"
                  v-on="on">
                </v-text-field>
              </template>
              <v-date-picker
                v-if="sectionStartDatePickerShown"
                v-model="formattedStartDate"
                scrollable
                color="darkBlue">
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="darkerRed"
                  class="font-weight-bold"
                  @click="sectionStartDatePickerShown = false">
                  CANCEL
                </v-btn>
                <v-btn
                  class="font-weight-bold"
                  text
                  color="darkerGreen"
                  @click="$refs.dialog3.save(parseDate(formattedStartDate))">
                  Save
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <!-- Section End Date Picker -->
          <v-col cols="6">
            <v-dialog
              ref="dialog4"
              v-model="sectionEndDatePickerShown"
              :return-value.sync="sectionEndDate"
              persistent
              width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="sectionEndDate"
                  label="Section End Date"
                  v-bind="attrs"
                  @blur="formattedEndDate = formatDate(sectionEndDate)"
                  v-on="on">
                </v-text-field>
              </template>
              <v-date-picker
                v-if="sectionEndDatePickerShown"
                v-model="formattedEndDate"
                scrollable
                color="darkBlue">
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="darkerRed"
                  class="font-weight-bold"
                  @click="sectionEndDatePickerShown = false">
                  CANCEL
                </v-btn>
                <v-btn
                  class="font-weight-bold"
                  text
                  color="darkerGreen"
                  @click="$refs.dialog4.save(parseDate(formattedEndDate))">
                  Save
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              required
              ref="sectionSize"
              v-model="sectionSize"
              :rules="[
                () => !!sectionSize || 'This field is required',
                () => !Number.isNaN(+sectionSize) || 'Value must be a number',
                () => +sectionSize < 999 || 'Must be less than 999',
              ]"
              color="darkBlue"
              label="Section Size"
              placeholder="30">
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
        @click="closeDialog()">
        Cancel
      </v-btn>
      <v-btn
        text
        class="font-weight-bold"
        color="darkerGreen"
        @click="closeDialog()"
        >Save</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "SectionItemEdit",
    data() {
      return {
        time: null,
        daysOptions: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Asynchronous",
        ],
        sectionStartTimePickerShown: false,
        sectionEndTimePickerShown: false,
        sectionStartDatePickerShown: false,
        sectionEndDatePickerShown: false,
        formattedStartDate: this.formatDate(this.sectionStartDate),
        formattedEndDate: this.formatDate(this.sectionEndDate),

        sectionId: this.section.sectionId,
        sectionNumber: this.section.sectionNumber,
        sectionName: this.section.sectionName,
        sectionStartTime: this.section.sectionStartTime,
        sectionEndTime: this.section.sectionEndTime,
        sectionDOW: this.section.sectionDOW,
        sectionLocation: this.section.sectionLocation,
        sectionSize: this.section.sectionSize,
        sectionStartDate: this.section.sectionStartDate,
        sectionEndDate: this.section.sectionEndDate,
        sectionSemester: this.section.sectionSemester,
        sectionTerms: this.section.sectionTerms,
      };
    },
    props: {
      section: Object,
    },
    computed: {
      form() {
        return {
          sectionNumber: this.sectionNumber,
          sectionName: this.sectionName,
          sectionStartTime: this.sectionStartTime,
          sectionEndTime: this.sectionEndTime,
          sectionDOW: this.sectionDOW,
          sectionLocation: this.sectionLocation,
          sectionSize: this.sectionSize,
          sectionStartDate: this.sectionStartDate,
          sectionEndDate: this.sectionEndDate,
          sectionSemester: this.sectionSemester,
          sectionTerms: this.sectionTerms,
        };
      },
    },
    methods: {
      closeDialog() {
        this.$emit("closeDialogEvent", false);
      },
      parseDate(date) {
        if (!date) return null;

        const [year, month, day] = date.split("-");
        return `${month}/${day}/${year}`;
      },
      formatDate(date) {
        if (!date) return null;

        const [month, day, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      },
    },
  };
</script>
