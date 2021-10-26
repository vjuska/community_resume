<template>
  <div class="home">
    <h1>All Students...</h1>
    {{ students }}
    <div v-for="student in students" v-bind:key="student.id">
      <h2>{{ student.first_name.toUpperCase() }} {{ student.last_name.toUpperCase() }}</h2>
      <p>{{ student.short_bio }}</p>
      <button v-on:click="showStudent(student)">More info</button>
    </div>
    <dialog id="student-details">
      <form method="dialog">
        <h1>Student info</h1>
        <p>First name: {{ current_student.first_name }}</p>
        <p>Last name: {{ current_student.last_name }}</p>
        <p>Email: {{ current_student.email }}</p>
        <p>Short bio: {{ current_student.short_bio }}</p>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      current_student: {},
      students: [],
      message: "2nd Test Vic's upload to Vue.js!",
    };
  },
  created: function () {
    this.indexStudents();
  },
  methods: {
    indexStudents: function () {
      // axios.get("/students").then((response) => {
      //   console.log("students index", response);
      //   this.students = response.data;
      // });
      this.students = [
        { id: 1, first_name: "vic", last_name: "juska", email: "vjuska@test.com", short_bio: "my name is vic" },
        { id: 2, first_name: "will", last_name: "wright", email: "wwright@test.com", short_bio: "my name is will" },
      ];
    },
    showStudent: function (current_student) {
      this.current_student = current_student;
      document.querySelector("#student-details").showModal();
    },
  },
};
</script>
