<template>
  <div class="Profile">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <p>{{ student }}</p>
    <h2>Education</h2>
    <p>{{ student.educations }}</p>
    <h2>Experiences</h2>
    <p>{{ student.experiences }}</p>
    <h2>Projects</h2>
    <p>{{ student.projects }}</p>
    <h2>Skills</h2>
    <p>{{ student.skills }}</p>

    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      student: {},
    };
  },
  created: function () {
    axios.get("https://afternoon-reaches-14167.herokuapp.com/students/" + this.$route.params.id).then((response) => {
      console.log("students show", response);
      this.student = response.data;
    });
  },
  methods: {},
};
</script>
