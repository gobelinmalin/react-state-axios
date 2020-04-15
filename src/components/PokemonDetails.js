import React from 'react';

class PokemonDetails extends React.Component {

  render(){
    const { detailsPokemon } = this.props;
    console.log("ok", detailsPokemon)
    return (
      <div>
        <p>Details des pokemons</p>
      </div>
    )
  }
}


export default PokemonDetails;