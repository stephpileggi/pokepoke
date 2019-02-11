// NPM imports
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Shared Imports
import GlobalStyle from '../shared/GlobalStyle';

// Project Imports
import Pokemon from './Pokemon';
import Stats from './Stats';

// Local Imports
import Title from '../shared/components/Title';

const getPokemon = () => axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => res.data.results);

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getPokemon().then(data => setPokemon(data));
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;

    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${value}`).then((val) => {
      const moreInfo = val.data;

      setInfo(moreInfo);
    });
  };

  return (
    <div className="App">
      <Title>PICK A POKE</Title>
      <Pokemon change={handleChange} display={pokemon} />
      <Stats info={info} />
      <GlobalStyle />
    </div>
  );
};

export default App;
