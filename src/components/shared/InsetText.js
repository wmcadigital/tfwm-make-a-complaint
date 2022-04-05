import React from 'react';

import PropTypes from 'prop-types';

const InsetText = ({ texts = [] }) => {
  return (
    <div className="wmnds-m-t-md wmnds-m-b-md">
      {texts.map((text) => (
        <div key={text}>
          <div className="wmnds-inset-text">{text}</div>
        </div>
      ))}
    </div>
  );
};

// PropTypes
InsetText.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InsetText;
