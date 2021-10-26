<template>
  <div class="home">
    <h1>All Profiles.</h1>
    <div v-for="profile in profiles" v-bind:key="profile.id">
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.description }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Wills upload to Vue.js!",
      profiles: [],
    };
  },
  created: function () {
    this.indexProfiles;
  },
  methods: {
    indexProfiles: function () {
      axios.get("/profiles").then((response) => {
        console.log("profiles index", response);
        this.profiles = response.data;
      });
    },
  },
};
</script>
