<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section class="sd">
        <img src="./img/gd8.jpeg" width="600px" class="img-fluid" alt="" />
        <div class="details">
          <small>GIS WEB APP</small>
          <p><b>ArcGIS Operations Dashboard</b></p>
          <p>Build using ArcGIS Online</p>
        </div>
        <!-- <div>
          <a href="https://cryptotalker.netlify.app/" target="_blank">
            <button class="vee-btn">
              Visit&nbsp;<i class="bx bx-link-external"></i></button
          ></a>
        </div> -->
        <router-link to="/portfolio"
          ><button class="vee-btn mt-3">
            Go back <i class="fa-solid fa-rotate-left"></i></button
        ></router-link>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "VeespatialUpdatedSd1",
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
.sd {
  padding: 40px 0;
}
.details {
  margin: 40px 0;
}
</style>
