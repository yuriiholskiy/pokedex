<template>
  <div class="alert alert-danger mt-2" role="alert">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'app-alert',
  props: {
    text: {
      type: String,
      default: `Pokemons`
    }
  }
};
</script>
