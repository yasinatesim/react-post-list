import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './index.scss';

const propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

function Input({ label, type, name, onChange, value }) {

  return (
    <div className="text-input">
      <label htmlFor={name}>{label}</label>
      {type === 'textarea' ? (
        <textarea name={name} id={name} cols="30" rows="10" onChange={(e) => onChange(e)} value={value} />
      ) : (
        <input type="text" name={name} id={name} value={value} onChange={(e) => onChange(e)} />
      )}
    </div>
  );
}

Input.propTypes = propTypes;

export default Input;
