<template>
  <div class="#student-details">
    <h1>Profiles.</h1>
    <div>
      Search by First name:
      <input type="text" v-model="titleFilter" />
      <div v-for="student in filterBy(students, titleFilter, 'first_name')" v-bind:key="student.id">
        <h2>{{ student.first_name }} {{ student.last_name }}</h2>
        <button v-on:click="showStudent(student)">More info</button>
      </div>
      <dialog id="student-details">
        <form method="dialog">
          <h1>Student info</h1>
          <img v-bind:src="current_student.photo" alt="" />
          <p>First name: {{ current_student.first_name }}</p>
          <p>Last name: {{ current_student.last_name }}</p>
          <p>Email: {{ current_student.email }}</p>
          <p>Phone Number: {{ current_student.phone_number }}</p>
          <button><router-link :to="`/students/${current_student.id}`">Go to profile page</router-link></button>

          <button>Close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<style></style>

<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      current_student: {},
      students: [],
      message: "2nd Test Vic's upload to Vue.js!",
      titleFilter: "",
    };
  },
  created: function () {
    this.indexStudents();
  },
  methods: {
    indexStudents: function () {
      axios.get("https://afternoon-reaches-14167.herokuapp.com/students").then((response) => {
        console.log("students index", response);
        this.students = response.data;
      });
    },
    showStudent: function (current_student) {
      this.current_student = current_student;
      document.querySelector("#student-details").showModal();
    },
  },
};
</script>
