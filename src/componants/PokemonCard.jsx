function PokemonCard () {
    let pokemon=pokemonList[1]
    return(
        <figure>
             {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <img src ="https://media1.tenor.com/m/xLU0RdmhhOMAAAAC/pas-de-panneau-ya-pas-de-panneau.gif"/>
            )}
        </figure>
    );
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;