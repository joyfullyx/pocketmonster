const axios = require("axios");

const urlPrefix = "https://pokeapi.co/api/v2/pokemon?limit=151";

const API = {
  getAllPokemon: function (pokemon) {
    return axios.get(`${urlPrefix}`);
  },
  getPokemonById: function (id) {
    return axios.get(`${urlPrefix}/${id}`);
  },
};

export default API;
