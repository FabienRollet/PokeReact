import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import PokemonCard from "./componants/PokemonCard";
import NavBar from "./componants/NavBar";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const hello = () => {
    alert("Hello there");
  };
  useEffect(() => {
    hello();
  },[]);

  pokemonIndex === 3 && alert("pika");

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
      />
    </>
  );
}
export default App;
