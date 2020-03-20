<template>
  <div class="pokemon-details">
    <div class="card mt-4 mb-4">
      <img
        class="img mt-2"
        :src="activePokemon.sprites.front_default"
        :alt="activePokemon.name"
      />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">
          {{ activePokemon.name | upperFirstLetter }} #00{{ activePokemon.id }}
        </h5>

        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>Type</td>
              <td>
                <span
                  v-for="(type, index) of activePokemon.types"
                  :key="type.type.name + index"
                >
                  {{ type.type.name }}
                </span>
              </td>
            </tr>
            <tr v-for="stat of activePokemon.stats" :key="stat.stat.name">
              <td>{{ stat.stat.name | upperFirstLetter }}</td>
              <td>{{ stat.base_stat }}</td>
            </tr>

            <tr>
              <td>Weight</td>
              <td>
                {{ activePokemon.weight }}
              </td>
            </tr>
            <tr>
              <td>Total Moves</td>
              <td>
                {{ activePokemon.moves.length }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'pokemon-details',
  computed: {
    ...mapState(['activePokemon'])
  },
  filters: {
    upperFirstLetter(val) {
      return val[0].toUpperCase() + val.slice(1);
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
@media screen and (min-width: 770px) {
  .pokemon-details {
    position: fixed;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
}
.card {
  border: none;
  padding: 0 0.2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.8);
}
.table {
  td {
    padding: 0.3rem;
  }
}
</style>
