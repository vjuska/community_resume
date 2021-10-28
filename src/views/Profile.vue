<template>
  <div class="Profile">
    <!-- ======= Team Section ======= -->
    <div id="team" class="our-team-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>Our special Team</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="single-team-member">
              <div class="team-img">
                <a href="#">
                  <img src="assets/img/team/1.jpg" alt="" />
                </a>
                <div class="team-social-icon text-center">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-content text-center">
                <h4>{{ student.first_name }} {{ student.last_name }}</h4>
                <p>Seo</p>
              </div>
            </div>
          </div>
          <!-- End column -->
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="single-team-member">
              <div class="team-img">
                <a href="#">
                  <img src="assets/img/team/2.jpg" alt="" />
                </a>
                <div class="team-social-icon text-center">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-content text-center">
                <h4>Andrew Arnold</h4>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <!-- End column -->
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="single-team-member">
              <div class="team-img">
                <a href="#">
                  <img src="assets/img/team/3.jpg" alt="" />
                </a>
                <div class="team-social-icon text-center">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-content text-center">
                <h4>Lellien Linda</h4>
                <p>Web Design</p>
              </div>
            </div>
          </div>
          <!-- End column -->
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="single-team-member">
              <div class="team-img">
                <a href="#">
                  <img src="assets/img/team/4.jpg" alt="" />
                </a>
                <div class="team-social-icon text-center">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-content text-center">
                <h4>{{ student.first_name }} {{ student.last_name }}</h4>
                <p>Seo Expert</p>
              </div>
            </div>
          </div>
          <!-- End column -->
        </div>
      </div>
    </div>
    <!-- End Team Section -->
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <img v-bind:src="student.photo" alt="" />
    <p>Short Bio: {{ student.short_bio }}</p>
    <p>Linkedin Url: {{ student.linkedin_url }}</p>
    <p>Twitter Handle: {{ student.twitter_handle }}</p>
    <p>Personal Blog: {{ student.personal_blog }}</p>
    <p>Online Resume Url: {{ student.online_resume_url }}</p>
    <p>Git Hub Url: {{ student.github_url }}</p>

    <h2>Education</h2>
    <div v-for="education in student.educations" v-bind:key="`education-${education.id}`">
      <p>School: {{ education.university_name }}</p>
      <p>Degree: {{ education.degree }}</p>
      <p>Start Date: {{ education.start_date }}</p>
      <p>End Date: {{ education.end_date }}</p>
      <p>Details: {{ education.details }}</p>
    </div>

    <h2>Experiences</h2>
    <div v-for="experience in student.experiences" v-bind:key="`experience-${experience.id}`">
      <p>Company Name: {{ experience.company_name }}</p>
      <p>Job Title: {{ experience.job_title }}</p>
      <p>Details: {{ experience.details }}</p>
      <p>Start Date: {{ experience.start_date }}</p>
      <p>End Date: {{ experience.end_date }}</p>
    </div>

    <h2>Projects</h2>
    <div v-for="project in student.projects" v-bind:key="`project-${project.id}`">
      <p>Project Name: {{ project.name }}</p>
      <p>Description: {{ project.description }}</p>
      <p>Project Url: {{ project.url }}</p>
      <img v-bind:src="project.screenshot" alt="" />
    </div>

    <h2>Skills</h2>
    <div v-for="skill in student.skills" v-bind:key="`skill-${skill.id}`">
      <p>{{ skill.skill_name }}</p>
    </div>

    <h2>Twittter Feed</h2>

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
