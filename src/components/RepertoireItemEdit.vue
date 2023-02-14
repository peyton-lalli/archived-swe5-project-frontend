<template>
  <v-card ref="form">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              ref="pieceName"
              required
              v-model="pieceName"
              :rules="[() => !!pieceName || 'This field is required']"
              color="darkBlue"
              label="Piece Name"
              placeholder="Il Mio Bel Foco">
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              ref="composer"
              required
              v-model="composer"
              color="darkBlue"
              label="Composer"
              placeholder="Marcello, Benedetto">
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
      <!-- Eventually add section for lyrics or translation -->
      <!-- Eventually add section for events that piece is used -->
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
    name: "RepoertoireItemEdit",
    data() {
      return {
        pieceName: this.repertoire.pieceName,
        composer: this.repertoire.composer,
        lyrics: this.repertoire.lyrics,
      };
    },

    computed: {
      form() {
        return {
          pieceName: this.pieceName,
          composer: this.composer,
          lyrics: this.lyrics,
        };
      },
    },
    methods: {
      closeDialog() {
        this.$emit("closeDialogEvent", false);
      },
    },
  };
</script>