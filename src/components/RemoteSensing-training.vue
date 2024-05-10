<template>
  <div class="courses">
    <h1>Remote Sensing in QGIS Certification Course</h1>
    <p>
      Explore the world of Geographic Information Systems with our Remote
      Sensing Certification Course designed for beginners. Whether you're
      entirely new to GIS & Remote Sensing or have minimal experience, this
      course provides foundational knowledge and skills in utilizing spatial
      data.
    </p>
    <h2 class="wyl">What you will learn:</h2>

    <div class="what-you-learn">
      <div class="what-left">
        <ul>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Acquire a
            thorough understanding of satellite remote sensing principles
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Learn the most
            popular open-source GIS and Remote Sensing software tools (QGIS) and
            Semi-automated classification (SCP) plugin
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Learn how to
            obtain satellite data, apply Remote Sensing image preprocessing,
            create training and validation data in QGIS
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Apply Land use
            and Land Cover (LULC) Mapping and Change Detection in QGIS
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;You'll have a
            copy of the practicals step-by-step manuals used in the course for
            your reference to use for your Remote Sensing analysis in QGIS
          </li>
        </ul>
      </div>
      <div class="what-right">
        <ul>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Learn how to
            apply satellite remote sensing principles in practice
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Create your
            first GIS maps for your reports/presentations in QGIS
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Learn abouit
            open source Remote Sensing software tools and data portals
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Learn how to
            plan and practise to implement your first geospatial project based
            on Remote Sensing data
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;You'll also
            have plenty of handy hints and tips during this course for QGIS and
            Remote Sensing analysis
          </li>
        </ul>
      </div>
    </div>

    <h2 class="wyl">Requirements:</h2>
    <p>
      Computer using basics (if You know where is right mouse button You’re good
      to go)
    </p>
    <h2 class="wyl">Description:</h2>
    <p>
      In this course you will learn everything you need to know to start your
      journey with GIS software by solving a real-life scenario. We will start
      by preparing our project and all data we might need, planning our work and
      managing task progress. I will show you all the most important tools, you
      will learn how to import and export spatial data, modify it, calculate
      parameters, search for cases, visualize data, create maps and much more.
    </p>

    <p>
      This course is valued at ₦70,000. For international students it is valued
      at $70 | €70 | £70, respectively.
    </p>
    <p>To proceed, kindly hit the register button.</p>

    <div class="btn">
      <a
        href="https://paystack.com/pay/gis-training"
        target="_blank"
        ><div class="button">Register here!</div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PrecisegisQgisTraining",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
a  {
  text-decoration: none;
}
a:hover {
  text-decoration: underline #c9ada7;
}
.courses {
  text-align: left;
}
.wyl {
  margin-top: 50px;
}
.what-you-learn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.what-you-learn li {
  padding: 10px 0;
}
.what-left {
  margin-left: 20px;
}
.what-right {
  text-align: left;
}

ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}

.btn {
  display: grid;
  grid-template-columns: 10px;
}
.button {
  background: #1b4965;
  margin: 20px 0;
  padding: 10px 20px;
  border: #1b4965 1px solid;
  color: #fff;
  width: 100px;
}
i {
  color: #62b6cb;
}

/* Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .courses p {
    text-align: justify;
  }
  .what-you-learn {
    display: block;
  }
  .what-right {
    margin-left: 20px;
  }
}
</style>