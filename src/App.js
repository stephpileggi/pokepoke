import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from './components/Pokemon';
import Stats from './components/Stats';
import styled from "styled-components";
import img from './images/pokemon.jpg';

const Title = styled.h1`
  color: #fff;
  font-size: 70px;
  text-shadow: rgb(227, 45, 31) 1px 1px, rgb(227, 45, 31) 2px 2px,
    rgb(227, 45, 31) 3px 3px, rgb(227, 45, 31) 4px 4px, rgb(227, 45, 31) 5px 5px,
    rgb(227, 45, 31) 6px 6px, rgb(227, 45, 31) 7px 7px, rgb(227, 45, 31) 8px 8px,
    rgb(227, 45, 31) 9px 9px, rgb(227, 45, 31) 10px 10px,
    rgb(227, 45, 31) 11px 11px, rgb(227, 45, 31) 12px 12px,
    rgb(227, 45, 31) 13px 13px, rgb(227, 45, 31) 14px 14px,
    rgb(227, 45, 31) 15px 15px, rgb(227, 45, 31) 16px 16px,
    rgb(227, 45, 31) 17px 17px, rgb(227, 45, 31) 18px 18px,
    rgb(227, 45, 31) 19px 19px, rgb(227, 45, 31) 20px 20px,
    rgb(227, 45, 31) 21px 21px, rgb(227, 45, 31) 22px 22px,
    rgb(227, 45, 31) 23px 23px, rgb(227, 45, 31) 24px 24px,
    rgb(227, 45, 31) 25px 25px, rgb(227, 45, 31) 26px 26px,
    rgb(227, 45, 31) 27px 27px, rgb(227, 45, 31) 28px 28px;
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: [],
      value: '',
      info: {}
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
      
      this.setState({
        info: moreInfo
      })
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
          <Title>PICK A POKE</Title>
          <Pokemon change={this.handleChange} display={this.state.pokemon} />
          <Stats info={this.state.info}/>
        </div>
      );
  }

}

export default App;
