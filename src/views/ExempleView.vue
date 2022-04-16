<template>
  <div class="container">
    <form @submit.prevent="submit">
      <input type="file" @change="onChange" />
      <input type="submit" value="Upload" />
    </form>
  </div>
  <v-col cols="12" md="12" lg="12" v-for="image in imgs" :key="image.id">
    <v-avatar color="#F4FF81" size="40">
      <v-icon> {{ image.id }} </v-icon>
    </v-avatar>
    <p>{{ image.id }}</p>
    <img v-bind:src="'../images/' + image.avatar" style="width: 100px" />
  </v-col>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    image: null,
    imgs: {},
  }),
  methods: {
    onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      axios
        .post("http://localhost:8000/api/auth/upload", fd)
        .then((res) => {
          console.log("response", res.data);
        })
        .catch((err) => console.log(err));
    },
    async allCv() {
      axios.get("http://localhost:8000/api/auth/getimage").then((response) => {
        this.imgs = response.data;
      });
    },
  },
  mounted() {
    this.allCv();
  },
};
</script>
