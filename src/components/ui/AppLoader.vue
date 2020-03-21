<template>
  <div class="spinner mt-2" v-if="horizontal">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    <div class="bounce4"></div>
    <div class="bounce5"></div>
    <div class="bounce6"></div>
    <div class="bounce7"></div>
  </div>
  <div
    v-else
    class="d-flex justify-content-center text-center"
    :class="[
      'fixed',
      { 'fixed-right': fixedRight },
      { 'fixed-left': fixedLeft }
    ]"
  >
    <div class="spinner-border" style="width: 5rem; height: 5rem;">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    horizontal: {
      type: Boolean,
      deafult: false
    },
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
// horizontal spinner
.spinner {
  width: calc(1rem * 7 + 6 * 0.5rem);
  text-align: center;
  div {
    width: 1rem;
    height: 1rem;
    background-color: var(--warning);

    border-radius: 100%;
    display: inline-block;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  div:not(:first-child) {
    margin-left: 0.5rem;
  }
  .bounce1 {
    animation-delay: -0.96s;
  }
  .bounce2 {
    animation-delay: -0.8s;
  }
  .bounce3 {
    animation-delay: -0.64s;
  }
  .bounce4 {
    animation-delay: -0.48s;
  }
  .bounce5 {
    animation-delay: -0.32s;
  }
  .bounce6 {
    animation-delay: -0.16s;
  }
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
