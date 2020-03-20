<template>
  <div
    class="d-flex justify-content-center text-center"
    :class="[{ 'fixed-right': fixedRight }, { 'fixed-left': fixedLeft }]"
  >
    <div
      class="spinner-border"
      role="status"
      style="width: 5rem; height: 5rem;"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    fixedRight: {
      type: Boolean,
      default: false
    },
    fixedLeft: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.fixed-right {
  position: fixed;
  top: 50%;
  right: 15%;
  z-index: 1000;
  transform: translate(-50%, -50%);
}
.fixed-left {
  position: fixed;
  top: 50%;
  left: 15%;
  z-index: 1000;
  transform: translate(-50%, -50%);
}
</style>
