<template>
  <div class="row">
    <app-select v-model="selectedType" :options="allTypes" />
    <div class="col-12 col-md-7 align-items-center">
      <pokemon-list v-if="!loading" :pokemons="pokemons" />
      <app-loader v-else />
      <button class="btn btn-success mt-2" @click="offset += limit">
        Load more
      </button>
    </div>
    <pokemon-details class="col-10 col-md-4 mx-auto" v-if="activePokemon" />
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList';
import PokemonDetails from '@/components/PokemonDetails';
import AppLoader from '@/components/ui/AppLoader';
import AppSelect from '@/components/ui/AppSelect';
import { mapState, mapGetters } from 'vuex';
import { GET_POKEMONS, SET_ACTIVE_TYPE } from '@/store/consts';
export default {
  name: 'pokedex-view',
  data() {
    return {
      limit: 12,
      offset: 0,
      allTypes: [
        'all',
        'grass',
        'poison',
        'fire',
        'dragon',
        'flying',
        'ice',
        'ground',
        'steel',
        'electric',
        'fighting',
        'fairy',
        'rock',
        'bug',
        'psychic',
        'ghost',
        'dark',
        'normal'
      ]
    };
  },
  computed: {
    ...mapState(['loading', 'pokemons', 'activePokemon', 'selectedValue']),
    ...mapGetters(['isFindPokemonsByType']),
    selectedType: {
      get() {
        return this.selectedValue;
      },
      set(val) {
        this.$store.dispatch(SET_ACTIVE_TYPE, val);
      }
    }
  },
  watch: {
    offset: {
      handler: 'loadMore',
      immediate: true
    }
  },
  methods: {
    async loadMore() {
      // create query and ge initial pokemons data
      const query = `offset=${this.offset}&limit=${this.limit}`;
      this.$store.dispatch(GET_POKEMONS, query);
    }
  },
  components: {
    AppLoader,
    AppSelect,
    PokemonList,
    PokemonDetails
  }
};
</script>

<style></style>
