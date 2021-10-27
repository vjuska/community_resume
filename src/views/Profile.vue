<template>
  <div class="Profile">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <img v-bind:src="student.photo" alt="" />
    <p>Short Bio: {{ student.short_bio }}</p>
    <p>Linkedin Url: {{ student.linkedin_url }}</p>
    <p>Twitter Handle: {{ student.twitter_handle }}</p>
    <p>Personal Blog: {{ student.personal_blog }}</p>
    <p>Online Resume Url: {{ student.online_resume_url }}</p>
    <p>Git Hub Url: {{ student.github_url }}</p>

    <h2>Education</h2>
    <div v-for="education in student.educations" v-bind:key="education.id">
      <p>School: {{ education.university_name }}</p>
      <p>Degree: {{ education.degree }}</p>
      <p>Start Date: {{ education.start_date }}</p>
      <p>End Date: {{ education.end_date }}</p>
      <p>Details: {{ education.details }}</p>
    </div>

    <h2>Experiences</h2>
    <div v-for="experience in student.experiences" v-bind:key="experience.id">
      <p>Company Name: {{ experience.company_name }}</p>
      <p>Job Title: {{ experience.job_title }}</p>
      <p>Details: {{ experience.details }}</p>
      <p>Start Date: {{ experience.start_date }}</p>
      <p>End Date: {{ experience.end_date }}</p>
    </div>

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
      student: { educations: [{}], experiences: [], projects: [], skills: [] },
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
