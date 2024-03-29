
function NavBar({clickNext, clickBack,pokemonIndex,pokemonList}){
    return(
    <>
        {pokemonIndex>0 && <button type="button" onClick={clickBack}>Back</button>}
        {pokemonIndex < pokemonList.length-1 && <button type="button" onClick={clickNext}>Next</button>}
    </>
    )

}

export default NavBar
// {pokemonIndex>0 && <button onClick={()=> setPokemonIndex(pokemonIndex - 1)}>Back</button>}
// {pokemonIndex < pokemonList.length-1 && <button onClick={()=> setPokemonIndex(pokemonIndex + 1)}>Next</button>}