<template>
  <section class="hero" id="hero">
    <div class="hero-details">
      <div class="hero-details-text">
        <p>Hello! <i style="color: #c9ada7" class="fa-solid fa-hand"></i></p>
        <p>
          I'm Victor Essang, a Software Developer & GIS Expert with a passion
          for revolutionizing industries through innovative software solutions &
          Geospatial-Based Solutions.
        </p>
        <div class="mb-5">
          <a href="#portfolio"><button class="vee-btn">Get in touch</button></a>
        </div>
      </div>
      <div class="hero-details-img">
        <img src="" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VeespatialUpdatedHero",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
#hero {
  position: relative;
  background: url("../assets/img/hero-bg.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

#hero:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.9
  ); /* Adjust the RGBA values to change the color and opacity */
}

.hero-details {
  position: relative;
  color: #f2e9e4;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: 2fr 1fr;
}
.hero-details-text {
  align-content: center;
  text-align: left;
  height: 600px;
  padding: 180px 60px 40px;
  /* margin: auto 0; */
}
.hero-details-text p {
  font-size: 40px;
  font-weight: 700;
}

@media (max-width: 991.98px) {
  .hero-details {
    display: block;
  }
  .hero-details-text {
    padding: 20px;
    padding-top: 180px;
    align-content: center;
    text-align: left;
    width: 100%;
    /* height: 600px; */
  }
  .hero-details-text p {
    font-size: 28px;
    line-height: 50px;
    font-weight: 700;
  }
}
</style>