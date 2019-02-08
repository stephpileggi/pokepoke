import React, { Component } from "react";

class Stats extends Component {

    render() {
        const infos = this.props.info;

        return (
          <div>
            <h2>Name: {infos.name}</h2>
            <p>Capture Rate: {infos.capture_rate}</p>
            <p>Happiness: {infos.base_happiness}</p>
            <p>Hatch Counter: {infos.hatch_counter}</p>
          </div>
        );
        
    }
}

export default Stats;