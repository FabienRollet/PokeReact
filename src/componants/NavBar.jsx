
function NavBar({ pokemonList, setPokemonIndex, pokemonIndex }) {

  return (
    <>
      {pokemonList.map((pokebutton, pokemonIndex) => (
        <button
          key={pokebutton.name}
          onClick={() => setPokemonIndex(pokemonIndex)}
        >
          {pokebutton.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
