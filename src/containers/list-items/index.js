import React from 'react';
import PropTypes from 'prop-types';

// Components
import ListItem from './components/list-item';

// Styles
import './index.scss';

const propTypes = {
  posts: PropTypes.array,
  handleClickRemove: PropTypes.func,
  handleClickEdit: PropTypes.func,
};

function ListItems({ posts, handleClickRemove, handleClickEdit }) {
  return (
    <ul className="list-items">
      {posts !== null &&
        posts.map((item) => <ListItem handleClickEdit={handleClickEdit} handleClickRemove={handleClickRemove} key={item.id} item={item} />)}
    </ul>
  );
}

ListItems.propTypes = propTypes;

export default ListItems;
