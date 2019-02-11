import React, { Fragment } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 2rem;
  color: #0e0c0d;
  text-transform: capitalize;
`;

const Pokemon = ({ change, display }) => {
  const optionItems = display.map(poke => <option key={poke.name}>{poke.name}</option>);

  return (
    <Fragment>
      <form action="">
        <Select onChange={change}>{optionItems}</Select>
      </form>
    </Fragment>
  );
};

export default Pokemon;
