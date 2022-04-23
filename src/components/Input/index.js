import React from 'react';
import propTypes from 'prop-types';

function Input ({ id, name, onChange, placeholder, textLabel, type, value } ) {
    return (
        <label htmlFor={ id }>
            {textLabel}
        <input
          id={ id }
          name={ name }
          onChange={ onChange }
          placeholder={ placeholder }
          type={ type }
          value={ value }
        />
      </label>
    )
}

Input.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    textLabel: propTypes.string,
    type: propTypes.string,
    value: propTypes.string,
}.isRequired;

export default Input;