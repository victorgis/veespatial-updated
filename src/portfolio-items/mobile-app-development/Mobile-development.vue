<template>
  <div>
    <h2>Mobile App Cross-platform Development</h2>
    <div class="site-buckets">
      <div class="site-bucket-img">
        <p>CrossSafe App</p>
        <img src="./img/md-1.jpg" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="">
            <p class="details"></p></router-link
          >
        </div>
      </div>
      <div class="site-bucket-img">
        <p>Urban Explorer</p>
        <img src="./img/md-2.png" class="img-fluid" alt="" />
        <div class="overlay">
          <a href="../../assets/hosted/urban-explorer.apk">
            <p class="details">Download Urban Explorer</p></a
          >
        </div>
      </div>
      <!-- <div class="site-bucket-img">
        <img src="./img/md-2.png" class="img-fluid" alt="" />
        <div class="overlay">
          <router-link to="portfolio/sd-7">
            <p class="details">Open</p></router-link
          >
        </div>
      </div> -->
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
  border: 1px solid #262626;
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