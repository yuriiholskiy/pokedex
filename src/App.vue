<template>
  <div id="app">
    <h1 class="app-header">Pokedex</h1>
    <div class="container">
      <pokedex-view />
    </div>
  </div>
</template>

<script>
import PokedexView from '@/components/PokedexView';
export default {
  name: 'App',
  components: {
    PokedexView
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1rem 0;
}
.app-header {
  margin-top: 1rem;
}
</style>
