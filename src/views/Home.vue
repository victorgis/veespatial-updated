<template>
  <div class="parent">
    <Header />
    <div class="main">
      <Hero />
      <Portfolio />
      <!-- <Action /> -->
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
import Action from "../components/Get-in-touch.vue";
import Technologies from "../components/Technologies.vue";

export default {
  name: "VeespatialUpdatedHome",
  components: {
    Header,
    Footer,
    Hero,
    Portfolio,
    Action,
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
