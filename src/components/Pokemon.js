import React, { Component } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 2rem;
  color: #0e0c0d;
  text-transform: capitalize;
`;

const Pokemon = (props) => {

        const pokemons = props.display;
        const optionItems = pokemons.map((poke) =>
            <option key={poke.name}>{poke.name}</option>
        );

        return (
            <div>
                <form action="">
                    <Select onChange={props.change}>
                        {optionItems}
                    </Select>
                </form>   
            </div>
        )
}

export default Pokemon;