<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0"
          >Publiez une offre d'emploi ou un stage sur notre site Web de
          recherche d'emploi et connectez-vous avec les meilleurs talents de
          développement à travers le monde 🌎. Laissez-nous vous aider à trouver
          les meilleures correspondances de talents pour vos ouvertures et à les
          faire atteindre la plupart des développeurs !</v-card-text
        >
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>search job & internship Project</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-github",
      "mdi-google-plus",
      "mdi-instagram",
    ],
  }),
};
</script>
