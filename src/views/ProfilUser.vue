<template>
  <navbar-view />
  <br /><br />
  <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card>
            <v-img
              v-bind:src="'../images/' + users.avatar_couverture"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
              cover
            >
              <v-toolbar style="background-color: transparent">
                <v-spacer> </v-spacer>
                <v-dialog transition="dialog-bottom-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      icon="mdi-pencil"
                      size="large"
                      color="white"
                    ></v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar color="#90CAF9"
                        >change your cover Photo here
                      </v-toolbar>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="12">
                            <v-file-input
                              show-size
                              counter
                              multiple
                              label="File input"
                            ></v-file-input>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="isActive.value = false"
                          >Close</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-toolbar>
            </v-img>

            <v-img
              v-bind:src="'../images/' + users.avatar"
              width="150px"
              class="rounded-circle mx-4"
              style="width: 150px; margin-top: -100px"
            >
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon="mdi-pencil"
                    size="small"
                    style="margin-top: 90px"
                  ></v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9"
                      >Change your profil photo here
                    </v-toolbar>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-file-input
                            show-size
                            counter
                            multiple
                            label="File input"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-img>
            <v-row class="mx-4">
              <v-col cols="12" md="12">
                <p>{{ users.name }} {{ users.last_name }}</p>
                <p>
                  {{ users.specialite }}
                </p>
                <p>
                  <v-icon>mdi-map-marker</v-icon>{{ users.adresse }},
                  {{ users.gouvernorat }}
                </p>
                <v-dialog transition="dialog-top-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn rounded flat color="transparent" v-bind="props"
                      ><v-icon color="green">mdi-pencil-outline</v-icon> Contact
                      Infos</v-btn
                    >
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card style="width: 200%; height: 200%; right: 10px">
                      <v-toolbar color="#5C6BC0"
                        >{{ users.name }} {{ users.last_name }}</v-toolbar
                      >
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="12">
                            <p
                              class="font-italic text-h5 text-red"
                              align="center"
                            >
                              contact info
                            </p>
                            <p class="font-weight-bold">
                              <v-icon color="green">mdi-linkedin</v-icon>
                              YourProfil :<br />{{ users.linkedin }}
                            </p>
                            <p class="font-weight-bold">
                              <v-icon color="green">mdi-email-outline</v-icon>
                              Your Email :<br />{{ users.email }}
                            </p>
                            <p class="font-weight-bold">
                              <v-icon color="green">mdi-cake-variant</v-icon>
                              YourBirthday :<br />{{ users.date_naissance }}
                            </p>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="isActive.value = false"
                          >Close</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-row>
          </v-card>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-file-document-edit-outline</v-icon>RESUME
              </p>
              <p>jgordjgsrjditxhjoxtfjkdfnjkfngwdfngjwd</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn class="ma-2" variant="outlined" icon color="secondary">
                <v-icon>mdi-plus-outline</v-icon>
              </v-btn>
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9"
                      >Modifier ton Résumé ici
                    </v-toolbar>
                    <v-card-text>
                      <v-textarea
                        background-color="grey lighten-2"
                        color="cyan"
                        label="write your résumé "
                        style="border-radius: 30px; width: 400px"
                      ></v-textarea>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar" multi-line>
                  {{ text }}

                  <template v-slot:actions>
                    <v-btn color="red" variant="text" @click="snackbar = false">
                      Delete
                    </v-btn>
                    <v-btn color="red" variant="text" @click="snackbar = false">
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-folder-edit</v-icon>EXPERIENCES PROFESSIONELS
              </p>
              <p>jgordjgsrjditxhjoxtfjkdfnjkfngwdfngjwd</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog
                v-model="dialog"
                fullscreen
                :scrim="false"
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="#90CAF9">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>close</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>

                  <v-container fluid align="center">
                    <h5>Ajouter an Expériences professionnelles</h5>
                    <v-icon size="50">mdi-clipboard-check-outline</v-icon>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message3"
                          label="Poste"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message4"
                          label="Nom de société"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        ref="country"
                        v-model="country"
                        :rules="[() => !!country || 'This field is required']"
                        :items="countries"
                        label="Country"
                        placeholder="Select..."
                        required
                      ></v-autocomplete>
                    </v-col>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message5"
                          label="Date Début"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message6"
                          label="Date Fin"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-checkbox
                          v-model="ex4"
                          label="Actuellement en poste"
                          color="success"
                          value="success"
                          hide-details
                        ></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          filled
                          auto-grow
                          label="Describe your expérience"
                          rows="2"
                          row-height="20"
                        ></v-textarea>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        rounded
                        style="background-color: #90caf9"
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="dialog1"
                fullscreen
                :scrim="false"
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="#90CAF9">
                    <v-btn icon dark @click="dialog1 = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>close</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>

                  <v-container fluid align="center">
                    <h5>Modifier an Expériences professionnelles</h5>
                    <v-icon size="50">mdi-clipboard-check-outline</v-icon>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message3"
                          label="Poste"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message4"
                          label="Nom de société"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        ref="country"
                        v-model="country1"
                        :rules="[() => !!country1 || 'This field is required']"
                        :items="countries1"
                        label="Country"
                        placeholder="Select..."
                        required
                      ></v-autocomplete>
                    </v-col>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message5"
                          label="Date Début"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message6"
                          label="Date Fin"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-checkbox
                          v-model="ex4"
                          label="Actuellement en poste"
                          color="success"
                          value="success"
                          hide-details
                        ></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          filled
                          auto-grow
                          label="Describe your expérience"
                          rows="2"
                          row-height="20"
                        ></v-textarea>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        rounded
                        style="background-color: #90caf9"
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-card>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar6 = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar6" multi-line>
                  {{ text6 }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar6 = false"
                    >
                      supprimer
                    </v-btn>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar6 = false"
                    >
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-crop-free</v-icon>FORMATIONS ET DIPLOMES
              </p>
              <p>jgordjgsrjditxhjoxtfjkdfnjkfngwdfngjwd</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog
                v-model="dialog2"
                fullscreen
                :scrim="false"
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="#90CAF9">
                    <v-btn icon dark @click="dialog2 = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>close</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-container fluid align="center">
                    <h5>Ajouter Formations et diplômes</h5>
                    <v-icon size="50">mdi-paper-cut-vertical</v-icon>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message7"
                          label="Établissement"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message8"
                          label="Diplôme"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          ref="country"
                          v-model="country2"
                          :rules="[
                            () => !!country2 || 'This field is required',
                          ]"
                          :items="countries2"
                          label="Country"
                          placeholder="Select..."
                          required
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message9"
                          label="Discipline"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message5"
                          label="Date Début"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message6"
                          label="Date Fin"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-checkbox
                          v-model="ex4"
                          label="Actuellement Etudiant(e)"
                          color="success"
                          value="success"
                          hide-details
                        ></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          filled
                          auto-grow
                          label="Describe"
                          rows="2"
                          row-height="20"
                        ></v-textarea>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        rounded
                        style="background-color: #90caf9"
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="dialog3"
                fullscreen
                :scrim="false"
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="#90CAF9">
                    <v-btn icon dark @click="dialog3 = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>close</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-container fluid align="center">
                    <h5>Modifier Formations et diplômes</h5>
                    <v-icon size="50">mdi-paper-cut-vertical</v-icon>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message7"
                          label="Établissement"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message8"
                          label="Diplôme"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          ref="country"
                          v-model="country3"
                          :rules="[
                            () => !!country3 || 'This field is required',
                          ]"
                          :items="countries3"
                          label="Country"
                          placeholder="Select..."
                          required
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message9"
                          label="Discipline"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message5"
                          label="Date Début"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="message6"
                          label="Date Fin"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-checkbox
                          v-model="ex4"
                          label="Actuellement Etudiant(e)"
                          color="success"
                          value="success"
                          hide-details
                        ></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          filled
                          auto-grow
                          label="Describe"
                          rows="2"
                          row-height="20"
                        ></v-textarea>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        rounded
                        style="background-color: #90caf9"
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-card>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar7 = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar7" multi-line>
                  {{ text7 }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar7 = false"
                    >
                      supprimer
                    </v-btn>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar7 = false"
                    >
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-parachute</v-icon>COMPETENCES
              </p>
              <p>jgordjgsrjditxhjoxtfjkdfnjkfngwdfngjwd</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9"
                      >Ajouter les compétences ecrites
                    </v-toolbar>
                    <v-card-text>
                      <p>
                        compétences
                        <v-col cols="12" sm="12">
                          <v-text-field
                            label="compétences"
                            variant="outlined"
                            clearable
                            clear-icon="mdi-cancel"
                            style="width: 500px"
                          ></v-text-field>
                        </v-col>
                      </p>
                      <p>
                        Expériences

                        <v-select
                          style="border-style: ridge"
                          v-model="select2"
                          :items="items2"
                          :rules="[(v) => !!v || 'Item is required']"
                          label="Item"
                          required
                        ></v-select>
                      </p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Ajouter</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9"
                      >Modifier les compétences ecrites
                    </v-toolbar>
                    <v-card-text>
                      <p>
                        compétences
                        <v-col cols="12" sm="12">
                          <v-text-field
                            label="compétences"
                            variant="outlined"
                            clearable
                            clear-icon="mdi-cancel"
                            style="width: 500px"
                          ></v-text-field>
                        </v-col>
                      </p>
                      <p>
                        Expériences

                        <v-select
                          style="border-style: ridge"
                          v-model="select"
                          :items="items"
                          :rules="[(v) => !!v || 'Item is required']"
                          label="Item"
                          required
                        ></v-select>
                      </p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar5 = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar5" multi-line>
                  {{ text5 }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar5 = false"
                    >
                      supprimer
                    </v-btn>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar5 = false"
                    >
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-language-c</v-icon>LANGUES
              </p>
              <p>jgordjgsrjditxhjoxtfjkdfnjkfngwdfngjwd</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9"
                      >Modifier les langues ecrites</v-toolbar
                    >
                    <v-card-text>
                      <p>
                        Langues
                        <v-col cols="12" sm="12">
                          <v-text-field
                            v-model="message4"
                            label="compétences"
                            variant="outlined"
                            clearable
                            clear-icon="mdi-cancel"
                            style="width: 500px"
                          ></v-text-field>
                        </v-col>
                      </p>
                      <p>
                        Niveau
                        <v-select
                          style="border-style: ridge"
                          v-model="select3"
                          :items="items3"
                          :rules="[(v) => !!v || 'Item is required']"
                          label="Item"
                          required
                        ></v-select>
                      </p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9"
                      >Modifier les langues ecrites</v-toolbar
                    >
                    <v-card-text>
                      <p>
                        Langues
                        <v-col cols="12" sm="12">
                          <v-text-field
                            v-model="message4"
                            label="compétences"
                            variant="outlined"
                            clearable
                            clear-icon="mdi-cancel"
                            style="width: 500px"
                          ></v-text-field>
                        </v-col>
                      </p>
                      <p>
                        Niveau
                        <v-select
                          style="border-style: ridge"
                          v-model="select1"
                          :items="items1"
                          :rules="[(v) => !!v || 'Item is required']"
                          label="Item"
                          required
                        ></v-select>
                      </p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar4 = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar4" multi-line>
                  {{ text4 }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar4 = false"
                    >
                      supprimer
                    </v-btn>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar4 = false"
                    >
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-school</v-icon>SKILLS
              </p>
              <v-container v-if="users.skills_user != null">
                <v-banner
                  lines="six"
                  icon="mdi-script-text"
                  color="grey"
                  class="my-4"
                >
                  <v-banner-text>
                    <h6>
                      {{ users.skills_user }}
                    </h6>
                    <br />
                  </v-banner-text>
                </v-banner>
              </v-container>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Ajouter un skill</v-toolbar>
                    <v-card-text>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          label="Your skills"
                          style="width: 400px"
                          v-model="users.skills_user"
                          multiple
                        ></v-textarea>
                      </v-col>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addskillsUser">Ajouter</v-btn>
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Modifier tes skills</v-toolbar>
                    <v-card-text>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          label="Your skills"
                          style="width: 400px"
                          v-model="users.skills_user"
                          multiple
                        ></v-textarea>
                      </v-col>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addskillsUser"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar3 = true"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-snackbar v-model="snackbar3" multi-line>
                {{ text3 }}

                <template v-slot:actions>
                  <v-btn
                    color="red"
                    variant="text"
                    @click.prevent="deleteskillsUser"
                  >
                    supprimer
                  </v-btn>
                  <v-btn color="red" variant="text" @click="snackbar3 = false">
                    Annuler
                  </v-btn>
                </template>
              </v-snackbar>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-link</v-icon>LIENS
              </p>
              <p>jgordjgsrjditxhjoxtfjkdfnjkfngwdfngjwd</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Ajouter un lien</v-toolbar>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-text-field
                            label="Ajouter Titre"
                            prepend-inner-icon="mdi-subtitles-outline"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field
                            label="Ajouter  URL"
                            prepend-inner-icon="mdi-link"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Ajouter</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Modifier le lien</v-toolbar>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-text-field
                            label="Modifier Titre"
                            prepend-inner-icon="mdi-subtitles-outline"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field
                            label="Modifier URL"
                            prepend-inner-icon="mdi-link"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar2 = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar2" multi-line>
                  {{ text2 }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar2 = false"
                    >
                      Delete
                    </v-btn>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar2 = false"
                    >
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-lightbulb-on-outline</v-icon>INTERETS
              </p>
              <p>jgordjgsrjditxhjoxtfjkdfnjkfngwdfngjwd</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn class="ma-2" variant="outlined" icon color="secondary">
                <v-icon>mdi-plus-outline</v-icon>
              </v-btn>

              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    color="red"
                    v-bind="props"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9"
                      >Modifier ton Intérets ici
                    </v-toolbar>
                    <v-card-text>
                      <v-textarea
                        background-color="grey lighten-2"
                        color="cyan"
                        label="write your Intérets "
                        style="border-radius: 30px; width: 400px"
                      ></v-textarea>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="isActive.value = false"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <v-btn
                class="ma-2"
                variant="outlined"
                icon
                color="green"
                @click="snackbar1 = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar1" multi-line>
                  {{ text1 }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar1 = false"
                    >
                      Delete
                    </v-btn>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar1 = false"
                    >
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  components: { NavbarView, FooterView },
  data() {
    return {
      users: {},
      skills_user: "",
      message3: "ex:designer!",
      message4: "Nom de la société!",
      message5: "tell us!",
      message6: "tell us!",
      message7: "Enter your Établissement!",
      message8: "Enter your Diplôme!",
      message9: "Discipline!",
      ex4: "success",
      items1: ["Débutant", "Courant", "Avancé", "Langue Maternelle"],
      items3: ["Débutant", "Courant", "Avancé", "Langue Maternelle"],
      snackbar: false,
      text: `would you like to delete this resume?`,
      snackbar1: false,
      text1: `would you like to delete these Intérets?`,
      snackbar2: false,
      text2: `would you like to delete these liens?`,
      snackbar3: false,
      text3: `would you like to delete these skills?`,
      snackbar4: false,
      text4: `would you like to delete these langues?`,
      snackbar5: false,
      text5: `would you like to delete these competences?`,
      snackbar6: false,
      text6: `would you like to delete these expériences professionels?`,
      snackbar7: false,
      text7: `would you like to delete these Formations et Diplomes?`,
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 12,
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      axios
        .get("http://localhost:8000/api/auth/getUser/" + this.user.id)
        .then((response) => {
          this.users = response.data;
        });
    },
    async addskillsUser() {
      axios
        .post(
          "http://localhost:8000/api/auth/addskillsusers/" +
            this.$route.params.id,
          {
            skills_user: this.users.skills_user,
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deleteskillsUser() {
      axios
        .post(
          "http://localhost:8000/api/auth/addskillsusers/" +
            this.$route.params.id,
          {
            skills_user: null,
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
