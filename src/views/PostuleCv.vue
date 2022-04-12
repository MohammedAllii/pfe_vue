<template>
  <navbar-view />
  <br />
  <v-divider></v-divider>

  <div class="text-center" style="padding: 4rem">
    <h1>POSTULER VOTRE CV</h1>
    <p>
      Ajouter votre CV vous permet de postuler très rapidement <br />
      à de nombreuses opportunités depuis n'importe quel appareil.
    </p>
  </div>
  <div>
    <v-container class="text-center">
      <v-row>
        <v-col cols="12" md="4">
          <img
            src=" https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png "
            style="width: 150px; height: 150px"
          />
        </v-col>
        <div style="margin-top: 20px">
          <h1>Télécharger votre CV</h1>

          <p>Téléchargez votre CV et postulez en un seul clic!</p>
        </div>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn
                rounded
                color="blue"
                style="margin-top: 50px"
                v-bind="props"
              >
                Télecharger !
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-file-input
                        label="File input"
                        outlined
                        dense
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Votre poste actuel ou profession*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Votre localité actuelle*"
                        text
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue-darken-1" text @click="dialog = false">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-row>
      <v-divider></v-divider>
    </v-container>
    <v-container class="text-center">
      <v-row>
        <v-col cols="12" md="4">
          <img
            src="https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png"
            style="width: 150px; height: 150px"
          />
        </v-col>
        <div style="margin-top: 20px">
          <h1>Créer votre CV</h1>

          <p>création rapide de CV pour en poster un.!</p>
        </div>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn
                rounded
                color="blue"
                style="margin-top: 50px"
                v-bind="props"
              >
                Créer un !
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Email*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Votre poste actuel ou profession*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Votre localité actuelle*"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue-darken-1" text @click="dialog = false">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-row>
    </v-container>
  </div>
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
export default {
  data: () => ({
    dialog: false,
  }),
  components: { NavbarView },
};
</script>
<style></style>
