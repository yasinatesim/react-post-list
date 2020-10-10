import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../../../../components/button';

const propTypes = {
  item: PropTypes.object,
  handleClickEdit: PropTypes.func,
  handleClickRemove: PropTypes.func,
};

function ListItem({ item, handleClickEdit, handleClickRemove }) {
  const { id, title } = item;

  return (
    <li className="list-item">
      <div className="list-item__content">
        <b>{id}</b>
        <p>{title}</p>
      </div>
      <div className="list-item__actions">
        <Button to={`/post/${item.id}`} extraClass="btn--primary">
          Detay
        </Button>
        <Button onClick={() => handleClickEdit(item)} extraClass="btn--success">
          Düzenle
        </Button>
        <Button onClick={() => handleClickRemove(item)} extraClass="btn--danger">
          Sil
        </Button>
      </div>
    </li>
  );
}

ListItem.propTypes = propTypes;


export default ListItem;
