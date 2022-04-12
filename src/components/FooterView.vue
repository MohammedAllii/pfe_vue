<template>
  <v-footer dark padless style="background-color: #2e2e2e">
    <v-card
      flat
      tile
      style="background-color: #2e2e2e"
      class="indigo lighten-2 white--text text-center"
    >
      <v-card-text style="margin-left: 500px; color: white">
        <p>© 2021 - 2022 CATCH IT® Global Inc.</p>
      </v-card-text>
      <v-card-text
        class="white--text pt-0"
        style="margin-left: 500px; color: white"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card-text>
      <v-divider></v-divider>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-github"],
  }),
};
</script>
