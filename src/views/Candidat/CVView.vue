<template>
  <navbar-view />
  <v-divider></v-divider>
  <v-container>
    <v-row align-content="center">
      <h5>Créer Votre CV</h5>
      <br />
      <p style="margin-left: 850px">
        <v-btn
          rounded
          color="blue"
          :to="{ name: 'cvform', params: { id: this.idc } }"
          ><v-icon>mdi-eye-check-outline</v-icon> Visualiser Ce CV</v-btn
        >
      </p>
      <v-progress-linear
        v-model="value"
        :buffer-value="bufferValue"
      ></v-progress-linear>
      <br />
    </v-row>
  </v-container>
  <v-container>
    <div align="center" style="border-style: ridge">
      <v-avatar size="150" style="border-radius: 100%">
        <v-img v-bind:src="'../cvs/' + cvs.avatar_cv"></v-img>
      </v-avatar>
      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition">
          <template v-slot:activator="{ props }">
            <v-btn flat rounded v-bind="props"
              ><v-icon size="20">mdi-image-edit</v-icon></v-btn
            >
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-icon style="margin-left: 200px" size="50">
                mdi-check-outline
              </v-icon>
              <h5 align="center">Télécharger Votre Photo</h5>
              <form @submit.prevent="submit">
                <v-card-text>
                  <input type="file" @change="onChange" />
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text rounded @click="isActive.value = false"
                    >Annuler</v-btn
                  >
                  <v-btn
                    text
                    rounded
                    style="background-color: green"
                    type="submit"
                    >ENregistrer</v-btn
                  >
                </v-card-actions>
              </form>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      <strong style="font-size: 35px"
        >&nbsp;&nbsp;{{ cvs.name }} {{ cvs.last_name }}</strong
      >
      <h5>
        <v-icon>mdi-domain</v-icon><strong></strong>&nbsp;&nbsp;{{ cvs.poste }}
      </h5>
      <h5>
        <v-icon>mdi-map-marker-check</v-icon><strong></strong>&nbsp;&nbsp;{{
          cvs.adresse
        }}
      </h5>
      <div v-if="cvs.date_naissance != null">
        <h5>
          <v-icon>mdi-cake-variant</v-icon><strong></strong>&nbsp;&nbsp;{{
            cvs.date_naissance
          }}
        </h5>
      </div>
      <br /><br />
      <v-row justify="center">
        <v-dialog
          v-model="dialog2"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn flat rounded v-bind="props"
              ><v-icon size="30">mdi-account-edit</v-icon></v-btn
            >
          </template>
          <v-card>
            <v-toolbar dark color="green">
              <v-btn icon dark @click="dialog2 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>close</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container fluid align="center">
              <v-icon size="50"> mdi-account-off-outline </v-icon>
              <h5 align="center">Données personnelles</h5>
            </v-container>
            <v-container fluid align="center">
              <v-card class="mx-auto" max-width="500">
                <v-card-title
                  class="text-h6 font-weight-regular justify-space-between"
                >
                  <span>{{ currentTitle }}</span>
                  <v-avatar color="green" size="24" v-text="step"></v-avatar>
                </v-card-title>

                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-card-text>
                      <v-row cols="12">
                        <v-col cols="12">
                          <v-icon>mdi-account-edit</v-icon>
                          <v-text-field
                            color="success"
                            label="Nom *"
                            v-model="cvs.name"
                            type="text"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="12">
                          <v-icon>mdi-account-edit</v-icon>
                          <v-text-field
                            color="success"
                            label="Prénom"
                            v-model="cvs.last_name"
                            type="text"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <p style="text-align: left">* : champ obligatoire</p>
                    </v-card-text>
                  </v-window-item>

                  <v-window-item :value="2">
                    <v-card-text>
                      <v-card-text>
                        <v-row cols="12">
                          <v-col cols="12">
                            <v-icon>mdi-email-check-outline</v-icon>
                            <v-text-field
                              color="success"
                              label="Email *"
                              type="email"
                              v-model="cvs.email"
                              variant="outlined"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-icon>mdi-cellphone-wireless</v-icon>
                            <v-text-field
                              color="success"
                              label="Téléphone"
                              placeholder="Placeholder"
                              v-model="cvs.phone"
                              variant="outlined"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card-text>
                  </v-window-item>

                  <v-window-item :value="3">
                    <v-container>
                      <v-row cols="12">
                        <v-col cols="6">
                          <v-icon>mdi-update</v-icon>
                          <v-text-field
                            color="success"
                            label="Poste *"
                            variant="outlined"
                            v-model="cvs.poste"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-icon>mdi-update</v-icon>
                          <v-select
                            v-model="cvs.adresse"
                            label="Votre Adresse actuel *"
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
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-icon>mdi-update</v-icon>
                          <v-text-field
                            color="success"
                            label="Date de naissance"
                            type="date"
                            v-model="cvs.date_naissance"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn v-if="step > 1" text @click="step--"> Back </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="step < 3"
                    color="black"
                    depressed
                    @click="step++"
                  >
                    Next
                  </v-btn>
                  <v-btn
                    v-if="step > 2"
                    color="black"
                    depressed
                    @click.prevent="updateinfo"
                    style="background-color: green"
                  >
                    Enregistrer
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>

      <v-divider></v-divider>
      <h5><v-icon>mdi-email-multiple</v-icon>&nbsp;&nbsp;{{ cvs.email }}</h5>
      <br />
      <div v-if="cvs.phone != null">
        <h5><v-icon>mdi-phone-dial</v-icon>&nbsp;&nbsp;{{ cvs.phone }}</h5>
      </div>
    </div>
    <br />
    <br />
    <div v-if="cvs.resume != null">
      <h5 align="left" style="color: green">Résumé</h5>
      <v-container>
        <v-banner lines="six" color="grey" class="my-4">
          <v-banner-text>
            <h6>
              {{ cvs.resume }}
            </h6>
            <br />
          </v-banner-text>
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      v-text="'supprimer'"
                      @click.prevent="deleteresume"
                    ></v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
    <br />
    <div v-if="interets != ''">
      <h5 align="left" style="color: green">Intéret</h5>
      <v-container v-for="interet in interets" :key="interet.id">
        <v-banner lines="six" color="grey" class="my-4">
          <v-banner-text>
            <h6>
              {{ interet.interet }}
            </h6>
            <br />
          </v-banner-text>
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      v-text="'supprimer'"
                      @click.prevent="deleteinteret(interet.id)"
                    ></v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-col cols="auto">
                      <v-dialog transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn rounded flat v-bind="props"> Modifier</v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card align="center">
                            <v-icon size="50"
                              >mdi-account-heart
                              <h6>Intérêts</h6></v-icon
                            >
                            <p>
                              Intérêts
                              <br />
                              <v-textarea
                                background-color="amber lighten-4"
                                color="orange orange-darken-4"
                                label="Ecrire"
                                style="width: 600px; border-style: ridge"
                                v-model="interet.interet"
                              ></v-textarea>
                            </p>
                            <v-card-actions class="justify-end">
                              <v-btn
                                text
                                rounded
                                @click="isActive.value = false"
                                >Annuler</v-btn
                              >
                              <v-btn
                                text
                                rounded
                                style="background-color: green"
                                @click.prevent="
                                  updateinteret(interet.id, interet.interet)
                                "
                                >Enregistrer</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-col>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
    <br />
    <div v-if="experiences != ''">
      <h5 align="left" style="color: green">Expérience Professionnelles</h5>
      <v-container v-for="experience in experiences" :key="experience.id">
        <v-banner lines="six" color="grey" class="my-4">
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
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      v-text="'supprimer'"
                      @click.prevent="deleteexperience(experience.id)"
                    ></v-btn>
                  </v-list-item>
                  <v-list-item
                    ><v-btn
                      :to="{
                        name: 'modifierexperience',
                        params: { id: experience.id },
                      }"
                      >Modifier</v-btn
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
    <br />
    <div v-if="diplomes != ''">
      <h5 align="left" style="color: green">Formations et Diplômes</h5>
      <v-container v-for="diplome in diplomes" :key="diplome.id">
        <v-banner lines="six" color="grey" class="my-4">
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
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      v-text="'supprimer'"
                      @click.prevent="deletediplome(diplome.id)"
                    ></v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn
                      :to="{
                        name: 'modifierdiplome',
                        params: { id: diplome.id },
                      }"
                      >Modifier</v-btn
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
    <br />
    <div v-if="skills != ''">
      <h5 align="left" style="color: green">Skills</h5>
      <v-container v-for="skill in skills" :key="skill.id">
        <v-banner lines="six" color="grey" class="my-4">
          <v-banner-text>
            <h6>
              {{ skill.skill }}
            </h6>
            <br />
          </v-banner-text>
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn @click.prevent="deleteskills(skill.id)">
                      Supprimer</v-btn
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-col cols="auto">
                      <v-dialog transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn rounded flat v-bind="props"> Modifier</v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card align="center">
                            <v-icon size="50"> mdi-check-outline </v-icon>
                            <h5>show us your skills</h5>
                            <v-card-text>
                              <v-col cols="12" sm="12">
                                <v-textarea
                                  label="Your skills"
                                  style="width: 400px"
                                  v-model="skill.skill"
                                  multiple
                                ></v-textarea>
                              </v-col>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                              <v-btn
                                text
                                rounded
                                @click="isActive.value = false"
                                >Annuler</v-btn
                              >
                              <v-btn
                                text
                                rounded
                                style="background-color: green"
                                @click.prevent="
                                  updateskills(skill.id, skill.skill)
                                "
                                >Modifier</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-col>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
    <br />
    <div v-if="competences != ''">
      <h5 align="left" style="color: green">Compétences</h5>
      <v-container v-for="competence in competences" :key="competence.id">
        <v-banner lines="six" color="grey" class="my-4">
          <h6>
            <strong>{{ competence.competence }}</strong
            >({{ competence.experience }})
          </h6>
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      v-text="'supprimer'"
                      @click.prevent="deletecompetence(competence.id)"
                    ></v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-col cols="auto">
                      <v-dialog transition="dialog-top-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" v-text="'modifier'"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card align="center">
                            <br />
                            <v-icon size="40"
                              >mdi-set-left-center
                              <h5>Give us YOUR capacities</h5></v-icon
                            >
                            <p>
                              votre Compétences
                              <v-col cols="12" sm="12">
                                <v-text-field
                                  v-model="competence.competence"
                                  variant="outlined"
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
                            <v-card-actions class="justify-end">
                              <v-btn
                                text
                                rounded
                                @click="isActive.value = false"
                                >Annuler</v-btn
                              >
                              <v-btn
                                text
                                rounded
                                style="background-color: green"
                                @click.prevent="
                                  updatecompetence(
                                    competence.competence,
                                    competence.experience,
                                    competence.id
                                  )
                                "
                                >Modifier</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-col>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
    <br />
    <div v-if="liens != ''">
      <h5 align="left" style="color: green">Liens</h5>
      <v-container v-for="lien in liens" :key="lien.id">
        <v-banner lines="six" color="grey" class="my-4">
          <h6>
            <strong>{{ lien.titre }}</strong>
          </h6>
          <h6>{{ lien.url }}</h6>
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      v-text="'supprimer'"
                      @click.prevent="deletelien(lien.id)"
                    ></v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-col cols="auto">
                      <v-dialog transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" v-text="'modifier'"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card align="center">
                            <v-icon size="50"
                              >mdi-file-document-edit
                              <h6>Liens</h6></v-icon
                            >
                            <p>
                              Titre
                              <v-col cols="12" sm="12">
                                <v-text-field
                                  v-model="lien.titre"
                                  label="Titre"
                                  variant="outlined"
                                  clearable
                                  clear-icon="mdi-cancel"
                                  style="width: 600px"
                                ></v-text-field>
                              </v-col>
                            </p>
                            <p>
                              URL
                              <v-col cols="12" sm="12">
                                <v-text-field
                                  v-model="lien.url"
                                  label="URL"
                                  variant="outlined"
                                  clearable
                                  clear-icon="mdi-cancel"
                                ></v-text-field>
                              </v-col>
                            </p>

                            <v-card-actions class="justify-end">
                              <v-btn
                                text
                                rounded
                                @click="isActive.value = false"
                                >Annuler</v-btn
                              >
                              <v-btn
                                text
                                rounded
                                style="background-color: green"
                                @click.prevent="
                                  updatelien(lien.titre, lien.url, lien.id)
                                "
                                >Enregistrer</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-col>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
    <br />
    <div v-if="langues != ''">
      <h5 align="left" style="color: green">Langues</h5>
      <v-container v-for="langue in langues" :key="langue.id">
        <v-banner lines="six" color="grey" class="my-4">
          <h6>
            <strong>{{ langue.langue }}</strong
            >({{ langue.niveau }})
          </h6>
          <template v-slot:actions>
            <div class="text-center">
              <v-menu transition="fab-transition">
                <template v-slot:activator="{ props }">
                  <v-btn dark color="primary" v-bind="props">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      v-text="'supprimer'"
                      @click.prevent="deletelangue(langue.id)"
                    ></v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-col cols="auto">
                      <v-dialog transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" v-text="'modifier'"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card align="center">
                            <v-icon size="50"
                              >mdi-fountain-pen
                              <h5>Langues</h5></v-icon
                            >
                            <p>
                              Langues
                              <v-col cols="12" sm="12">
                                <v-text-field
                                  v-model="langue.langue"
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
                                style="border-style: ridge"
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
                            <v-card-actions class="justify-end">
                              <v-btn
                                text
                                rounded
                                @click="isActive.value = false"
                                >Annuler</v-btn
                              >
                              <v-btn
                                text
                                rounded
                                style="background-color: green"
                                @click.prevent="
                                  updateLangue(
                                    langue.langue,
                                    langue.niveau,
                                    langue.id
                                  )
                                "
                                >Enregistrer</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-col>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-banner>
      </v-container>
    </div>
  </v-container>
  <v-container>
    <div align="center">
      <v-row>
        <v-col>
          <v-row justify="space-around">
            <v-col cols="auto">
              <div v-if="this.resumes == false">
                <v-dialog transition="dialog-bottom-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn rounded flat v-bind="props">
                      <v-icon>mdi-file-document-edit-outline</v-icon> Résumé
                    </v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card align="center">
                      <br />
                      <h5>Your CV Resume Please!</h5>
                      <v-img
                        src="https://static.vecteezy.com/ti/vecteur-libre/p1/2592733-avatar-figure-humaine-dans-cv-document-line-style-icon-gratuit-vectoriel.jpg"
                        style="width: 180px; height: 180px"
                      ></v-img>
                      <v-textarea
                        background-color="grey lighten-2"
                        color="cyan"
                        label="write your résumé "
                        style="border-radius: 30px; width: 600px"
                        v-model="cvs.resume"
                      ></v-textarea>
                      <v-card-actions class="justify-end">
                        <v-btn text rounded @click="isActive.value = false"
                          >Annuler</v-btn
                        >
                        <v-btn
                          style="background-color: green"
                          text
                          rounded
                          @click.prevent="addresume"
                          >Enregistrer</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
          <br />
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
              fullscreen
              :scrim="false"
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn rounded flat v-bind="props"
                  ><v-icon>mdi-briefcase-edit</v-icon> Expériences
                  professionnelles</v-btn
                >
              </template>
              <v-card>
                <v-toolbar dark color="green">
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>close</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <v-container fluid align="center">
                  <h5>Expériences professionnelles</h5>
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
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="debut"
                        label="Date Début"
                        variant="underlined"
                        type="date"
                        clearable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="fin"
                        label="Date Fin"
                        type="date"
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
                        label="Describe your expérience"
                        rows="2"
                        v-model="description"
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
                      style="background-color: green"
                      @click.prevent="addexperience"
                      >Enregistrer</v-btn
                    >
                  </v-row>
                </v-container>
              </v-card>
            </v-dialog>
          </v-row>

          <br /><br />
          <v-row justify="center">
            <v-dialog
              v-model="dialog1"
              fullscreen
              :scrim="false"
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn rounded flat v-bind="props"
                  ><v-icon>mdi-wallpaper</v-icon> Formations et diplômes</v-btn
                >
              </template>
              <v-card>
                <v-toolbar dark color="green">
                  <v-btn icon dark @click="dialog1 = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>close</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-container fluid align="center">
                  <h5>Formations et diplômes</h5>
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
                        type="date"
                        variant="underlined"
                        clearable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="fins"
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
                      style="background-color: green"
                      @click.prevent="adddiplome"
                      >Enregistrer</v-btn
                    >
                  </v-row>
                </v-container>
              </v-card>
            </v-dialog>
          </v-row>

          <br />
          <v-col cols="auto">
            <v-dialog transition="dialog-top-transition">
              <template v-slot:activator="{ props }">
                <v-btn rounded flat v-bind="props"
                  ><v-icon>mdi-parachute</v-icon> Compétences</v-btn
                >
                <br /><br />
              </template>
              <template v-slot:default="{ isActive }">
                <v-card align="center">
                  <br />
                  <v-icon size="40"
                    >mdi-set-left-center
                    <h5>Give us YOUR capacities</h5></v-icon
                  >
                  <p>
                    votre Compétences
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="competence"
                        label="compétences"
                        variant="outlined"
                        clearable
                        clear-icon="mdi-cancel"
                        style="width: 550px"
                      ></v-text-field>
                    </v-col>
                  </p>
                  <p>
                    Expériences

                    <v-select
                      style="border-style: ridge"
                      v-model="experience"
                      label="Experience"
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
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn
                      text
                      rounded
                      style="background-color: green"
                      @click.prevent="addcompetence"
                      >Enregistrer</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-col>
        <v-col>
          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props"
                    ><v-icon>mdi-language-c</v-icon> Langues</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <v-icon size="50"
                      >mdi-fountain-pen
                      <h5>Langues</h5></v-icon
                    >
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
                        style="border-style: ridge"
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
                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        rounded
                        style="background-color: green"
                        @click.prevent="addlangue"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>

          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props"
                    ><v-icon>mdi-school</v-icon> Skills</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <v-icon size="50"> mdi-check-outline </v-icon>
                    <h5>show us your skills</h5>
                    <v-card-text>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          label="Your skills"
                          style="width: 400px"
                          v-model="skill"
                          multiple
                        ></v-textarea>
                      </v-col>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        rounded
                        style="background-color: green"
                        @click.prevent="addskills"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
          <br />
          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props"
                    ><v-icon>mdi-link-variant</v-icon> Liens</v-btn
                  ><br /><br />
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <v-icon size="50"
                      >mdi-file-document-edit
                      <h6>Liens</h6></v-icon
                    >
                    <p>
                      Titre
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="titre"
                          label="Titre"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                          style="width: 600px"
                        ></v-text-field>
                      </v-col>
                    </p>
                    <p>
                      URL
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="url"
                          label="URL"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                        ></v-text-field>
                      </v-col>
                    </p>

                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        rounded
                        style="background-color: green"
                        @click.prevent="addlien"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props"
                    ><v-icon>mdi-lightbulb-on-outline</v-icon> Intérêts</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <v-icon size="50"
                      >mdi-account-heart
                      <h6>Intérêts</h6></v-icon
                    >
                    <p>
                      Intérêts
                      <br />
                      <v-textarea
                        background-color="amber lighten-4"
                        color="orange orange-darken-4"
                        label="Ecrire"
                        style="width: 600px; border-style: ridge"
                        v-model="interet"
                      ></v-textarea>
                    </p>
                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        rounded
                        style="background-color: green"
                        @click.prevent="addinteret"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
  <v-divider></v-divider>
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      image: null,
      imgs: {},
      cvs: {},
      experiences: {},
      diplomes: {},
      interets: {},
      interet: "",
      competences: {},
      liens: {},
      langues: {},
      skills: {},
      skill: "",
      poste_ex: "",
      name_company: "",
      country: "",
      debut: "",
      fin: "",
      description: "",
      etablissement: "",
      diplome: "",
      countrys: "",
      discipline: "",
      debuts: "",
      fins: "",
      descriptions: "",
      competence: "",
      experience: "",
      titre: "",
      url: "",
      langue: "",
      niveau: "",
      lang: "",
      niv: "",
      idc: this.$route.params.id,
      dialog: false,
      dialog1: false,
      dialog2: false,
      notifications: false,
      sound: true,
      widgets: false,
      value: 10,
      bufferValue: 20,
      resumes: false,
      interval: 0,
      ex4: "success",
      step: 1,
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Profil";
        case 2:
          return "Données personnelles";
        default:
          return "Autres Informations";
      }
    },
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.startBuffer(),
      this.getExperience(),
      this.getDiplome(),
      this.getCompetence(),
      this.getLien(),
      this.getLangue(),
      this.getSkills(),
      this.getInterets();
  },
  created() {
    this.getCvById();
  },
  methods: {
    startBuffer() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.value += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 6;
      }, 2000);
    },
    async getCvById() {
      let url = "http://localhost:8000/api/auth/affichecv/" + this.idc;
      await axios.get(url).then((response) => {
        this.cvs = response.data;
      });
    },
    onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      axios
        .post("http://localhost:8000/api/auth/uploadcv/" + this.idc, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
    async updateinfo() {
      if (this.cvs.name == "") {
        this.$toast.error(" Champ name vide.", {
          position: "top-right",
        });
      } else if (this.cvs.poste == "") {
        this.$toast.error(" Champ poste vide.", {
          position: "top-right",
        });
      } else if (this.cvs.email == "") {
        this.$toast.error(" Champ email vide.", {
          position: "top-right",
        });
      } else if (this.cvs.adresse == "") {
        this.$toast.error(" Champ adresse vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/updateinfo/" + this.idc, {
          name: this.cvs.name,
          last_name: this.cvs.last_name,
          poste: this.cvs.poste,
          email: this.cvs.email,
          phone: this.cvs.phone,
          adresse: this.cvs.adresse,
          date_naissance: this.cvs.date_naissance,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addresume() {
      if (this.cvs.resume == "") {
        this.$toast.error(" Champ Résumé vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addresume/" + this.idc, {
          resume: this.cvs.resume,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Ajout resumé avec success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deleteresume() {
      axios
        .post("http://localhost:8000/api/auth/addresume/" + this.idc, {
          resume: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.error(" Résumé supprimé avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addinteret() {
      axios
        .post("http://localhost:8000/api/auth/addinteret", {
          interet: this.interet,
          id_cv: this.idc,
          id_user: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Interet Ajouté avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async deleteskills($id) {
      axios
        .delete("http://localhost:8000/api/auth/deleteskills/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.success(" Skills supprimé avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
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
    async addexperience() {
      if (this.poste_ex == "") {
        this.$toast.error(" Champ poste vide.", {
          position: "top-right",
        });
      } else if (this.name_company == "") {
        this.$toast.error(" Champ nom du société vide.", {
          position: "top-right",
        });
      } else if (this.country == "") {
        this.$toast.error(" Champ country vide.", {
          position: "top-right",
        });
      } else if (this.debut == "") {
        this.$toast.error(" Champ date de début vide.", {
          position: "top-right",
        });
      } else if (this.fin == "") {
        this.$toast.error(" Champ date de dfinébut vide.", {
          position: "top-right",
        });
      } else if (this.description == "") {
        this.$toast.error(" Champ description vide.", {
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
          id_cv: this.idc,
          id_user: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Expérience Ajouté avec succés.", {
            position: "top-right",
          });
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
        this.$toast.error(" Champ expérience vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addcompetence", {
          competence: this.competence,
          experience: this.experience,
          id_cv: this.idc,
          id_user: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Compétence Ajouté avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async getCompetence() {
      let url = "http://localhost:8000/api/auth/getcompetence/" + this.idc;
      await axios.get(url).then((response) => {
        this.competences = response.data;
      });
    },
    async getInterets() {
      let url = "http://localhost:8000/api/auth/getinteret/" + this.idc;
      await axios.get(url).then((response) => {
        this.interets = response.data;
      });
    },
    async deletecompetence($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletecompetence/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.success(" Compétence supprimé avec succés.", {
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
        this.$toast.error(" Champ competence vide.", {
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
          this.$toast.success(" Compétence Modifié avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async getExperience() {
      let url = "http://localhost:8000/api/auth/getexperience/" + this.idc;
      await axios.get(url).then((response) => {
        this.experiences = response.data;
      });
    },
    async deleteexperience($id) {
      axios
        .delete("http://localhost:8000/api/auth/deleteexperience/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.success(" Expérience Supprimé avec succés.", {
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
        this.$toast.error(" Champ établissement vide.", {
          position: "top-right",
        });
      } else if (this.diplome == "") {
        this.$toast.error(" Champ diplome vide.", {
          position: "top-right",
        });
      } else if (this.countrys == "") {
        this.$toast.error(" Champ diplome vide.", {
          position: "top-right",
        });
      } else if (this.discipline == "") {
        this.$toast.error(" Champ discipline vide.", {
          position: "top-right",
        });
      } else if (this.debuts == "") {
        this.$toast.error(" Champ date de début vide.", {
          position: "top-right",
        });
      } else if (this.fins == "") {
        this.$toast.error(" Champ date de fin vide.", {
          position: "top-right",
        });
      } else if (this.descriptions == "") {
        this.$toast.error(" Champ description vide.", {
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
          id_cv: this.idc,
          id_user: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Diplome Ajouté avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async getDiplome() {
      let url = "http://localhost:8000/api/auth/getdiplome/" + this.idc;
      await axios.get(url).then((response) => {
        this.diplomes = response.data;
      });
    },
    async deletediplome($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletediplome/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.success(" Diplome supprimé avec succés.", {
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
        this.$toast.error(" Champ url vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addlien", {
          titre: this.titre,
          url: this.url,
          id_cv: this.idc,
          id_user: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Lien Ajouté avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async getLien() {
      let url = "http://localhost:8000/api/auth/getlien/" + this.idc;
      await axios.get(url).then((response) => {
        this.liens = response.data;
      });
    },
    async updatelien($titre, $url, $id) {
      if ($titre == "") {
        this.$toast.error(" Champ titre vide.", {
          position: "top-right",
        });
      } else if ($url == "") {
        this.$toast.error(" Champ url vide.", {
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
          this.$toast.success(" Lien modifié avec succés.", {
            position: "top-right",
          });
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
          this.$toast.success(" Interet modifié avec succés.", {
            position: "top-right",
          });
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
          this.$toast.success(" Lien supprimé avec succés.", {
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
        this.$toast.error(" Champ langue vide.", {
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
          id_cv: this.idc,
          id_user: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Langue Ajouté avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async addskills() {
      if (this.skill == "") {
        this.$toast.error(" Champ skill vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/addskills", {
          skill: this.skill,
          id_cv: this.idc,
          id_user: null,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Skills Ajouté avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async getLangue() {
      let url = "http://localhost:8000/api/auth/getlangue/" + this.idc;
      await axios.get(url).then((response) => {
        this.langues = response.data;
      });
    },
    async getSkills() {
      let url = "http://localhost:8000/api/auth/getskills/" + this.idc;
      await axios.get(url).then((response) => {
        this.skills = response.data;
      });
    },
    async updateLangue($langue, $niveau, $id) {
      if ($langue == "") {
        this.$toast.error(" Champ langue vide.", {
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
          this.$toast.success("Langue Modifié avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
    async updateskills($id, $skill) {
      if ($skill == "") {
        this.$toast.error(" Champ skill vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/modifierskills/" + $id, {
          skill: $skill,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Skills modifié avec succés.", {
            position: "top-right",
          });
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
          this.$toast.success(" Langue supprimé avec succés.", {
            position: "top-right",
          });
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
