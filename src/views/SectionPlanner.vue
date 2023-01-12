<template>
  <v-container fluid>
      <v-row>
          <v-col cols="3">
              <v-card>
                  <v-card-title class="font-weight-bold white--text darkBlue">
                      FILTERS
                  </v-card-title>
                  <v-card-text></v-card-text>
                  <v-text-field
                    color="darkBlue"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details>
                  </v-text-field>
                  <v-card-text></v-card-text>
                  <v-select
                    ref="dept"
                    v-model="dept"
                    :items="departments"
                    :menu-props="{maxHeight: '400'}"
                    label="Department"
                    multiple dense solo
                  ></v-select>
                  <v-select
                    ref="faculty"
                    v-model="faculty"
                    :items="facultyMembers"
                    :menu-props="{maxHeight: '400'}"
                    label="Faculty"
                    multiple dense solo
                  ></v-select>
                  <v-select
                    ref="room"
                    v-model="room"
                    :items="rooms"
                    :menu-props="{maxHeight: '400'}"
                    label="Room"
                    multiple dense solo
                  ></v-select>
                  <v-select
                    ref="daysOfWeek"
                    v-model="daysOfWeek"
                    :items="daysOptions"
                    :menu-props="{maxHeight: '400'}"
                    label="Days of Week"
                    multiple dense solo
                  ></v-select>
                  <v-btn class="font-weight-bold white--text lightBlue">
                    Clear Filters
                  </v-btn>
              </v-card>
          </v-col>
              <v-col cols="9">
                  <v-card>
                    <v-calendar
                      ref="calendar"
                      :now="today"
                      :value="today"
                      :events="events"
                      color="primary"
                      type="week"
                      first-time="07:00"
                    >
                    </v-calendar>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
</template>

<script>
  export default {
    name: "SectionPlanner",
    data: () => ({
      alignments: ['start','center','end'],
      departments: ['CMSC','COMM','MUSC',],
      facultyMembers: ['David North','Brian Simmons','Kyle Pullen'],
      rooms: ['233','231','228'],
      daysOptions: ['Monday','Tuesday','Wednesday','Thursday','Friday',],

      events: [
      {
          
        name: 'Object Oriented Programming',
        start: '2022-11-15 10:00',
        end: '2022-11-15 10:55',
      },
              
      {
        name: 'Assembly Language',
        start: '2022-11-16 11:00',
        end: '2022-11-16 11:55',
      },
      ],
      
      methods: [
        // Determine which days a class is and display them on those days

        // If (specificDepartment chosen), show these professors and rooms in department
        // If (specificProfessor chosen), show these departments and rooms taught by professor
        // If (specificRoom chosen), show these departments and professors using this room
        // If (specificDay || specificDays chosen), show the classes these days
        // If search made, refer key term to department, professor, room, or day
      ]
      }),
  };
</script>