<template>
  <div
    class="col-md-4 col-sm-12 cursor-pointer"
    v-if="pokemon.name"
    @click="setActivePokemon(pokemon)"
  >
    <div class="card mt-2">
      <img
        class="img"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ pokemon.name }}</h5>
        <div class="d-flex justify-content-center text-white">
          <p
            class="badge badge-pill"
            :class="type"
            v-for="(type, index) of types"
            :key="type + index"
          >
            {{ type }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { GET_ACTIVE_POKEMON } from '@/store/consts';
export default {
  name: 'pokemon-item',
  props: {
    pokemon: {
      type: Object,
      reqired: true
    }
  },
  computed: {
    ...mapState(['activePokemon']),
    ...mapGetters(['filteredPokemonByType']),
    types() {
      // getting just types for classes
      return this.pokemon.types.map(({ type: { name } }) => name);
    }
  },
  methods: {
    setActivePokemon({ id, name }) {
      // if we click on the same pokemon don't do request again;
      if (this.activePokemon && this.activePokemon.name === name) {
        return;
      }
      this.$store.dispatch(GET_ACTIVE_POKEMON, id);
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.grass {
  color: #000;
  background-color: #d7fcd4;
}
.poison {
  color: #000;
  background-color: #b6cca1;
}
.fire {
  background-color: #ff6b35;
}
.flying {
  color: #000;
  background-color: #efefd0;
}
.water {
  background-color: #6b7fd7;
}
.ice {
  background-color: #1a659e;
}
.ground {
  background-color: #37080b;
}
.electric {
  background-color: #f9c80e;
}
.fighting {
  background-color: #ebd494;
}
.fairy {
  background-color: #b6b8d6;
}
.steel {
  background-color: #27282b;
}
.rock {
  background-color: #4d4f55;
}
.bug {
  background-color: #3e442b;
}
.psychic {
  background-color: #6f58c9;
}
.ghost {
  background-color: #b6b8d6;
}
.dragon {
  background-color: #98473e;
}
.normal {
  color: #000;
  background-color: #bfd7ea;
}
.dark {
  background-color: #000;
}
</style>
