import React from 'react';
import PropTypes from 'prop-types';

// Components
import Input from '../input';
import Button from '../button';

// Styles
import './index.scss';

const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  handleChange: PropTypes.func,
  toggleModal: PropTypes.func,
  editPost: PropTypes.func,
};

function Modal({ title, body, handleChange, toggleModal, editPost }) {
  return (
    <div className="modal">
      <div className="modal__header">
        <h3 className="modal__title">Düzenle</h3>
        <button type="button" className="modal__icon" onClick={() => toggleModal({ isOpen: false })}>
          <svg viewBox="0 0 357 357" width="10" height="10">
            <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
          </svg>
        </button>
      </div>
      <div className="modal__body">
        <Input label="Title" name="title" value={title} onChange={handleChange} />
        <Input label="Body" name="body" type="textarea" value={body} onChange={handleChange} />
      </div>
      <div className="modal__footer">
        <Button extraClass="btn--info" onClick={editPost}>
          Güncelle
        </Button>
      </div>
    </div>
  );
}

Modal.propTypes = propTypes;

export default Modal;
