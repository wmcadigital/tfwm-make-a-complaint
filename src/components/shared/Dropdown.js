import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Dropdown = ({
  title = '',
  options = [],
  onChange = () => {},
  name = '',
  defaultValue = undefined,
}) => {
  const [hasError, setHasError] = useState(defaultValue === '');

  const dropdownChageHandler = (event) => {
    if (event.target.value === '') {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };
  useEffect(() => {
    if (defaultValue === '') {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [defaultValue]);
  return (
    <div className={`wmnds-fe-group wmnds-m-b-lg  ${hasError && 'wmnds-fe-group--error'}`}>
      <div className="wmnds-fe-dropdown">
        {hasError && <span className="wmnds-fe-error-message">Please select an option</span>}
        <label className="wmnds-fe-label" htmlFor="dropdown-example">
          {title}
        </label>
        <select
          className="wmnds-fe-dropdown__select"
          style={{ width: '50%' }}
          id="dropdown-example"
          name={name}
          onChangeCapture={(e) => {
            onChange(e);
            dropdownChageHandler(e);
          }}
          defaultValue={defaultValue}
        >
          <option value="">Choose from list</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// PropTypes
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,

  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
