import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from './components/Pokemon';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: [],
      value: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value;

    this.setState({
      value: value
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${value}`)
    .then(val => {
      const moreInfo = val.data;
      console.log(moreInfo);
    });
  }

    componentDidMount() {
      axios.all([
        axios.get ('https://pokeapi.co/api/v2/pokemon/'),
      ]).then((res) => {
        // res = name.data.results; 
        res.map(name => {
          const pokeName = name.data.results;
          this.setState({
            pokemon: pokeName
          })
        })  
      console.log(this.state.pokemon);  
      console.log(this.state.value);

      })
  }

  render() {
      return (
        <div className="App">
          <h1>PICK A POKE</h1>
          <Pokemon change={this.handleChange} display={this.state.pokemon} />
        </div>
      );
  }

}



export default App;
