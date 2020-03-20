<template>
  <div>
    <div class="row pokemon-list justify-content-center">
      <pokemon-item
        v-for="pokemon of filteredPokemonByType"
        :key="pokemon.name"
        :pokemon="pokemon"
        :selectedType="selectedType"
      />
    </div>
    <div class="alert alert-danger" role="alert" v-if="isFindPokemonsByType">
      A this type of pokemons not find for now. Try load more pokemons.
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import PokemonItem from '@/components/PokemonItem';
import { GET_POKEMON_DATA } from '@/store/consts';
export default {
  name: 'pokemon-list',
  props: {
    pokemons: {
      type: Array,
      required: true
    },
    selectedType: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    ...mapState(['allPokemons']),
    ...mapGetters(['filteredPokemonByType', 'isFindPokemonsByType'])
  },
  created() {
    // go throught just for limit items for our case it's 12
    this.pokemons.forEach(async ({ url }) => {
      await this.$store.dispatch(GET_POKEMON_DATA, url);
    });
  },
  components: {
    PokemonItem
  }
};
</script>

<style>
.pokemon-list {
  max-height: 550px;
  padding: 0.5rem 0;
  overflow-y: auto;
}
</style>
