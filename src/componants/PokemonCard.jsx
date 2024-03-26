import PropTypes from "prop-types";

function PokemonCard ({pokemon}) {

PokemonCard.propTypes = {
     pokemon: PropTypes.shape({
         imgSrc: PropTypes.string,
         name: PropTypes.string
    }).isRequired
    };
    
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

export default PokemonCard;