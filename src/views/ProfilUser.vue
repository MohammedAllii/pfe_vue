<template>
  <navbar-view />
  <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card>
            <v-img
              v-bind:src="'../images/' + users.avatar_couverture"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
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
                      v-if="user.id == users.id"
                    ></v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar color="primary"
                        >Télécharger votre photo de couverture</v-toolbar
                      >
                      <v-icon style="margin-left: 200px" size="50">
                        mdi-check-outline
                      </v-icon>
                      <form @submit.prevent="submit1">
                        <input type="file" @change="onChange1" />
                        <v-card-actions class="justify-end">
                          <v-btn text rounded @click="isActive.value = false"
                            >Annuler</v-btn
                          >
                          <v-btn text rounded type="submit">ENregistrer</v-btn>
                        </v-card-actions>
                      </form>
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
                    v-if="user.id == users.id"
                  ></v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="primary"
                      >Télécharger votre photo</v-toolbar
                    >
                    <v-icon style="margin-left: 200px" size="50">
                      mdi-check-outline
                    </v-icon>
                    <form @submit.prevent="submit">
                      <input type="file" @change="onChange" />
                      <v-card-actions class="justify-end">
                        <v-btn text rounded @click="isActive.value = false"
                          >Annuler</v-btn
                        >
                        <v-btn text rounded type="submit">ENregistrer</v-btn>
                      </v-card-actions>
                    </form>
                  </v-card>
                </template>
              </v-dialog>
            </v-img>
            <v-row class="mx-4">
              <v-col cols="12" md="12">
                <h5>{{ users.name }} {{ users.last_name }}</h5>
                <p>
                  <strong>{{ users.specialite }}</strong>
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
                              class="font-italic text-h5 text-green"
                              align="center"
                            >
                              contact info
                            </p>
                            <p
                              class="font-weight-bold"
                              v-if="users.linkedin != null"
                            >
                              <v-icon color="green">mdi-linkedin</v-icon>
                              Linkedin :{{ users.linkedin }}
                            </p>
                            <p class="font-weight-bold">
                              <v-icon color="green">mdi-email-outline</v-icon>
                              Email :{{ users.email }}
                            </p>
                            <p
                              class="font-weight-bold"
                              v-if="users.date_naissance != null"
                            >
                              <v-icon color="green">mdi-cake-variant</v-icon>
                              Date De Naissance :<br />{{
                                users.date_naissance
                              }}
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
              <v-container align="center" v-if="users.resume_user == null">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Résumé
                </h5>
              </v-container>
              <p>{{ users.resume_user }}</p>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    v-if="users.id == user.id"
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Ajouter un Résumé</v-toolbar>
                    <v-card-text>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          label="Your Résume"
                          style="width: 400px"
                          v-model="users.resume_user"
                          multiple
                        ></v-textarea>
                      </v-col>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addresumeUser">Ajouter</v-btn>
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
                    v-if="users.id == user.id && users.resume_user != null"
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
                        v-model="users.resume_user"
                        label="write your résumé "
                        style="border-radius: 30px; width: 400px"
                      ></v-textarea>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addresumeUser"
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
                v-if="users.id == user.id && users.resume_user != null"
                @click="snackbar = true"
              >
                <v-icon>mdi-delete</v-icon>
                <v-snackbar v-model="snackbar" multi-line>
                  {{ text }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click.prevent="deleteresumeUser"
                    >
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
              <v-container align="center" v-if="experiences == ''">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Expérience
                </h5>
              </v-container>
              <v-container
                v-for="experience in experiences"
                :key="experience.id"
              >
                <h5 style="color: green">{{ experience.poste }}</h5>
                <h6>{{ experience.name_company }}</h6>
                <h6>
                  <strong>{{ experience.country }}</strong>
                </h6>
                <h6>
                  {{ experience.debut }}<strong style="color: red">/</strong
                  >{{ experience.fin }}
                </h6>
                <h6>
                  <strong>{{ experience.description }}</strong>
                </h6>

                <v-btn
                  class="ma-4"
                  variant="outlined"
                  icon
                  color="green"
                  v-if="experience.id_user == user.id"
                  :to="{
                    name: 'modifierexperience',
                    params: { id: experience.id },
                  }"
                >
                  <v-icon>mdi-lead-pencil</v-icon>
                </v-btn>
                <v-btn
                  class="ma-2"
                  variant="outlined"
                  icon
                  color="red"
                  @click.prevent="deleteexperience(experience.id)"
                  v-if="experience.id_user == user.id"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-container>
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
                    v-if="users.id == user.id"
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
                          v-model="poste_ex"
                          label="Poste"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="name_company"
                          label="Nom de société"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="country"
                        label="where do youlive?"
                        :items="[
                          'Ariana',
                          'Béja',
                          'Ben Arous',
                          'Bizerte',
                          'Gabès',
                          'Gafsa',
                          'Jendouba',
                          'Kairouan',
                          'Kasserine',
                          'Kébili',
                          'Kef',
                          'Mahdia',
                          'Manouba',
                          'Médenine',
                          'Monastir',
                          'Nabeul',
                          'Sfax',
                          'Sidi Bouzid',
                          ' Siliana',
                          'Sousse',
                          ' Tataouine',
                          'Tozeur',
                          'Tunis',
                          'Zaghouan',
                        ]"
                      ></v-select>
                    </v-col>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="debut"
                          label="Date Début"
                          type="date"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="fin"
                          type="date"
                          label="Date Fin"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          filled
                          v-model="description"
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
                        @click.prevent="addexperience"
                        >Enregistrer</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-crop-free</v-icon>FORMATIONS ET DIPLOMES
              </p>
              <v-container align="center" v-if="diplomes == ''">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Diplome
                </h5>
              </v-container>
              <v-container v-for="diplome in diplomes" :key="diplome.id">
                <h5 style="color: green">{{ diplome.etablissement }}</h5>
                <h6>{{ diplome.diplome }}</h6>
                <h6>
                  <strong>{{ diplome.country }}</strong>
                </h6>
                <h6>
                  {{ diplome.debut }}<strong style="color: red">/</strong
                  >{{ diplome.fin }}
                </h6>
                <h6>
                  <strong>{{ diplome.description }}</strong>
                </h6>

                <v-btn
                  class="ma-4"
                  variant="outlined"
                  icon
                  color="green"
                  v-if="diplome.id_user == user.id"
                  :to="{
                    name: 'modifierdiplome',
                    params: { id: diplome.id },
                  }"
                >
                  <v-icon>mdi-lead-pencil</v-icon>
                </v-btn>
                <v-btn
                  class="ma-2"
                  variant="outlined"
                  icon
                  color="red"
                  @click.prevent="deletediplome(diplome.id)"
                  v-if="diplome.id_user == user.id"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-container>
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
                    v-if="users.id == user.id"
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
                          v-model="etablissement"
                          label="Établissement"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="diplome"
                          label="Diplôme"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="countrys"
                          label="Country?"
                          :items="[
                            'Ariana',
                            'Béja',
                            'Ben Arous',
                            'Bizerte',
                            'Gabès',
                            'Gafsa',
                            'Jendouba',
                            'Kairouan',
                            'Kasserine',
                            'Kébili',
                            'Kef',
                            'Mahdia',
                            'Manouba',
                            'Médenine',
                            'Monastir',
                            'Nabeul',
                            'Sfax',
                            'Sidi Bouzid',
                            ' Siliana',
                            'Sousse',
                            ' Tataouine',
                            'Tozeur',
                            'Tunis',
                            'Zaghouan',
                          ]"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="discipline"
                          label="Discipline"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="debuts"
                          label="Date Début"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="fins"
                          label="Date Fin"
                          variant="underlined"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          filled
                          auto-grow
                          v-model="descriptions"
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
                        @click.prevent="adddiplome"
                        >Enregistrer</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-parachute</v-icon>COMPETENCES
              </p>
              <v-container align="center" v-if="competences == ''">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Compétence
                </h5>
              </v-container>
              <v-container
                v-for="competence in competences"
                :key="competence.id"
              >
                <h6>
                  <strong>{{ competence.competence }}</strong
                  >({{ competence.experience }})
                </h6>

                <v-dialog transition="dialog-top-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      class="ma-2"
                      variant="outlined"
                      icon
                      v-if="competence.id_user == user.id"
                      color="green"
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
                              v-model="competence.competence"
                              variant="outlined"
                              label="Compétences"
                              clearable
                              clear-icon="mdi-cancel"
                              style="width: 550px"
                            ></v-text-field>
                          </v-col>
                        </p>
                        <p>
                          Expériences

                          <v-select
                            v-model="competence.experience"
                            label="Expérience"
                            :items="[
                              '0.5 ans',
                              '1 ans',
                              '2 ans',
                              '3 ans',
                              '4 ans',
                              '5 ans',
                              '6 ans',
                              '7 ans',
                              '8 ans',
                              '9 ans',
                              '10 ans',
                              '11 ans',
                              '12 ans',
                              '13 ans',
                              '14 ans',
                              '15 ans',
                              '16 ans',
                              '17 ans',
                              '18 ans',
                              '19 ans',
                              '20 ans',
                            ]"
                          ></v-select>
                        </p>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click.prevent="
                            updatecompetence(
                              competence.competence,
                              competence.experience,
                              competence.id
                            )
                          "
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
                  color="red"
                  @click.prevent="deletecompetence(competence.id)"
                  v-if="competence.id_user == user.id"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
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
                    v-if="users.id == user.id"
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
                            v-model="competence"
                            variant="outlined"
                            label="Compétences"
                            clearable
                            clear-icon="mdi-cancel"
                            style="width: 550px"
                          ></v-text-field>
                        </v-col>
                      </p>
                      <p>
                        Expériences

                        <v-select
                          v-model="experience"
                          label="Expérience"
                          :items="[
                            '0.5 ans',
                            '1 ans',
                            '2 ans',
                            '3 ans',
                            '4 ans',
                            '5 ans',
                            '6 ans',
                            '7 ans',
                            '8 ans',
                            '9 ans',
                            '10 ans',
                            '11 ans',
                            '12 ans',
                            '13 ans',
                            '14 ans',
                            '15 ans',
                            '16 ans',
                            '17 ans',
                            '18 ans',
                            '19 ans',
                            '20 ans',
                          ]"
                        ></v-select>
                      </p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addcompetence">Ajouter</v-btn>
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-language-c</v-icon>LANGUES
              </p>
              <v-container align="center" v-if="langues == ''">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Langue
                </h5>
              </v-container>
              <v-container v-for="langue in langues" :key="langue.id">
                <h6>
                  <strong>{{ langue.langue }}</strong
                  >({{ langue.niveau }})
                </h6>
                <v-dialog class="popup1" transition="dialog-top-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      class="ma-2"
                      variant="outlined"
                      icon
                      color="red"
                      v-if="langue.id_user == user.id"
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
                              v-model="langue.langue"
                              label="Langue"
                              variant="outlined"
                              clearable
                              clear-icon="mdi-cancel"
                              style="width: 550px"
                            ></v-text-field>
                          </v-col>
                        </p>
                        <p>
                          Niveau
                          <v-select
                            label="Niveau"
                            v-model="langue.niveau"
                            :items="[
                              'Débutant',
                              'Courant',
                              'Avancé',
                              'Langue maternelle',
                            ]"
                            required
                          ></v-select>
                        </p>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click.prevent="
                            updateLangue(
                              langue.langue,
                              langue.niveau,
                              langue.id
                            )
                          "
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
                  v-if="langue.id_user == user.id"
                  color="green"
                  @click.prevent="deletelangue(langue.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
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
                    v-if="users.id == user.id"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Ajouter les langues</v-toolbar>
                    <v-card-text>
                      <p>
                        Langues
                        <v-col cols="12" sm="12">
                          <v-text-field
                            v-model="langue"
                            label="Langue"
                            variant="outlined"
                            clearable
                            clear-icon="mdi-cancel"
                            style="width: 550px"
                          ></v-text-field>
                        </v-col>
                      </p>
                      <p>
                        Niveau
                        <v-select
                          label="Niveau"
                          v-model="niveau"
                          :items="[
                            'Débutant',
                            'Courant',
                            'Avancé',
                            'Langue maternelle',
                          ]"
                          required
                        ></v-select>
                      </p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addlangue">Ajouter</v-btn>
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-lightbulb-on-outline</v-icon>SKILLS
              </p>
              <v-container align="center" v-if="skills == ''">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Skills
                </h5>
              </v-container>
              <v-container v-for="skill in skills" :key="skill.id">
                <h6>
                  <strong>{{ skill.skill }}</strong>
                </h6>
                <v-dialog transition="dialog-bottom-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      class="ma-2"
                      variant="outlined"
                      icon
                      v-if="users.id == user.id && skills != ''"
                      color="red"
                      v-bind="props"
                    >
                      <v-icon>mdi-lead-pencil</v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar color="#90CAF9">Modifier skills</v-toolbar>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="12">
                            <v-textarea
                              background-color="amber lighten-4"
                              color="orange orange-darken-4"
                              label="Ecrire"
                              style="width: 600px; border-style: ridge"
                              v-model="skill.skill"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click.prevent="updateskills(skill.id, skill.skill)"
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
                  v-if="users.id == user.id && skills != ''"
                  color="green"
                  @click.prevent="deleteskillsUser(skill.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-container>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    v-if="users.id == user.id"
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Ajouter un skills</v-toolbar>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-textarea
                            background-color="amber lighten-4"
                            color="orange orange-darken-4"
                            label="Ecrire"
                            style="width: 600px; border-style: ridge"
                            v-model="skill"
                          ></v-textarea>
                        </v-col>
                      </v-row>
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
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-link</v-icon>LIENS
              </p>
              <v-container align="center" v-if="liens == ''">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Lien
                </h5>
              </v-container>
              <v-container v-for="lien in liens" :key="lien.id">
                <h6>
                  <strong>{{ lien.titre }}</strong>
                </h6>
                <h6>{{ lien.url }}</h6>
                <v-dialog transition="dialog-bottom-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      class="ma-2"
                      variant="outlined"
                      icon
                      v-if="users.id == user.id && liens != ''"
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
                              v-model="lien.titre"
                              prepend-inner-icon="mdi-subtitles-outline"
                              variant="outlined"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="12">
                            <v-text-field
                              label="Modifier URL"
                              v-model="lien.url"
                              prepend-inner-icon="mdi-link"
                              variant="outlined"
                              style="height: 70px"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click.prevent="
                            updatelien(lien.titre, lien.url, lien.id)
                          "
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
                  v-if="users.id == user.id && liens != ''"
                  color="green"
                  @click.prevent="deletelien(lien.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-container>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    v-if="users.id == user.id"
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
                            v-model="titre"
                            prepend-inner-icon="mdi-subtitles-outline"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field
                            label="Ajouter  URL"
                            v-model="url"
                            prepend-inner-icon="mdi-link"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addlien">Ajouter</v-btn>
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="10">
              <p class="font-italic text-h5 text-indigo">
                <v-icon>mdi-lightbulb-on-outline</v-icon>Interets
              </p>
              <v-container align="center" v-if="interets == ''">
                <img
                  src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
                  style="width: 30px; height: 30px"
                />
                <h5 class="text-h6 font-italic" style="color: black">
                  Aucune Interet
                </h5>
              </v-container>
              <v-container v-for="interet in interets" :key="interet.id">
                <h6>
                  <strong>{{ interet.interet }}</strong>
                </h6>
                <v-dialog transition="dialog-bottom-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      class="ma-2"
                      variant="outlined"
                      icon
                      v-if="users.id == user.id && interets != ''"
                      color="red"
                      v-bind="props"
                    >
                      <v-icon>mdi-lead-pencil</v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar color="#90CAF9">Modifier interet</v-toolbar>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="12">
                            <v-textarea
                              background-color="amber lighten-4"
                              color="orange orange-darken-4"
                              label="Ecrire"
                              style="width: 600px; border-style: ridge"
                              v-model="interet.interet"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click.prevent="
                            updateinteret(interet.id, interet.interet)
                          "
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
                  v-if="users.id == user.id && interets != ''"
                  color="green"
                  @click.prevent="deleteinteret(interet.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-container>
            </v-col>
            <v-col cols="12" md="2">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    variant="outlined"
                    icon
                    v-if="users.id == user.id"
                    color="secondary"
                    v-bind="props"
                  >
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="#90CAF9">Ajouter un interet</v-toolbar>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-textarea
                            background-color="amber lighten-4"
                            color="orange orange-darken-4"
                            label="Ecrire"
                            style="width: 600px; border-style: ridge"
                            v-model="interet"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click.prevent="addinteretUser"
                        >Ajouter</v-btn
                      >
                      <v-btn text @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
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
      dialog3: false,
      dialog1: false,
      dialog2: false,
      dialog: false,
      skill: "",
      resume_user: "",
      interet: "",
      image: null,
      image1: null,
      poste_ex: "",
      name_company: "",
      country: "",
      debut: "",
      fin: "",
      description: "",
      experiences: {},
      diplomes: {},
      competences: {},
      experience: "",
      competence: "",
      url: "",
      titre: "",
      liens: {},
      interets: {},
      skills: {},
      niveau: "",
      langue: "",
      langues: {},
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
  mounted() {
    this.getExperience(),
      this.getDiplome(),
      this.getCompetence(),
      this.getLien(),
      this.getLangue(),
      this.getInterets(),
      this.getSkills();
  },
  methods: {
    async getUser() {
      axios
        .get("http://localhost:8000/api/auth/getUser/" + this.$route.params.id)
        .then((response) => {
          this.users = response.data;
        });
    },
    async getExperience() {
      let url =
        "http://localhost:8000/api/auth/getexperienceuser/" +
        this.$route.params.id;
      await axios.get(url).then((response) => {
        this.experiences = response.data;
      });
    },
    async getDiplome() {
      let url =
        "http://localhost:8000/api/auth/getdiplomeuser/" +
        this.$route.params.id;
      await axios.get(url).then((response) => {
        this.diplomes = response.data;
      });
    },
    async getCompetence() {
      let url =
        "http://localhost:8000/api/auth/getcompetenceuser/" +
        this.$route.params.id;
      await axios.get(url).then((response) => {
        this.competences = response.data;
      });
    },
    async getLangue() {
      let url =
        "http://localhost:8000/api/auth/getlangueuser/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.langues = response.data;
      });
    },
    async deletediplome($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletediplome/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.error(" diplome Supprimé avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addlien() {
      if (this.titre == "") {
        this.$toast.error(" Champ titre vide.", {
          position: "top-right",
        });
      } else if (this.url == "") {
        this.$toast.error(" Champ Url vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addlien", {
          titre: this.titre,
          url: this.url,
          id_user: this.user.id,
          id_cv: null,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async getLien() {
      let url =
        "http://localhost:8000/api/auth/getlienuser/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.liens = response.data;
      });
    },
    async getSkills() {
      let url =
        "http://localhost:8000/api/auth/getskillsuser/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.skills = response.data;
      });
    },
    async updatelien($titre, $url, $id) {
      if ($titre == "") {
        this.$toast.error(" Champ Titre vide.", {
          position: "top-right",
        });
      } else if ($url == "") {
        this.$toast.error(" Champ Url vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/modifierlien/" + $id, {
          titre: $titre,
          url: $url,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async updateskills($id, $skill) {
      if ($skill == "") {
        this.$toast.error(" Champ Skill vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/modifierskills/" + $id, {
          skill: $skill,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deletelien($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletelien/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.error(" lien supprimé avec succés", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addlangue() {
      if (this.langue == "") {
        this.$toast.error(" Champ Langue vide.", {
          position: "top-right",
        });
      } else if (this.niveau == "") {
        this.$toast.error(" Champ niveau vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addlangue", {
          langue: this.langue,
          niveau: this.niveau,
          id_user: this.user.id,
          id_cv: null,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async updateLangue($langue, $niveau, $id) {
      if ($langue == "") {
        this.$toast.error(" Champ Langue vide.", {
          position: "top-right",
        });
      } else if ($niveau == "") {
        this.$toast.error(" Champ niveau vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/modifierlangue/" + $id, {
          langue: $langue,
          niveau: $niveau,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deletelangue($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletelangue/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.error(" Langue supprimé avec succés", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async updatecompetence($competence, $experience, $id) {
      if ($competence == "") {
        this.$toast.error(" Champ Competence vide.", {
          position: "top-right",
        });
      } else if ($experience == "") {
        this.$toast.error(" Champ experience vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/modifiercompetence/" + $id, {
          competence: $competence,
          experience: $experience,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async updateinteret($id, $interet) {
      if ($interet == "") {
        this.$toast.error(" Champ interet vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/modifierinteret/" + $id, {
          interet: $interet,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Interet modifié avec success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deletecompetence($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletecompetence/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.error(" competence supprimé avec succés", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addskillsUser() {
      if (this.skill == "") {
        this.$toast.error(" Champ skill vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addskills", {
          skill: this.skill,
          id_cv: null,
          id_user: this.user.id,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deleteskillsUser($id) {
      axios
        .delete("http://localhost:8000/api/auth/deleteskills/" + $id)
        .then((response) => {
          console.log(response);
          this.$toast.error(" skill supprimé avec succés", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addresumeUser() {
      axios
        .post(
          "http://localhost:8000/api/auth/addresumeuser/" +
            this.$route.params.id,
          {
            resume_user: this.users.resume_user,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Ajout resumé avec success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Ajout resumé échoué.", {
            position: "top-right",
          });
        });
    },
    async deleteresumeUser() {
      axios
        .post(
          "http://localhost:8000/api/auth/addresumeuser/" +
            this.$route.params.id,
          {
            resume_user: null,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Resumé Supprimé avec success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async getInterets() {
      let url =
        "http://localhost:8000/api/auth/getinteretuser/" +
        this.$route.params.id;
      await axios.get(url).then((response) => {
        this.interets = response.data;
      });
    },
    async addinteretUser() {
      if (this.interet == "") {
        this.$toast.error(" Champ Interet vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addinteret", {
          interet: this.interet,
          id_cv: null,
          id_user: this.user.id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Ajout interet avec success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Ajout interet échoué.", {
            position: "top-right",
          });
        });
    },
    async deleteinteret($id) {
      axios
        .delete("http://localhost:8000/api/auth/deleteinteret/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.success(" interet supprimé avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    onChange1(e) {
      console.log("selected file", e.target.files[0]);
      this.image1 = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      axios
        .post("http://localhost:8000/api/auth/upload/" + this.user.id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
    submit1() {
      let fd = new FormData();
      fd.append("couverture", this.image1);
      axios
        .post(
          "http://localhost:8000/api/auth/uploadcouverture/" + this.user.id,
          fd
        )
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
    async addexperience() {
      if (this.poste_ex == "") {
        this.$toast.error(" Champ Poste vide.", {
          position: "top-right",
        });
      } else if (this.name_company == "") {
        this.$toast.error(" Champ Nom entreprise vide.", {
          position: "top-right",
        });
      } else if (this.country == "") {
        this.$toast.error(" Champ Country vide.", {
          position: "top-right",
        });
      } else if (this.debut == "") {
        this.$toast.error(" Champ Date de debut vide.", {
          position: "top-right",
        });
      } else if (this.fin == "") {
        this.$toast.error(" Champ Date de fin vide.", {
          position: "top-right",
        });
      } else if (this.description == "") {
        this.$toast.error(" Champ Description vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addexperience", {
          poste: this.poste_ex,
          name_company: this.name_company,
          country: this.country,
          debut: this.debut,
          fin: this.fin,
          description: this.description,
          id_cv: null,
          id_user: this.user.id,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deleteexperience($id) {
      axios
        .delete("http://localhost:8000/api/auth/deleteexperience/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.error(" experience supprimé avec succés", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async adddiplome() {
      if (this.etablissement == "") {
        this.$toast.error(" Champ Etablissement vide.", {
          position: "top-right",
        });
      } else if (this.diplome == "") {
        this.$toast.error(" Champ diplome vide.", {
          position: "top-right",
        });
      } else if (this.countrys == "") {
        this.$toast.error(" Champ Country vide.", {
          position: "top-right",
        });
      } else if (this.discipline == "") {
        this.$toast.error(" Champ Discipline vide.", {
          position: "top-right",
        });
      } else if (this.debuts == "") {
        this.$toast.error(" Champ Date de debut vide.", {
          position: "top-right",
        });
      } else if (this.fins == "") {
        this.$toast.error(" Champ Date de fin vide.", {
          position: "top-right",
        });
      } else if (this.descriptions == "") {
        this.$toast.error(" Champ Description vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/adddiplome", {
          etablissement: this.etablissement,
          diplome: this.diplome,
          country: this.countrys,
          discipline: this.discipline,
          debut: this.debuts,
          fin: this.fins,
          description: this.descriptions,
          id_user: this.user.id,
          id_cv: null,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addcompetence() {
      if (this.competence == "") {
        this.$toast.error(" Champ Competence vide.", {
          position: "top-right",
        });
      } else if (this.experience == "") {
        this.$toast.error(" Champ experience vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addcompetence", {
          competence: this.competence,
          experience: this.experience,
          id_user: this.user.id,
          id_cv: null,
        })
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
@media only screen and (max-width: 768px) {
  .popup1 {
    width: 70%;
  }
}
</style>
