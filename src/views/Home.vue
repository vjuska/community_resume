<template>
  <div class="#student-details">
    <!-- ======= Blog Section ======= -->
    <div id="blog" class="#student-details">
      <div class="blog-inner area-padding">
        <div class="blog-overly"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12"></div>
          </div>
          <div class="row">
            <!-- Start Left Blog -->
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <p></p>
                <h2>Profiles.</h2>
              </div>
            </div>
            Search by name:
            <input type="text" v-model="titleFilter" />
            <div
              class="single-team-member"
              v-for="student in filterBy(students, titleFilter, 'first_name', 'last_name')"
              v-bind:key="student.id"
            >
              <div class="single-blog">
                <div class="single-blog-img">
                  <a href="blog.html">
                    <p></p>
                    <img v-bind:src="student.photo" alt="" />
                  </a>
                </div>
                <div class="blog-meta">
                  <span class="comments-type">
                    <i class="fa fa-comment-o"></i>
                    <a href="#">{{ student.phone_number }}</a>
                  </span>
                  <span class="date-type">
                    <i class="fa fa-calendar"></i>
                    {{ student.email }}
                  </span>
                </div>
                <div class="blog-text">
                  <h4>
                    <a href="blog.html">{{ student.first_name }} {{ student.last_name }}</a>
                  </h4>
                  <p></p>
                </div>
                <span>
                  <a v-on:click="showStudent(student)" class="ready-btn">Profile</a>
                  <p></p>
                </span>
              </div>
              <!-- Start single blog -->
            </div>
            <!-- End Left Blog-->
          </div>
        </div>
      </div>
    </div>
    <!-- End Blog Section -->
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
