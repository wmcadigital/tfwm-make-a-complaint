import React from 'react';

import PropTypes from 'prop-types';

const Button = ({ title = '', link = '' }) => {
  return (
    <a href={link}>
      <button className="wmnds-btn wmnds-btn--start wmnds-m-b-md" type="button">
        {title}
        <svg className="wmnds-btn__icon wmnds-btn__icon--right ">
          <use xlinkHref="#wmnds-general-chevron-right" href="#wmnds-general-chevron-right" />
        </svg>
      </button>
    </a>
  );
};

// PropTypes
Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
