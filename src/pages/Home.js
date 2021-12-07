import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function Home() {
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    image: "",
    xp: "",
  });

  const getPokemon = () => {
    API.getAllPokemon(pokemon).then((res) => {
      console.log("===== res.data =====", res.data);
      setPokemon({
        id: res.data.results.id,
        name: res.data.results.name,
        image: res.data.results.sprites,
        xp: res.data.results.base_experience,
      });
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>Pokémon</h1>
      <h6>{pokemon.name}</h6>
    </div>
  );
}
