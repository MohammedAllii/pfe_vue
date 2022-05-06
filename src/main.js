import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import Toaster from "@meforma/vue-toaster";
import LaravelVuePagination from "laravel-vue-pagination";
loadFonts();
createApp(App)
  .use(router)
  .use(LaravelVuePagination)
  .use(Toaster)
  .use(store)
  .use(vuetify)
  .mount("#app");
