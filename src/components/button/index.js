import React from 'react';
import PropTypes from 'prop-types';

// Routes
import { Link } from 'react-router-dom';

// Styles
import './index.scss';

const propTypes = {
  children: PropTypes.any,
  extraClass: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

function Button({ children, extraClass, to, onClick }) {
  if (to) {
    return (
      <Link className={`btn ${extraClass}`} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`btn ${extraClass}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
