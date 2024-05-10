<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section class="sd">
        <img src="./img/sd8.jpeg" width="600px" class="img-fluid" alt="" />
        <div class="details">
          <small>WEB</small>
          <p><b>Childsolidarity Group</b></p>
          <p>Built with Vue, CSS & Bootstrap</p>
        </div>
        <div>
          <a href="https://childsolidarity.org/" target="_blank">
            <button class="vee-btn">
              Visit&nbsp;<i class="bx bx-link-external"></i></button
          ></a>
          <br>
          <router-link to="/portfolio"><button class="vee-btn mt-3">Go back <i class="fa-solid fa-rotate-left"></i></button></router-link>
        </div>
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
