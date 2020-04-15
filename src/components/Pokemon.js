import React from 'react';

class Pokemon extends React.Component {

  render(){
    const { pokemon, urlPokemon } = this.props;
    return (
      <div>
        <button onClick={() => urlPokemon(pokemon.url)}>{pokemon.name}</button>

      </div>
    )
  }
}


export default Pokemon;