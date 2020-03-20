<template>
  <div
    class="alert alert-danger mt-2"
    role="alert"
    v-if="!loading && isFindPokemonsByType"
  >
    {{ text }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'app-alert',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: `For now we can't find pokemons with this type. Maybe You need load more`
    }
  },
  computed: {
    ...mapGetters(['isFindPokemonsByType'])
  }
};
</script>
