import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Info from './Info';
import Name from './Name';

const Stats = ({ info }) => (
  <Fragment>
    <Name>Name: {info.name}</Name>
    <Info>Capture Rate: {info.capture_rate}</Info>
    <Info>Happiness: {info.base_happiness}</Info>
    <Info>Hatch Counter: {info.hatch_counter}</Info>
  </Fragment>
);

Stats.propTypes = {
  info: PropTypes.object,
};

Stats.defaultProps = {
  info: {},
};

export default Stats;
