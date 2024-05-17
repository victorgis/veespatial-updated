<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section class="resume">
        <div>
          <p>
            Click to download the any of these <b>resumes</b> for your perusal.
          </p>
        </div>
        <div class="resume-list">
          <a
            href="https://drive.google.com/file/d/1UZZ5ZMJKw656OAUvrqb3uYiZzkUzAqIt/view?usp=sharing"
            ><div class="resume-list-box">Chief Technology Officer</div></a
          >
          <a
            href="https://drive.google.com/file/d/1B7hocK9fvPhVGX0sFODH3GVuWPpSo9VM/view?usp=drive_link"
            ><div class="resume-list-box">Software Developer</div></a
          >
          <a
            href="https://drive.google.com/file/d/1dP1Ne9hkqX0lyCbRb7pD8JHPbGPpUZ-f/view?usp=sharing"
            ><div class="resume-list-box">GIS Developer</div></a
          >
          <a
            href="https://drive.google.com/file/d/1HyzWpkvDFsMh8EYhCs9CHmRiqklRzDwr/view?usp=sharing"
            ><div class="resume-list-box">GIS Analyst</div></a
          >
          <!-- <a href=""><div class="resume-list-box">Frontend Developer</div></a> -->
        </div>
        <div>
          <p>
            Click <router-link to="/contact"><b>here</b></router-link> to
            request for an updated resume on any of the listed resumes above.
          </p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "VeespatialUpdatedResume",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.resume {
  margin: 40px;
}
.resume-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 40px 0;
}
.resume-list-box {
  padding: 40px;
  margin: 10px;
  color: #22223b;
  background: #c9ada7;
  color: #22223b;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
}
a {
  text-decoration: none;
  color: #22223b;
}
a:hover {
  text-decoration: underline #f2e9e4;
}

@media (max-width: 991.98px) {
  .resume-list {
    display: block;
  }
  .resume-list-box {
    padding: 30px;
    margin: 30px 0;
  }
}
</style>
