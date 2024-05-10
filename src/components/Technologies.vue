<template>
  <section class="technologies" id="technologies">
    <div class="section-details-text">
      <h2>Technologies I have worked with...</h2>
    </div>
    <div class="section-details-img">
      <!-- <img src="" alt="" /> -->
      <Tooltip text="JavaScript"><i class="fa-brands fa-js"></i></Tooltip>
      <Tooltip text="Python"><i class="fa-brands fa-python"></i></Tooltip>
      <Tooltip text="Vue JS"><i class="fa-brands fa-vuejs"></i></Tooltip>
      <Tooltip text="React JS"><i class="fa-brands fa-react"></i></Tooltip>
      <Tooltip text="Node JS"><i class="fa-brands fa-node"></i></Tooltip>
      <Tooltip text="ArcGIS"
        ><img src="../assets/tech-img/esri.png" width="85px" alt=""
      /></Tooltip>
      <Tooltip text="QGIS"
        ><img src="../assets/tech-img/qgis.png" width="85px" alt=""
      /></Tooltip>
      <Tooltip text="Stripe"><i class="fa-brands fa-cc-stripe"></i></Tooltip>
      <Tooltip text="TypeScript"><i class="bx bxl-typescript"></i></Tooltip>
      <Tooltip text="HTML"><i class="bx bxl-html5"></i></Tooltip>
      <Tooltip text="Tailwind CSS"><i class="bx bxl-tailwind-css"></i></Tooltip>
      <Tooltip text="CSS"><i class="bx bxl-css3"></i></Tooltip>
      <Tooltip text="Bootstrap"><i class="bx bxl-bootstrap"></i></Tooltip>
      <Tooltip text="JQuery"><i class="bx bxl-jquery"></i></Tooltip>
      <Tooltip text="Google Earth"
        ><img src="../assets/tech-img/googleearth.png" width="85px" alt=""
      /></Tooltip>
      <Tooltip text="Leaflet JS"
        ><img src="../assets/tech-img/leflet.png" width="85px" alt=""
      /></Tooltip>
      <Tooltip text="MapBox JS"
        ><img src="../assets/tech-img/mapbox.png" width="85px" alt=""
      /></Tooltip>
      <Tooltip text="Figma"><i class="fa-brands fa-figma"></i></Tooltip>
      <Tooltip text="Git"><i class="fa-brands fa-git-alt"></i></Tooltip>
      <Tooltip text="PostgreSQL"><i class="bx bxl-postgresql"></i></Tooltip>
      <Tooltip text="MongoDB"><i class="bx bxl-mongodb"></i></Tooltip>
      <Tooltip text="WordPress"><i class="bx bxl-wordpress"></i></Tooltip>
      <Tooltip text="Redux"><i class="bx bxl-redux"></i></Tooltip>
      <Tooltip text="Django"><i class="bx bxl-django"></i></Tooltip>
      <Tooltip text="Firebase"><i class="bx bxl-firebase"></i></Tooltip>
      <Tooltip text="Mailchimp"><i class="bx bxl-mailchimp"></i></Tooltip>
      <Tooltip text="Docker"><i class="bx bxl-docker"></i></Tooltip>
      <Tooltip text="AWS"><i class="bx bxl-aws"></i></Tooltip>
      <Tooltip text="Postman"
        ><img src="../assets/tech-img/postman.png" width="85px" alt=""
      /></Tooltip>
    </div>
  </section>
</template>

<script>
import Tooltip from "../components/Tooltip.vue";

export default {
  name: "VeespatialUpdatedTechnologies",
  components: { Tooltip },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.technologies {
  color: #f2e9e4;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../assets/img/weatherApp-header.jpg") center center;
  background-size: cover;
  padding: 100px 0;
}

.section-details-img {
  margin: 40px 0;
  font-size: 80px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.section-details-img i {
  padding: 20px;
}

@media (max-width: 991.98px) {
  .section-details-img {
    margin: 40px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>