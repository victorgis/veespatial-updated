<template>
  <section id="portfolio" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <h3>Contact Me</h3>
          <p>
            "Looking forward to hearing from you. Let's create something
            extraordinary!"
          </p>
          <div>
            <a class="nav-link" href="/contact"
              ><button class="vee-btn">Contact Me</button></a
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
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../assets/img/hero-bg.png") center center;
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