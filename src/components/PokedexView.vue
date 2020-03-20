<template>
  <div class="row">
    <app-select v-model="selectedType" :options="allTypes" />
    <div class="col-12 col-md-7 align-items-center">
      <template v-show="!loading">
        <pokemon-list :loading="loading" />
        <button class="btn btn-success mt-2" @click="offset += limit">
          Load more
        </button>
      </template>
      <app-alert :loading="loading" />
    </div>
    <app-loader v-if="detailsLoading" fixed-right />
    <transition name="fade" mode="out-in">
      <pokemon-details class="col-10 col-md-4 mx-auto" v-if="activePokemon" />
    </transition>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList';
import PokemonDetails from '@/components/PokemonDetails';
import AppLoader from '@/components/ui/AppLoader';
import AppSelect from '@/components/ui/AppSelect';
import AppAlert from '@/components/ui/AppAlert';
import { mapState, mapGetters } from 'vuex';
import {
  GET_POKEMONS,
  GET_POKEMON_DATA,
  SET_ACTIVE_TYPE,
  CLEAR_POKEMON_DATA
} from '@/store/consts';
export default {
  name: 'pokedex-view',
  data() {
    return {
      loading: true,
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
    ...mapState([
      'detailsLoading',
      'pokemons',
      'activePokemon',
      'selectedValue'
    ]),
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
      // when we have 100 pokemons on page, it will start delete first 12 elements
      // so we always will have only 100 items
      // it's optional for perfomance purposes
      if (this.offset >= 100) {
        this.$store.dispatch(CLEAR_POKEMON_DATA, this.limit);
      }
      this.loading = true;
      // create query and ge initial pokemons data
      const query = `offset=${this.offset}&limit=${this.limit}`;
      await this.$store.dispatch(GET_POKEMONS, query);
      // add all pokemonData to vuex
      this.pokemons.forEach(async ({ url }) => {
        await this.$store.dispatch(GET_POKEMON_DATA, url);
        this.loading = false;
      });
    }
  },
  components: {
    AppSelect,
    AppLoader,
    AppAlert,
    PokemonList,
    PokemonDetails
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s opacity ease-in-out;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  opacity: 0;
}
</style>
