<template>
  <navbar-view />
  <div class="Nutrition">
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="12" lg="12" class="text-align:center">
        <h2 style="color: black; font-family: cursive">Welcome to CatchIT</h2>
      </v-col>
    </v-row>
  </div>
  <br />
  <div>
    <v-container align="center" style="background-color: #f1f8e9">
      <h5>Meet the CatchIT project</h5>
      <p style="color: #1a237e; font-size: 20px" class="align:center">
        Support Vue.js development by posting a job or internship with us!
      </p>
      <h5>Get to know who's behind CatchIT</h5>
      <p>
        CatchIT has been developed by Vue.js and Laravel enthusiasts whose aim
        is to contribute to the growing community by helping companies find
        internship and jobs in Tunisia.<br />When you register with CatchIT,
        companies will be able to list jobs,internship and developers will have
        the chance to apply for those jobsand internship.
      </p>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEK9l8Tm3ZS8A/profile-displayphoto-shrink_800_800/0/1616934438146?e=1656547200&v=beta&t=6dGvVKqot-dNjGVjzwjFtnsOxcRwm3Lq4MnfR7QhZvE"
              height="250px"
              cover
            ></v-img>

            <v-card-title> WESLATI FARAH </v-card-title>

            <v-card-subtitle> VueJs developer </v-card-subtitle>
            <p>If you like our work ,Rate us please!</p>
            <v-card-actions>
              <v-rating
                v-model="rating"
                empty-icon="mdi-circle-outline"
                full-icon="mdi-circle"
                half-icon="mdi-circle-half"
                half-increments
                hover
              ></v-rating>

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a frontend/backend developer and UI designer. I have a
                  deep interest in pixel perfect, user-centric design with a
                  special focus on the user experience.I'am a 3rd year student
                  too
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/277557695_1903909926471236_8967778533381054765_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XXs8fG6aRikAX-32OPL&_nc_ht=scontent.ftun15-1.fna&oh=00_AT_IGw5_0rv6ArYm5bt8tjwI3M1vRZGhaYv0oAf7LnC6DQ&oe=627251E7"
              height="280px"
              cover
            ></v-img>

            <v-card-title> MEJRI MED ALI </v-card-title>

            <v-card-subtitle> Laravel developer </v-card-subtitle>
            <p>If you like our work ,Rate us please!</p>
            <v-card-actions>
              <v-rating
                v-model="rating1"
                empty-icon="mdi-circle-outline"
                full-icon="mdi-circle"
                half-icon="mdi-circle-half"
                half-increments
                hover
              ></v-rating>
              <v-spacer></v-spacer>

              <v-btn
                :icon="show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show1 = !show1"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  I'am a web developer. I like playing with cutting-edge
                  technologies. Loving Laravel and working with it in this
                  project and i just discoverd Vue.js with my partner Farah. Iam
                  a 3rd year student too.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <br />
  <div>
    <h2>Benefits of posting with us</h2>
    <br />
    <v-timeline>
      <v-timeline-item color="purple-lighten-2" fill-dot right>
        <v-card>
          <v-card-title class="purple-lighten-2">
            <v-icon dark size="42" class="mr-4">
              mdi-account-supervisor
            </v-icon>
            <h5 class="display-6 white--text font-weight-light">
              Here For Students
            </h5>
          </v-card-title>
          <v-card-text>
            We help you to get the best opportunities( internships) in different
            domains .
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="amber-lighten-1" fill-dot size="small">
        <v-card>
          <v-card-title class="amber-lighten-1 justify-end">
            <h5 class="display-6 mr-4 white--text font-weight-light">
              Here for jobless people
            </h5>
            <v-icon dark size="42"> mdi-account-tie </v-icon>
          </v-card-title>
          we provide you with the job opportunities all over Tunisia.
          <v-card-text> </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="cyan-lighten-1" fill-dot>
        <v-card>
          <v-card-title class="cyan-lighten-1">
            <v-icon class="mr-4" dark size="42">
              mdi-alarm-light-outline
            </v-icon>
            <h5 class="display-6 white--text font-weight-light">
              Provide you with the work/internship you want
            </h5>
          </v-card-title>
          <v-card-text>
            we will do our best for your help . Be on of Us!
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
  <br /><br />
  <div>
    <v-container align="center">
      <v-row>
        <v-col cols="12" md="12">
          <p class="font-weight-medium">
            <v-icon size="20" color="green">mdi-mailbox-open-up-outline</v-icon
            >YOU CAN CONTACT US VIA THIS FORM
          </p>
          <v-row>
            <v-col cols="12" md="6">
              <p>Nom</p>
              <v-text-field
                label="Nom"
                placeholder="Placeholder"
                variant="outlined"
                prepend-inner-icon="mdi-account-question-outline"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p>Prénom</p>
              <v-text-field
                label="Prénom"
                placeholder="Placeholder"
                variant="outlined"
                prepend-inner-icon="mdi-account-question-outline"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <p>Email</p>
              <v-text-field
                label="Email"
                placeholder="Placeholder"
                variant="outlined"
                prepend-inner-icon="mdi-email-variant"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p>Téléphone</p>
              <v-text-field
                label="Téléphone"
                placeholder="Placeholder"
                variant="outlined"
                prepend-inner-icon="mdi-phone-settings"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <p>Sujet</p>
              <v-text-field
                label="Sujet"
                prepend-inner-icon="mdi-file-document-edit-outline"
                placeholder="Placeholder"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <p>Votre Message!</p>
              <v-textarea
                prepend-inner-icon="mdi-file-document-edit-outline"
                background-color="grey lighten-2"
                color="cyan"
                label="Votre Message!"
              ></v-textarea>
            </v-col>
            <v-row>
              <v-col cols="12" md="4"> </v-col>
              <v-col cols="12" md="4">
                <v-btn
                  prepend-icon=" mdi-truck-check"
                  variant="outlined"
                  color="green"
                >
                  Envoyer le contenu!
                </v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-divider></v-divider>
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: { NavbarView, FooterView },
  data: () => ({
    show: false,
    show1: false,
    rating: 3.5,
    rating1: 3.5,
  }),
};
</script>

<style>
.Nutrition {
  min-height: 80vh;
  min-width: 57vh;
  background-size: cover !important;
  background-position: center !important;
  padding: 2rem 9%;
  display: flex;
  align-items: center;
  background-image: url("https://miro.medium.com/max/1360/1*zVnWJtyGOX_kUIDm6ccCfQ.gif");
}
</style>
