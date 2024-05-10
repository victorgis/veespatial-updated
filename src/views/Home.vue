<template>
  <div class="parent">
    <Header />
    <div class="main">
      <Hero />
      <Portfolio />
      <Technologies />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Hero from "../components/Hero.vue";
import Portfolio from "../components/Portfolio.vue";
import Technologies from "../components/Technologies.vue";

export default {
  name: "VeespatialUpdatedHome",
  components: {
    Header,
    Footer,
    Hero,
    Portfolio,
    Technologies,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>
