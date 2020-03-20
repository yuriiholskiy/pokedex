<template>
  <div
    class="d-flex justify-content-center text-center"
    :class="[
      'fixed',
      { 'fixed-right': fixedRight },
      { 'fixed-left': fixedLeft }
    ]"
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
@media screen and (min-width: 770px) {
  .fixed {
    position: fixed;
    top: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
  }
  .fixed-right {
    right: 15%;
  }
  .fixed-left {
    left: 15%;
  }
}
.fixed-left,
.fixed-right {
  width: '100%';
  margin: 1rem auto 0 auto;
}
</style>
