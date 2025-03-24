<template>
  <div>
    <h2>GIS Analytics</h2>
    <div class="site-buckets">
      <div class="site-bucket-img">
        <img src="./img/ga1.jpeg" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga2.jpeg" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga6.jpeg" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga8.jpeg" class="img-fluid" alt="" />
      </div>

      <div class="site-bucket-img">
        <img src="./img/ga9.png" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga10.jpeg" class="img-fluid" alt="" />
      </div>

      <div class="site-bucket-img">
        <img src="./img/ga12.jpeg" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga13.jpeg" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga11.png" class="img-fluid" alt="" />
      </div>
    </div>
    <div class="site-buckets">
      <div class="site-bucket-img">
        <img src="./img/ga3.jpeg" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga4.jpeg" class="img-fluid" alt="" />
      </div>
      <div class="site-bucket-img">
        <img src="./img/ga5.jpeg" class="img-fluid" alt="" />
      </div>

      <div class="site-bucket-img">
        <img src="./img/ga7.jpeg" class="img-fluid" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VeespatialUpdatedGisAnalytics",

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