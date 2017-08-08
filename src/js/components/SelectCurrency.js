import React from 'react';
import PropTypes from 'prop-types';

const SelectCurrency = (props) => {
    return (
        <select>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
    )
}

SelectCurrency.propTypes = {
    currencies: PropTypes.array.isRequired,
    onSelectCurrency: PropTypes.func.isRequired
};

export default SelectCurrency;
