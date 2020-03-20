const http = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Some server error');
  }
  const json = await response.json();
  return json;
};

const api = {
  _url: 'https://pokeapi.co/api/v2/pokemon',
  getPokemons(query) {
    return http(`${this._url}/?${query}`);
  },
  getPokemonData(url) {
    return http(url);
  },
  getPokemonById(id) {
    return http(`${this._url}/${id}`);
  }
};
export default api;
