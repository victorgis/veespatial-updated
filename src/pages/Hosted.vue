<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section class="hosted">
        <img src="../assets/hosted/avatar.png">
        <img src="../assets/hosted/urbanExplorer1.png">
        <img src="../assets/hosted/urbanExplorer2.png">

      </section>
    </div>
    <Footer />
  </div>
</template>


<script>
export default {
  name: "VeespatialUpdatedHosted",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.hosted {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>