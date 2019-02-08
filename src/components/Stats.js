import React, { Component } from "react";
import styled from "styled-components";

const Name = styled.h2`
  font-size: 25px;
  color: red;
  text-transform: capitalize;
`;

class Stats extends Component {

    render() {
        const infos = this.props.info;

        return (
          <div>
            <Name>Name: {infos.name}</Name>
            <p>Capture Rate: {infos.capture_rate}</p>
            <p>Happiness: {infos.base_happiness}</p>
            <p>Hatch Counter: {infos.hatch_counter}</p>
          </div>
        );
        
    }
}

export default Stats;