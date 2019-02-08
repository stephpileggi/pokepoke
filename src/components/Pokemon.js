import React, { Component } from "react";

class Pokemon extends Component {

    render() {
        const pokemons = this.props.display;
        const optionItems = pokemons.map((poke) =>
            <option key={poke.name}>{poke.name}</option>
        );

        return (
            <div>
                <form action="">
                    <select onChange={this.props.change}>
                        {optionItems}
                    </select>
                </form>   
            </div>
        )
    }
}

export default Pokemon;