<template>
  <navbar-view />
  <v-container align="center">
    <h5 class="font-italic" style="color: #3e2723">
      <v-icon>mdi-border-color</v-icon> Modifier L'utilisateur
    </h5>
    <br /><br />
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Name "
          v-model="users.name"
          prepend-inner-icon="mdi-account-circle-outline"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          label="Prénom de l'utilisateur"
          v-if="users.role != 'company'"
          v-model="users.last_name"
          prepend-inner-icon="mdi-account-circle-outline"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          label="Site Web"
          v-if="users.role == 'company'"
          v-model="users.site_web"
          prepend-inner-icon="mdi-link"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Email "
          v-model="users.email"
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-email-check-outline"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Spécialité"
          v-model="users.specialite"
          placeholder="Placeholder"
          variant="outlined"
          prepend-inner-icon="mdi-account-star-outline"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Gouvernorat"
          placeholder="Placeholder"
          v-model="users.gouvernorat"
          variant="outlined"
          prepend-inner-icon="mdi-onepassword"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Adresse "
          v-model="users.adresse"
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
          v-if="users.role != 'company'"
          v-model="users.civilite"
          prepend-inner-icon="mdi-islam"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
        <v-select
          label="Role"
          v-model="users.role"
          :items="['user', 'admin', 'company']"
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          label="Phone"
          v-model="users.phone"
          prepend-inner-icon="mdi-phone"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          label="Nombre de Employées"
          v-if="users.role == 'company'"
          v-model="users.nb_employee"
          prepend-inner-icon="mdi-counter"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          label="Année de fondation"
          v-model="users.annee_fondation"
          v-if="users.role == 'company'"
          prepend-inner-icon="mdi-calendar-range"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field
          v-if="users.role != 'admin'"
          color="success"
          label="LinkedIn"
          v-model="users.linkedin"
          prepend-inner-icon="mdi-linkedin"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field
          color="success"
          v-if="users.role != 'admin'"
          label="Facebook"
          v-model="users.facebook"
          prepend-inner-icon="mdi-facebook"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field
          color="success"
          v-if="users.role != 'admin'"
          label="Twitter"
          v-model="users.twitter"
          prepend-inner-icon="mdi-twitter"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea
          v-model="users.description_entreprise"
          v-if="users.role == 'company'"
          auto-grow
          filled
          color="blue"
          label="Description Entreprise"
          rows="3"
        ></v-textarea>
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
          @click.prevent="updateuser"
        >
          Confirmer La modification
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
  data() {
    return {
      users: {},
    };
  },
  components: { NavbarView, FooterView },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      axios
        .get("http://localhost:8000/api/auth/getUser/" + this.$route.params.id)
        .then((response) => {
          this.users = response.data;
        });
    },
    async updateuser() {
      axios
        .post(
          "http://localhost:8000/api/auth/updateuser/" + this.$route.params.id,
          {
            gouvernorat: this.users.gouvernorat,
            last_name: this.users.last_name,
            adresse: this.users.adresse,
            name: this.users.name,
            email: this.users.email,
            civilite: this.users.civilite,
            specialite: this.users.specialite,
            role: this.users.role,
            phone: this.users.phone,
            site_web: this.users.site_web,
            description_entreprise: this.users.description_entreprise,
            facebook: this.users.facebook,
            linkedin: this.users.linkedin,
            twitter: this.users.twitter,
            nb_employee: this.users.nb_employee,
            annee_fondation: this.users.annee_fondation,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Profil updated.", {
            position: "top-right",
          });
          this.$router.go(-1);
        });
    },
  },
};
</script>

<style></style>
