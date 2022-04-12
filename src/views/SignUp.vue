<template>
  <navbar-view />
  <v-card
    class="mx-auto"
    max-width="600px"
    height="75vh"
    outlined
    style="padding: 50px"
    border="border-dark"
  >
    <h2 class="text-center border border-dark">
      Join as a candidate or company
    </h2>
    <br />
    <br />

    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" xs="12">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            class="mx-auto"
            height="200"
            max-width="350"
            v-bind="props"
            to="/CandidateView"
          >
            <v-card-text
              class="font-weight-medium mt-12 text-center text-subtitle-1 border border-dark"
            >
              <v-icon style="color: green" class="text-center"
                >mdi-account</v-icon
              ><br /><br />
              I'am a candidate looking for an opportunity
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="12" md="6" xs="6" lg="6">
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            class="mx-auto"
            height="200"
            max-width="350"
            v-bind="props"
            to="/CompanyView"
          >
            <v-card-text
              class="font-weight-medium mt-12 text-center text-subtitle-1 border border-dark"
            >
              <v-icon style="color: green" class="text-center"
                >mdi-folder-search-outline</v-icon
              ><br />
              I'am a company looking for talents
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <br />
    <br />
    <p style="text-align: center">
      Already have an account?
      <router-link to="/SignIn" style="color: green"> SignIn</router-link>
    </p>
  </v-card>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    NavbarView,
    FooterView,
  },
  name: "SignUP",
  data() {},
};
</script>

<style>
@media only screen and (max: width 786px) {
  .sig {
    width: 200px;
  }
}
</style>
