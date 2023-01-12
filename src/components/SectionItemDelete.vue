<template>
  <v-card>
    <v-card-title class="font-weight-bold lightRed white--text">
      DELETE {{ section.sectionNumber }}
    </v-card-title>
    <v-card-text class="font-weight-bold text-center pt-8">
      Are you sure you want to delete {{ section.sectionNumber }}:
      {{ section.sectionName }}?
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        class="font-weight-bold"
        color="darkBlue"
        @click="closeDialog()">
        Cancel
      </v-btn>
      <v-btn
        text
        class="font-weight-bold"
        color="darkerRed"
        @click="
          closeDialog(), openSnackbar(section.sectionNumber + ' Deleted.')
        ">
        Delete
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: "SectionItemDelete",
    data() {
      return {};
    },
    props: {
      section: Object,
    },
    methods: {
      closeDialog() {
        this.$emit("closeDialogEvent", false);
      },
      openSnackbar(val) {
        this.$emit("openSnackbarEvent", [val, true, "lightRed"]);
      },
    },
  };
</script>
