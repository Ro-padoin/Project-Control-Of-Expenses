import React from 'react';
import PropTypes from 'prop-types';

function Option({option}) {
  return (
    <option value={ option }>{option}</option>
  )
}

Option.propTypes = {
  option: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default Option;
