<template>
  <v-col cols="12">
    <v-card elevation="20">
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="8">
          <v-row>
            <v-col cols="6">
              <v-row>
                <v-card-title>Jury Critique</v-card-title>
              </v-row>
              <v-row>
                <v-card-subtitle>Date</v-card-subtitle>
              </v-row>
            </v-col>
            <v-col cols="4"> Soprano </v-col>
          </v-row>
          <v-row> Jurors </v-row>
          <v-row>
            <v-col>
              <v-avatar><img src="../assets/Unknown.jpeg" /></v-avatar>
              Person Name
            </v-col>
            <v-col>
              <v-avatar><img src="../assets/Unknown.jpeg" /></v-avatar>
              Person Name
            </v-col>
          </v-row>
          <v-row>
            <v-btn>View Full Critique</v-btn>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-card elevation="4">
            <v-row> Musical Selection </v-row>
            <v-row> Song name </v-row>
            <v-row> Artist </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>
