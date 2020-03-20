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
      default: `For now we can't find pokemons with this type. Maybe You need load more`
    }
  }
};
</script>
