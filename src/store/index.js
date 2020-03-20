import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/http';
import {
  SET_ACTIVE_TYPE,
  SET_POKEMONS,
  SET_ACTIVE_POKEMON,
  SET_POKEMON_DATA,
  SET_LOADING,
  CLEAR_POKEMON_DATA,
  GET_POKEMONS,
  GET_POKEMON_DATA,
  GET_ACTIVE_POKEMON
} from './consts';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    allPokemons: [],
    activePokemon: null,
    selectedValue: 'all',
    detailsLoading: false
  },
  mutations: {
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
    },
    [CLEAR_POKEMON_DATA](state, payload) {
      state.allPokemons = state.allPokemons.slice(payload);
    },
    [SET_LOADING](state, payload) {
      state.detailsLoading = payload;
    }
  },
  actions: {
    async [GET_POKEMONS]({ commit }, query) {
      const pokemons = await api.getPokemons(query);
      commit(SET_POKEMONS, pokemons.results);
      return pokemons;
    },
    async [GET_POKEMON_DATA]({ commit }, dataUrl) {
      const data = await api.getPokemonData(dataUrl);
      commit(SET_POKEMON_DATA, data);
      return data;
    },
    async [GET_ACTIVE_POKEMON]({ commit }, id) {
      commit(SET_LOADING, true);
      commit(SET_ACTIVE_POKEMON, null);
      const activePokemon = await api.getPokemonById(id);
      commit(SET_ACTIVE_POKEMON, activePokemon);
      commit(SET_LOADING, false);
    },
    [SET_ACTIVE_TYPE]({ commit }, type) {
      commit(SET_ACTIVE_TYPE, type);
      commit(SET_ACTIVE_POKEMON, null);
    },
    [CLEAR_POKEMON_DATA]({ commit }, limit) {
      commit(CLEAR_POKEMON_DATA, limit);
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
