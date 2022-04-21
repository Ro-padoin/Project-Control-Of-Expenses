import React from 'react';
import PropTypes from 'prop-types';
import Option from '../Option/index ';

function Select (props) {
  const {
    spanText,
    name,
    id,
    value,
    onChange: handleChange,
    options } = props;   
    
    return (
      <>
        <label htmlFor={ id }>
          { spanText }
        </label>
        <select
          name={ name }
          value={ value }
          onChange={ handleChange }
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
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  spanText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default Select;
