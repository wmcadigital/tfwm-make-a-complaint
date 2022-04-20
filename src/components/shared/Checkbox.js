import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Checkbox = ({ label = '', options = [], defaultValues = [], required = false }) => {
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const checkBoxesChangeHandler = () => {
    const findCheckedBoxes = [...document.querySelectorAll(`input:checked`)].map(
      (checkbox) => checkbox.value
    );

    setCheckedBoxes(findCheckedBoxes);
  };
  useEffect(() => {
    checkBoxesChangeHandler();
  }, []);

  return (
    <div className="wmnds-fe-group ">
      <div className="wmnds-fe-checkboxes">
        <span className="wmnds-fe-checkboxes__desc">{label}</span>
        {options.map((option, idx) => (
          <div key={option.name} className="wmnds-m-b-md">
            <label className="wmnds-fe-checkboxes__container">
              {option.option}
              <input
                onChange={checkBoxesChangeHandler}
                className="wmnds-fe-checkboxes__input"
                value={option.name}
                type="checkbox"
                defaultChecked={defaultValues[idx] && true}
                id={required ? 'required' : ''}
              />
              <span className="wmnds-fe-checkboxes__checkmark">
                <svg className="wmnds-fe-checkboxes__icon">
                  <use xlinkHref="#wmnds-general-checkmark" href="#wmnds-general-checkmark" />
                </svg>
              </span>
            </label>
            {checkedBoxes.includes(option.name) && (
              <div
                style={{ marginLeft: 60 }}
                className={` ${defaultValues[idx] === '' && 'wmnds-fe-group--error'}`}
              >
                <label className="wmnds-fe-label wmnds-m-b-xs" htmlFor="input">
                  {option.inputLabel1}
                </label>
                <label className="wmnds-fe-label" htmlFor="input">
                  {option.inputLabel2}
                </label>{' '}
                {defaultValues[idx] === '' && (
                  <span className="wmnds-fe-error-message">{option.errorMsg}</span>
                )}
                <input
                  name={option.name}
                  className="wmnds-fe-input"
                  id={required ? 'required' : ''}
                  type={option.type}
                  style={{ width: '20rem' }}
                  defaultValue={defaultValues[idx] ? defaultValues[idx] : ''}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  required: PropTypes.bool.isRequired,

  defaultValues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Checkbox;
