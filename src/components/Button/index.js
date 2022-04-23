import React from 'react';
import propTypes from 'prop-types';

function Button({ children, disabled, onClick, type }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  type: propTypes.string,
}.isRequired;

export default Button;