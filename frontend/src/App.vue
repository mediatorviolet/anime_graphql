<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <h2>Animzouz</h2>
    </v-app-bar>

    <v-main>
      <div v-for="anime in animes" :key="anime.id">
        <v-card elevation="4" class="ma-6">
          <v-card-title>{{ anime.title.english }}</v-card-title>
          <v-card-subtitle>{{ anime.title.native }}</v-card-subtitle>
          <v-card-text>
            <img :src="anime.coverImage.large"/>
          </v-card-text>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',

  // components: {
  // },

  data: () => ({
    animes: []
  }),
  mounted() {
    axios.post("http://localhost:5000/graphql/get-all-anime", {
      page: 2
    }).then((res) => this.animes = res.data).catch((err) => console.log(err))
  }
};
</script>
