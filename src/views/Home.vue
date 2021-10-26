<template>
  <div class="home">
    <h1>All Students.</h1>
    <div v-for="student in students" v-bind:key="student.id">
      <h2>{{ student.name }}</h2>
      <p>{{ student.description }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [],
      message: "2nd Test Vic's upload to Vue.js!",
    };
  },
  created: function () {
    this.indexStudents;
  },
  methods: {
    indexStudents: function () {
      axios.get("/students").then((response) => {
        console.log("students index", response);
        this.students = response.data;
      });
    },
  },
};
</script>
