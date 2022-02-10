import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const { option, dataTestId } = this.props;
    return (
      <option data-testid={ dataTestId } value={ option }>{option}</option>
    );
  }
}

Option.propTypes = {
  option: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default Option;
