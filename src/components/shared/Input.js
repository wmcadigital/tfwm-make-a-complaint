import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Input = ({ label = '', name = '', defaultValue = undefined }) => {
  const [hasError, setHasError] = useState(defaultValue === '');

  const inputChageHandler = (event) => {
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
    <div className={`wmnds-fe-group ${hasError && 'wmnds-fe-group--error'}`}>
      {label && (
        <label className="wmnds-fe-label" htmlFor="input">
          {label}
        </label>
      )}
      {hasError && <span className="wmnds-fe-error-message">This field can&apos;t be empty</span>}
      <input
        className={`wmnds-fe-input ${hasError && 'wmnds-fe-input--error'}`}
        id="input"
        name={name}
        type="text"
        style={{ width: '20rem' }}
        defaultValue={defaultValue}
        onChange={inputChageHandler}
      />
    </div>
  );
};

// PropTypes
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default Input;
