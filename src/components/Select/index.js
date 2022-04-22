import React from 'react';
import PropTypes from 'prop-types';
import Option from '../Option/index ';

function Select ({ id, labelText, name, onChange, options, value }) {
    return (
      <>
        <label htmlFor={ id }>
          { labelText }
        </label>
        <select
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
          key={ id }
        >
          <option value=''>Selecione</option>
          {options.map((option, i) => (
            <Option
              key={ option.concat(i) }
              option={ option }
            />))}
        </select>
      </>
    );
  }

Select.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
}.isRequired;

export default Select;
