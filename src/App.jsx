import { useState } from 'react';
import './App.css'
import PokemonCard from './componants/PokemonCard'
import NavBar from './componants/NavBar';

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

  const [pokemonIndex,setPokemonIndex]= useState(0);
  return (
    <>
<PokemonCard pokemon ={pokemonList[pokemonIndex]}/>
<NavBar clickBack={()=> setPokemonIndex(pokemonIndex - 1)}
        clickNext={()=> setPokemonIndex(pokemonIndex + 1)}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}/>
    </>
  )
}
export default App
