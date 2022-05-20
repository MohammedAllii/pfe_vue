<template>
  <navbar-view />
  <v-container align="center">
    <h5 class="font-italic" style="color: #3e2723">
      <v-icon>mdi-border-color</v-icon> Ajouter Un Admin
    </h5>
    <br /><br />
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Nom de l'utilisateur "
          prepend-inner-icon="mdi-account-circle-outline"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          label="Prénom de l'utilisateur"
          prepend-inner-icon="mdi-account-circle-outline"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Email "
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-email-check-outline"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Spécialité"
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-account-star-outline"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Mot de Passe"
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-onepassword"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Location "
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-map-marker"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          label="Civilité"
          prepend-inner-icon="mdi-islam"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field
          color="success"
          label="LinkedIn"
          prepend-inner-icon="mdi-linkedin"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field
          color="success"
          label="Facebook"
          prepend-inner-icon="mdi-facebook"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field
          color="success"
          label="Twitter"
          prepend-inner-icon="mdi-twitter"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> </v-col>
      <v-col cols="12" md="4">
        <v-btn
          rounded
          variant="outlined"
          color="#3E2723"
          prepend-icon="mdi-border-color"
        >
          Confirmer L'ajout
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: { NavbarView, FooterView },
};
</script>

<style></style>
