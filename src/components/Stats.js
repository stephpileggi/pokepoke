import React, { Component } from "react";
import styled from "styled-components";

const Name = styled.h2`
  font-size: 2.5rem;
  color: red;
  text-transform: capitalize;
`;

const Info = styled.p`
  font-size: 2rem;
`

const Stats = (props) => {

        const infos = props.info;

        return (
          <div>
            <Name>Name: {infos.name}</Name>
            <Info>Capture Rate: {infos.capture_rate}</Info>
            <Info>Happiness: {infos.base_happiness}</Info>
            <Info>Hatch Counter: {infos.hatch_counter}</Info>
          </div>
        );
           
}

export default Stats;