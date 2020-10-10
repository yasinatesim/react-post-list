import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.any,
};

function Box({ children }) {
  return (
    <div className="container">
      <div className="content">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}

Box.propTypes = propTypes;

export default Box;
