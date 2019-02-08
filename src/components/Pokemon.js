import React, { Component } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 18px;
  color: #0e0c0d;
  text-transform: capitalize;
`;

class Pokemon extends Component {

    render() {
        const pokemons = this.props.display;
        const optionItems = pokemons.map((poke) =>
            <option key={poke.name}>{poke.name}</option>
        );

        return (
            <div>
                <form action="">
                    <Select onChange={this.props.change}>
                        {optionItems}
                    </Select>
                </form>   
            </div>
        )
    }
}

export default Pokemon;