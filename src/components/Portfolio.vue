<template>
  <section id="portfolio" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <h3>My Portfolio</h3>
          <p>
            "Your portfolio is your silent ambassador, speaking volumes about
            your talents even when you're not in the room."
          </p>
          <div>
            <router-link class="nav-link" to="/portfolio"
              ><button class="vee-btn">Open Portfolio</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VeespatialUpdatedPortfolio",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.portfolio {
  background: linear-gradient(rgba(34, 34, 59, 0.9), rgba(34, 34, 59, 0.9)),
    url("../assets/img/portfolio-header.jpg") center center;
  background-size: cover;
  padding: 100px 0;
}

@media (min-width: 1365px) {
  .portfolio {
    background-attachment: fixed;
  }
}

.portfolio h3 {
  color: #f2e9e4;
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: 700;
}

.portfolio p {
  color: #f2e9e4;
  margin-bottom: 25px;
}

.portfolio .cta-btn:hover {
  background: var(--color-primary);
}
</style>