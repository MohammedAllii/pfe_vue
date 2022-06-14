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
          v-model="name"
          prepend-inner-icon="mdi-account-circle-outline"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          label="Prénom de l'utilisateur"
          v-model="last_name"
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
          v-model="email"
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-email-check-outline"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Spécialité"
          v-model="specialite"
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
          v-model="password"
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-onepassword"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Adresse "
          v-model="adresse"
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
          v-model="civilite"
          prepend-inner-icon="mdi-islam"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          label="Phone"
          v-model="phone"
          prepend-inner-icon="mdi-phone"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          label="Gouvernorat"
          v-model="gouvernorat"
          prepend-inner-icon="mdi-map-marker"
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
          @click.prevent="addAdmin"
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
import axios from "axios";
export default {
  components: { NavbarView, FooterView },
  data: () => ({
    role: "admin",
    name: "",
    last_name: "",
    email: "",
    specialite: "",
    password: "",
    adresse: "",
    phone: "",
    civilite: "",
    gouvernorat: "",
    admins: {},
    text: ` Would you like to remove this Admin?`,
    selectedItem: 1,
  }),
  methods: {
    addAdmin() {
      axios
        .post("http://localhost:8000/api/auth/addAdmin", {
          name: this.name,
          last_name: this.last_name,
          email: this.email,
          specialite: this.specialite,
          password: this.password,
          adresse: this.adresse,
          role: this.role,
          phone: this.phone,
          civilite: this.civilite,
          gouvernorat: this.gouvernorat,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Admin Ajouter Avec Success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error(" Email existe déja.", {
            position: "top-right",
          });
        });
    },
  },
};
</script>

<style></style>
