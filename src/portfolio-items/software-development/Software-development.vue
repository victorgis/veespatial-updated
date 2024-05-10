<template>
  <div>
    <h2>
      Software Development || Frontend Development || Fullstack Development
    </h2>
    <div class="site-buckets">
      <div class="site-bucket-img">
        <img src="./img/sd9.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-9">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>
      <div class="site-bucket-img">
        <img src="./img/sd7.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-7">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>
      <div class="site-bucket-img">
        <img src="./img/sd3.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-3">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>
      <div class="site-bucket-img">
        <img src="./img/sd1.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-1"
            ><p class="details">Open</p></router-link
          >
        </div>
      </div>
      <div class="site-bucket-img">
        <img src="./img/sd2.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-2">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>

      <div class="site-bucket-img">
        <img src="./img/sd4.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-4">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>
      <div class="site-bucket-img">
        <img src="./img/sd5.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-5">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>
      <div class="site-bucket-img">
        <img src="./img/sd6.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-6">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>

      <div class="site-bucket-img">
        <img src="./img/sd8.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-8">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>

      <div class="site-bucket-img">
        <img src="./img/sd10.jpeg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-10">
            <p class="details">Open</p></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VeespatialUpdatedSoftwareDevelopment",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.site-buckets {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.site-bucket-img {
  position: relative;
  display: inline-block;
}
.site-bucket-img img {
  display: block;
  max-width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust the transparency as needed */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease; /* Smooth transition */
}

p.details {
  position: absolute;
  color: #fff;
  bottom: 0;
  width: 100%;
  background: #c9ada7;
}

.site-bucket-img:hover .overlay {
  opacity: 1; /* Show the overlay on hover */
}

@media (max-width: 991.98px) {
  .site-buckets {
    padding: 20px;
    display: block;
    gap: 10px;
  }
}
</style>