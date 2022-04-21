import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from '../Option';

class Select extends Component {
  render() {
    const { spanText,
      name,
      dataTestId,
      id,
      value,
      onChange:
      handleChange,
      options } = this.props;

    return (
      <>
        <label htmlFor={ id }>
          { spanText }
        </label>
        <select
          name={ name }
          value={ value }
          onChange={ handleChange }
          data-testid={ dataTestId }
          id={ id }
          key={ id }
        >
          <option value="">Selecione</option>
          {options.map((option, i) => (
            <Option
              key={ option.concat(i) }
              option={ option }
              dataTestId={ option }
            />))}
        </select>
      </>
    );
  }
}
Select.propTypes = {
  dataTestId: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  spanText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default Select;
