<template>
  <navbar-view />
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-col>
          <p class="font-weight-bold">Vos offres d'emploi</p>
        </v-col>
        <v-layout>
          <v-navigation-drawer floating permanent>
            <v-list density="compact" nav>
              <v-btn
                flat
                rounded
                prepend-icon=" mdi-publish"
                title="  Publiez vos offres"
                value="  Publiez vos offres"
                to="PosteCompany"
                >Publiez vos offres</v-btn
              >
              <br /><br />
              <v-btn
                flat
                rounded
                prepend-icon="mdi-content-paste"
                title=" gérer vos offres"
                value=" gérer vos offres"
                to="GerePoste"
                >gérer vos offres</v-btn
              >
              <br /><br />
              <v-btn
                flat
                rounded
                prepend-icon="mdi-forum"
                title="Statistiques"
                value="Statistiques"
                to="StatistCompany"
                >Statistiques</v-btn
              >
              <br /><br />
              <v-btn
                flat
                rounded
                prepend-icon="mdi-card-text-outline"
                title="Candidatures"
                value=" Candidatures"
                to="CandidatureCompany"
                >Candidatures</v-btn
              >
              <br /><br />
              <v-col>
                <p class="font-weight-bold">Accès à la CVthèque</p>
              </v-col>
              <v-btn
                flat
                rounded
                prepend-icon="mdi-magnify"
                title=" Rechercher des CV's"
                value="Rechercher des CV's"
                to="RechercheCv"
                >Rechercher des CV's</v-btn
              >
              <br /><br />
              <v-btn
                flat
                rounded
                prepend-icon=" mdi-briefcase-download-outline"
                title="CV's sauvgardés"
                value="CV's sauvgardés"
                to="SaveCv"
                >CV's sauvgardés</v-btn
              >
              <br /><br />
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 750px"></v-main>
        </v-layout>
      </v-col>
      <v-col cols="12" md="8">
        <h5 class="font-weight-bold">Publier vos Postes</h5>
        <v-col cols="12" md="12">
          <p>Poste</p>
          <v-text-field
            label="ex:developeur Web"
            prepend-inner-icon="mdi-account-network"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col cols="12" md="6">
            <p>Lieu de Travail</p>
            <v-text-field
              label="Ville région ou département"
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-ship-wheel"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <p>Pays</p>
            <v-text-field
              label="Pays"
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-flag-variant-outline"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <p>Type de Contrat</p>
            <v-text-field
              label="Travail,Stage"
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-feather"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <p>Temps du travail</p>
            <v-text-field
              label="Temps-partiel,Temps-plein"
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-av-timer"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <p>Salaire</p>
            <v-text-field
              label="max/min tout les deux "
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-cash-usd"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <p>Monnaie</p>
            <v-text-field
              label="DT(TND)"
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-cash-usd"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <p>Choisissez la période</p>
            <v-text-field
              label="Par mois,ans,semaine ou jour!"
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-flag-variant-outline"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <p>Description de l'offre d'emploi</p>
          <v-col cols="12" md="12">
            <v-textarea
              prepend-inner-icon="mdi-file-document-edit-outline"
              background-color="grey lighten-2"
              color="cyan"
              label="Votre message"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <p>À propos de la société</p>
          </v-col>
          <v-col cols="12" md="4">
            <v-switch
              v-model="people"
              color="green"
              label="Ignorer cette section"
              value="Ignorer cette section"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <p>Nom de la société</p>
            <v-text-field
              label="Nom de la société"
              prepend-inner-icon="mdi-bullhorn"
              placeholder="Placeholder"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col cols="12" md="12">
          <p>Site Web de la société</p>
          <v-text-field
            label="ex:https://www.company.com"
            prepend-inner-icon="mdi-web"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col cols="12" md="6">
            <p>Le nombre des Employees</p>
            <v-text-field
              label="Le nombre des Employees "
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <p>Année de fondation</p>
            <v-text-field
              label="ex:1680 "
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <p>Descriptif de la société</p>
          <v-col cols="12" md="12">
            <v-textarea
              prepend-inner-icon="mdi-file-document-edit-outline"
              background-color="grey lighten-2"
              color="cyan"
              label="Votre message"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-radio-group v-model="radios">
              <p>Demandez-vous aux candidats de soumettre un CV?</p>
              <v-radio value="oui">
                <template v-slot:label>
                  <div>
                    Of course it's <strong class="success--text">oui</strong>
                  </div>
                </template>
              </v-radio>
              <v-radio value="Nom">
                <template v-slot:label>
                  <div>
                    Definitely <strong class="primary--text">Nom</strong>
                  </div>
                </template>
              </v-radio>
              <v-radio value="Optionnel">
                <template v-slot:label>
                  <div>
                    it's<strong class="primary--text">Optionnel</strong>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4"> </v-col>
          <v-col cols="12" md="8">
            <v-btn
              prepend-icon=" mdi-truck-check"
              variant="outlined"
              color="green"
            >
              Valider le contenu!
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <v-divider></v-divider>
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: { NavbarView, FooterView },
  data() {
    return {
      radios: "oui",
    };
  },
};
</script>
<style></style>
