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
          <h2>Sign IN Catch IT</h2>
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
              required
            />
          </div>
          <br /><br />
          <v-spacer></v-spacer>
          <v-hover>
            <v-btn
              color="grey"
              rounded
              flat
              block
              tile
              @click.prevent="performLogin"
              >Sign In</v-btn
            >
          </v-hover>
          <br /><br />
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
      valid: true,
      email: "",
      emailrules: [(v) => !!v || "Email is required"],
      password: "",
      error: "",
      isLoading: false,
    };
  },
  methods: {
    performLogin() {
      this.$store
        .dispatch("performLoginAction", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.$toast.success(" Welcome  " + res.data.user.name, {
            position: "top-right",
          });
          if (res.data.user.role == "user") {
            this.$router.push("/");
          } else if (res.data.user.role == "admin") {
            this.$router.push("/DashbordView");
          } else {
            this.$router.push("/postecompany");
          }
        })
        .catch((err) => {
          this.$toast.error(" Password or email incorrect  .", {
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
