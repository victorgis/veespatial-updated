<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section class="courses">
        <div class="heading-section">
          <h1>Training Courses</h1>
        </div>
        <div class="tab-buttons">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="changeTab(index)"
            :class="{ active: activeTab === index }"
          >
            <span class="tab-name">{{ tab.name }}</span>
          </button>
        </div>
        <div class="tab-content">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            v-show="activeTab === index"
          >
            <!-- <div v-if="activeTab == '0'">
              <VueTraining />
            </div> -->
            <div v-if="activeTab == '0'">
              <QgisTraining />
            </div>
            <div v-if="activeTab == '1'">
              <ArcGISTraining />
            </div>
            <div v-if="activeTab == '2'">
              <RemoteSensingTraining />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import QgisTraining from "../components/Qgis-training.vue";
import ArcGISTraining from "../components/ArcGIS-training.vue";
import RemoteSensingTraining from "../components/RemoteSensing-training.vue";
import VueTraining from "../components/Vue-training.vue";

export default {
  name: "VeespatialUpdatedCourses",
  components: {
    Header,
    Footer,
    QgisTraining,
    ArcGISTraining,
    RemoteSensingTraining,
    VueTraining,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        // { name: "Vue Training", content: "Content for Tab 1" },
        { name: "QGIS Training", content: "Content for Tab 2" },
        { name: "ArcGIS Training", content: "Content for Tab 3" },
        { name: "Remote Sensing Training", content: "Content for Tab 4" },
      ],
    };
  },

  mounted() {},

  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>

.courses {
  padding: 80px 40px;
}
.main {
  padding: 0 60px;
}
.heading-section {
  margin: 20px 0;
}
.heading-section h1 {
  font-size: 35px;
  font-weight: 900;
}
.tab-name {
  color: #1b4965;
}
.tab-buttons {
  display: flex;
}

.tab-buttons button {
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
}

.tab-buttons button.active {
  background-color: #fff;
  border-bottom: 2px solid #c9ada7;
}

/* .tab-content div {
  display: none;
} */

.tab-content {
  margin: 60px 0;
}

.tab-content div.show {
  display: block;
}

@media (max-width: 991.98px) {
  .courses {
    padding: 40px 10px;
  }
  .main {
    padding: 0 10px;
  }
}

/* Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .main {
    padding: 0 10px;
  }
  .heading-section h1 {
    font-size: 25px;
  }
}
</style>
