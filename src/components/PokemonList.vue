<template>
  <div class="row pokemon-list justify-content-center">
    <pokemon-item
      v-for="pokemon of filteredPokemonByType"
      :key="pokemon.name"
      :pokemon="pokemon"
      :selectedType="selectedType"
    />
    <app-loader v-if="loading" horizontal />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import AppLoader from '@/components/ui/AppLoader';
import PokemonItem from '@/components/PokemonItem';
export default {
  name: 'pokemon-list',
  props: {
    selectedType: {
      type: String,
      default: 'all'
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(['allPokemons']),
    ...mapGetters(['filteredPokemonByType', 'isFindPokemonsByType'])
  },
  components: {
    AppLoader,
    PokemonItem
  }
};
</script>

<style>
.pokemon-list {
  padding: 0.5rem 0;
}
</style>
