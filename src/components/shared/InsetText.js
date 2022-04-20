import React from 'react';

import PropTypes from 'prop-types';

import dompurify from 'dompurify';

const { sanitize } = dompurify;

const InsetText = ({ texts = [] }) => {
  return (
    <div className="wmnds-m-t-md wmnds-m-b-md">
      {texts.map((text) => (
        <div key={text}>
          <div
            className="wmnds-inset-text"
            dangerouslySetInnerHTML={{
              __html: sanitize(text),
            }}
          />
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
