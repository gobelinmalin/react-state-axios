import React from 'react';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {

  render(){
    const { pokemons, urlPokemon } = this.props;
    return (
      <div>
        <p>Listes des pokemons</p>
        {pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} urlPokemon={urlPokemon} />)}
      </div>
    )
  }
}


export default PokemonList;