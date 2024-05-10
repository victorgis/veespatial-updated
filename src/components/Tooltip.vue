<!-- Tooltip.vue -->
<template>
  <div class="tooltips" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <div v-if="isVisible" class="tooltiptext">
      <p class="ttt">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    showTooltip() {
      this.isVisible = true;
    },
    hideTooltip() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.tooltips {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  display: none;
  position: absolute;
  background-color: #4a4e69;
  color: #f2e9e4;
  padding: 5px;
  border-radius: 3px;
  z-index: 1;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltips:hover .tooltiptext {
  display: block;
}
p {
  margin: 0;
}
p.ttt {
  font-size: 16px;
}
</style>
