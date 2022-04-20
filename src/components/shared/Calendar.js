import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Calendar = ({
  label = '',
  dayDefaultValue = undefined,
  monthDefaultValue = undefined,
  yearDefaultValue = undefined,
  required = false,
}) => {
  const [isRequired, setIsRequired] = useState(required);
  const [hasError, setHasError] = useState(
    dayDefaultValue === '' || monthDefaultValue === '' || yearDefaultValue === ''
  );
  const dateChangeHandler = () => {
    const findDateInputs = [...document.querySelectorAll(`input`)].map(
      (checkbox) => checkbox.value
    );

    const dateIsEmpty = findDateInputs.every((value) => value === '');

    if (dateIsEmpty) {
      setIsRequired(false);
      setHasError(false);
      return;
    }
    if (!dateIsEmpty) {
      setIsRequired(true);
    }

    if (findDateInputs.includes('')) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  useEffect(() => {
    if (dayDefaultValue === '' || monthDefaultValue === '' || yearDefaultValue === '') {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [dayDefaultValue, monthDefaultValue, yearDefaultValue]);

  return (
    <div className="wmnds-fe-group">
      {label && (
        <label className="wmnds-fe-label" htmlFor="input">
          {label}
        </label>
      )}
      <div
        id="date-input"
        className={`wmnds-fe-group ${hasError && isRequired && 'wmnds-fe-group--error'}`}
      >
        <div className="wmnds-fe-date-input">
          {hasError && isRequired && (
            <span className="wmnds-fe-error-message">Enter a valid date</span>
          )}
          <div className="wmnds-fe-date-input__day">
            <label className="wmnds-fe-label" htmlFor="LastUsedDateDay">
              Day
            </label>
            <input
              className={`wmnds-fe-input ${hasError && isRequired && 'wmnds-fe-input--error'}`}
              id={isRequired ? 'required' : ''}
              inputMode="numeric"
              name="day"
              type="text"
              maxLength="2"
              minLength="1"
              pattern="[0-9]*"
              onChange={dateChangeHandler}
              defaultValue={dayDefaultValue}
            />
          </div>
          <div className="wmnds-fe-date-input__month">
            <label className="wmnds-fe-label" htmlFor="LastUsedDateMonth">
              Month
            </label>
            <input
              className={`wmnds-fe-input ${hasError && isRequired && 'wmnds-fe-input--error'}`}
              id={isRequired ? 'required' : ''}
              inputMode="numeric"
              name="month"
              type="text"
              maxLength="2"
              minLength="1"
              pattern="[0-9]*"
              onChange={dateChangeHandler}
              defaultValue={monthDefaultValue}
            />
          </div>
          <div className="wmnds-fe-date-input__year">
            <label className="wmnds-fe-label" htmlFor="LastUsedDateYear">
              Year
            </label>
            <input
              className={`wmnds-fe-input ${hasError && isRequired && 'wmnds-fe-input--error'}`}
              id={isRequired ? 'required' : ''}
              inputMode="numeric"
              name="year"
              type="text"
              maxLength="4"
              minLength="4"
              pattern="[0-9]*"
              onChange={dateChangeHandler}
              defaultValue={yearDefaultValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes
Calendar.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
  dayDefaultValue: PropTypes.string.isRequired,
  monthDefaultValue: PropTypes.string.isRequired,
  yearDefaultValue: PropTypes.string.isRequired,
};

export default Calendar;
