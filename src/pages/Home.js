import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function Home() {
  const [pokemon, setPokemon] = useState({
    pokemon: [],
    pokemonDetails: [],
  });

  //   const getPokemon = () => {
  //     API.getAllPokemon(pokemon).then((res) => {
  //       console.log("===== res.data =====", res.data);
  //       setPokemon({
  //         id: res.data.results.id,
  //         name: res.data.results.name,
  //         image: res.data.results.sprites,
  //         xp: res.data.results.base_experience,
  //       });
  //     });
  //   };

  const getPokemon = () => {
    API.getAllPokemon(pokemon).then((res) => {
      console.log("===== res.data =====", res.data);
      res.data.results.forEach(function (key) {
        // console.log("url", key.url);
        let urlDetail = key.url;
        pokemon.pokemonDetails.push(urlDetail);
        console.log("urlDetail", urlDetail);
        setPokemon({
          pokemon: res.data,
          pokemonDetails: urlDetail,
        });
        console.log("pokemonDetails", pokemon.pokemonDetails);
      });
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>Pokémon</h1>
    </div>
  );
}
