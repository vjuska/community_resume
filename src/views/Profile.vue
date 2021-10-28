<template>
  <div class="Profile">
    <!-- ======= Team Section ======= -->
    <div id="team" class="our-team-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <p></p>
              <h2>Profile Page.</h2>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="col-md-4 col-sm-8 col-xs-14">
            <div class="single-team-member">
              <div class="team-img">
                <a href="#">
                  <img v-bind:src="student.photo" alt="" />
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

                <h4>Skills:</h4>
                <div v-for="skill in student.skills" v-bind:key="skill.id">
                  <h5>{{ skill.skill_name }}</h5>
                </div>
                <h4>Connect:</h4>

                <p>Linkedin: {{ student.linkedin_url }}</p>
                <p>Twitter Handle: {{ student.twitter_handle }}</p>
                <p>Personal Blog: {{ student.personal_blog }}</p>
                <p>Online Resume Url: {{ student.online_resume_url }}</p>
                <p>Git Hub Url: {{ student.github_url }}</p>
              </div>
            </div>
          </div>
          <!-- End column -->
        </div>
        <!-- ======= Services Section ======= -->
        <div id="services" class="services-area area-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="section-headline services-head text-center">
                  <h2>About.</h2>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <!-- Start Left services -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <a class="services-icon" href="#">
                        <i class="bi bi-briefcase"></i>
                      </a>
                      <h4>Education.</h4>
                      <div v-for="education in student.educations" v-bind:key="education.id">
                        <p>School: {{ education.university_name }}</p>
                        <p>Degree: {{ education.degree }}</p>
                        <p>Start Date: {{ education.start_date }}</p>
                        <p>End Date: {{ education.end_date }}</p>
                        <p>Details: {{ education.details }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- end about-details -->
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <a class="services-icon" href="#">
                        <i class="bi bi-card-checklist"></i>
                      </a>
                      <h4>Experiences.</h4>
                      <div v-for="experience in student.experiences" v-bind:key="experience.id">
                        <p>Company Name: {{ experience.company_name }}</p>
                        <p>Job Title: {{ experience.job_title }}</p>
                        <p>Details: {{ experience.details }}</p>
                        <p>Start Date: {{ experience.start_date }}</p>
                        <p>End Date: {{ experience.end_date }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- end about-details -->
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <!-- end col-md-4 -->
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <a class="services-icon" href="#">
                        <i class="bi bi-bar-chart"></i>
                      </a>
                      <h4>Projects.</h4>
                      <p>{{ student.projects[0].name }}</p>
                      <p>{{ student.projects[0].description }}</p>
                    </div>
                  </div>
                  <!-- end about-details -->
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <!-- end col-md-4 -->
                <div class="about-move">
                  <!-- <div class="services-details">
                    <div class="single-services">
                      <a class="services-icon" href="#">
                        <i class="bi bi-binoculars"></i>
                      </a>
                      <h4></h4>
                      <p></p>
                    </div>
                  </div> -->
                  <!-- end about-details -->
                </div>
              </div>
              <!-- End Left services -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <!-- end col-md-4 -->
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <a class="services-icon" href="#">
                        <i class="bi bi-brightness-high"></i>
                      </a>
                      <h4>Bio.</h4>
                      <div>
                        <p>{{ student.short_bio }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- end about-details -->
                </div>
              </div>
              <!-- End Left services -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <!-- end col-md-4 -->
                <div class="about-move">
                  <!-- <div class="services-details">
                    <div class="single-services">
                      <a class="services-icon" href="#">
                        <i class="bi bi-calendar4-week"></i>
                      </a>
                      <h4>24/7 Support</h4>
                      <p>
                        will have to make sure the prototype looks finished by inserting text or photo.make sure the
                        prototype looks finished by.
                      </p>
                    </div>
                  </div> -->
                  <!-- end about-details -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Services Section -->
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
    <TwitterFeed src="https://twitter.com/TechCrunch"></TwitterFeed>

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
