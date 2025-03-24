<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section class="about" id="about">
        <div class="about-details-1">
          <img
            src="../assets/img/victoressang.jpeg"
            alt="Victor Essang"
            class="img-fluid"
          />
          <div class="about-details-1-texts">
            <h2><b>Who Am I?</b></h2>
            <p>
              I'm a Software Engineer and a GIS Expert (8+ years of experience),
              with a passion for revolutionizing industries through innovative
              software solutions & geospatial solutions. My journey in the
              world of technology has been driven by the belief that the power
              of location data can transform businesses and enhance user
              experiences.
            </p>
            <p>
              <b>My Expertise:</b><br />
              My tech stack is a versatile arsenal, which includes JavaScript,
              TypeScript, Python, Django, GIS, VueJS, React, NuxtJS, NodeJS,
              WordPress, Arcade, QTpy, Arcpy, ArcGIS JS API, Html, CSS,
              Tailwind, Bootstrap.
            </p>
          </div>
        </div>
        <div class="about-details-2">
          <p>
            I'm also well-versed in database management using, MongoDB, MySQL &
            PostgreSQL. In the geo-spatial realm, I'm adept at working with a
            variety of powerful tools and technologies, including ArcGIS
            Desktop, ArcGIS Pro, QGIS, SuperMap, SNAP, Erdas Imagine, Leaflet,
            and Geoserver.
          </p>
          <p>
            These tools enable me to harness the potential of location-based
            data to develop innovative solutions. What I Do: I build interactive
            and responsive web applications, dashboards, and also, software
            applications.
          </p>
          <p>
            Also, I design Maps and that leverage geospatial data to address
            real-world challenges. Whether it's developing interactive web maps
            that enable users to explore geographical data with ease or creating
            systems that optimize resource allocation through advanced spatial
            analysis, I'm dedicated to finding practical solutions.
          </p>
          <p>
            <b> Why I Do It: </b><br />
            I'm driven by a vision of a world where businesses can make smarter
            decisions, public services can operate more efficiently, and people
            can enjoy richer, enhanced experiences.
          </p>
          <p>
            <b> Let's Connect:</b><br />
            I'm always open to collaboration and networking with like-minded
            professionals who share a passion for location-based technologies.
            If you're interested in exploring how we can work together or have
            any questions, feel free to reach out. Let's connect and explore the
            endless possibilities of geospatial innovation.
          </p>
          <p>Thank you.</p>
          <p>Victor Essang.</p>
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
  name: "VeespatialUpdatedAbout",
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
.about {
  padding: 40px;
}
.about-details-1 {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.about-details-1-texts {
  margin-left: 20px;
}
.about-details-1 p {
  font-size: 25px;
}
.about-details-2 {
  text-align: justify;
  font-size: 25px;
}

@media (max-width: 991.98px) {
  .about-details-1 {
    display: block;
  }
  .about-details-1-texts {
    margin-top: 20px;
  }
  .about {
    padding: 20px;
  }
  .about p {
    text-align: justify;
  }
}
</style>
