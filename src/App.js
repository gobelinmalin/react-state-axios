import React from "react";
import "./App.css";
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Axios from 'axios';

class App extends React.Component {
  state = {
    pokemons : [],
    url: "",
    details: [],
  }

  componentDidMount(){
    Axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    .then(response  => response.data.results)
    .then(data  => this.setState({pokemons: data}))
  }

  urlPokemon = (urlParams) => {
    this.setState({ url : urlParams})
    Axios.get(`${urlParams}`)
      .then(response => this.setState({details: response.data}))
  }

  render() {
    const { pokemons, details } = this.state;

    return (
      <div className="App">
        <PokemonList  pokemons={pokemons} urlPokemon={this.urlPokemon} />
        <PokemonDetails detailsPokemon={details}/>
      </div>
    );
  }
}

export default App;
