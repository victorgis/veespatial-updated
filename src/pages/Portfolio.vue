<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section class="portfolio">
        <div class="heading-section">
          <h2>View my portfolio</h2>
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
            <div v-if="activeTab == '0'">
              <SoftwareDevelopment />
            </div>
            <div v-if="activeTab == '1'">
              <GISDevelopment />
            </div>
            <div v-if="activeTab == '2'">
              <GISAnalytics />
            </div>
            <!-- <div v-if="activeTab == '3'">
              Tab 4
            </div> -->
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
import SoftwareDevelopment from "../portfolio-items/software-development/Software-development.vue";
import GISDevelopment from "../portfolio-items/gis-development/Gis-development.vue";
import GISAnalytics from "../portfolio-items/gis-analytics/Gis-analytics.vue";

export default {
  name: "VeespatialUpdatedPortfolio",
  components: {
    Header,
    Footer,
    SoftwareDevelopment,
    GISDevelopment,
    GISAnalytics,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        { name: "Software Developer", content: "Content for Tab 1" },
        { name: "GIS Developer", content: "Content for Tab 2" },
        { name: "GIS Analyst", content: "Content for Tab 3" },
        // { name: "Data Analyst", content: "Content for Tab 4" },
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
.portfolio {
  padding: 40px 0;
}
.tab-name {
  color: #22223b;
}

.tab-buttons {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}
.tab-buttons button {
  cursor: pointer;
  padding: 6px;
  margin: 0 6px;
  border: 1px solid #c9ada7;
  background-color: #f2e9e4;
}
.tab-buttons button.active {
  background-color: #fff;
  border-bottom: 2px solid #c9ada7;
}
.tab-content {
  margin: 60px 0;
}
.tab-content div.show {
  display: block;
}
</style>
