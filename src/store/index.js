import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/http';
import {
  SET_LOADING,
  SET_ACTIVE_TYPE,
  SET_POKEMONS,
  SET_ACTIVE_POKEMON,
  SET_POKEMON_DATA,
  GET_POKEMONS,
  GET_POKEMON_DATA,
  GET_ACTIVE_POKEMON
} from './consts';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    pokemons: [],
    allPokemons: [],
    activePokemon: null,
    selectedValue: 'all'
  },
  mutations: {
    [SET_LOADING](state, payload) {
      state.loading = payload;
    },
    [SET_ACTIVE_TYPE](state, payload) {
      state.selectedValue = payload;
    },
    [SET_POKEMONS](state, payload) {
      state.pokemons = payload;
    },
    [SET_ACTIVE_POKEMON](state, payload) {
      state.activePokemon = payload;
    },
    [SET_POKEMON_DATA](state, payload) {
      state.allPokemons = [...state.allPokemons, payload];
    }
  },
  actions: {
    async [GET_POKEMONS]({ commit }, query) {
      commit(SET_LOADING, true);
      const pokemons = await api.getPokemons(query);
      commit(SET_POKEMONS, pokemons.results);
      commit(SET_LOADING, false);
    },
    async [GET_POKEMON_DATA]({ commit }, dataUrl) {
      const data = await api.getPokemonData(dataUrl);
      commit(SET_POKEMON_DATA, data);
      return data;
    },
    async [GET_ACTIVE_POKEMON]({ commit }, id) {
      const activePokemon = await api.getPokemonById(id);
      commit(SET_ACTIVE_POKEMON, activePokemon);
    },
    [SET_ACTIVE_TYPE]({ commit }, type) {
      commit(SET_ACTIVE_TYPE, type);
      commit(SET_ACTIVE_POKEMON, null);
    }
  },
  getters: {
    filteredPokemonByType({ allPokemons, selectedValue }) {
      if (selectedValue === 'all') return allPokemons;
      return allPokemons.filter(
        (p) =>
          p.types.filter(({ type: { name } }) => name.includes(selectedValue))
            .length > 0
      );
    },
    isFindPokemonsByType(_, getters) {
      return !getters.filteredPokemonByType.length;
    }
  }
});
