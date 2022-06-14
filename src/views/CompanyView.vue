<template>
  <navbar-view />
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <v-container fluid style="margin-top: 50px">
    <div>
      <center>
        <form style="max-width: 450px; margin: auto">
          <h2>Join US COMPANY</h2>
          <div class="input-icons">
            <i class="fa fa-user icon"> </i>
            <input
              class="input-field"
              type="text"
              placeholder="Company Name"
              v-model="name"
            />
          </div>
          <div class="input-icons">
            <i class="fa fa-envelope icon"> </i>
            <input
              class="input-field"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>

          <div class="input-icons">
            <i class="fa fa-key icon"> </i>
            <input
              class="input-field"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="input-icons">
            <input class="input-field" type="hidden" v-model="role" />
          </div>

          <v-spacer></v-spacer>
          <v-hover>
            <v-btn
              color="grey"
              rounded
              flat
              block
              tile
              @click.prevent="performRegister"
              >Sign up</v-btn
            >
          </v-hover>
          <br />
          <p>
            Have an account!
            <router-link to="/SignIn" style="color: green">SignIn</router-link>
          </p>
        </form>
      </center>
    </div>
  </v-container>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: { NavbarView, FooterView },
  name: "SignIn",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "company",
      error: "",
    };
  },
  methods: {
    performRegister() {
      this.$store
        .dispatch("performRegisterActions", {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        })
        .then((res) => {
          console.log(res);
          this.isLoading = false;

          this.$router.push("/");
        })
        .catch((err) => {
          this.$toast.error(" Email Existe déja  .", {
            position: "top-right",
          });
          console.log(err.message);
        });
    },
  },
};
</script>
<style>
.input-icons i {
  position: absolute;
}
.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 10px;
  color: green;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  text-align: center;
}

h2 {
  color: green;
}
</style>
