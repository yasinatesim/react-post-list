import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Routes
import { Link } from 'react-router-dom';

// Utilities
import getData from '../../utils/fetch';

// Containers
import Content from '../../containers/content';

// Styles
import './index.scss';

const propTypes = {
  match: PropTypes.object,
};

function PostDetail({ match }) {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const postId = match.params.id;

  useEffect(() => {
    (async () => {
      const _post = await getData(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const _author = await getData(`https://jsonplaceholder.typicode.com/users/${_post.userId}`);

      setAuthor(_author);

      if (isMounted) {
        setPost(_post);
      }
    })();

    return () => {
      setIsMounted(false);
    };
  }, [post, isMounted]);

  return (
    <div className="post-detail">
      <Content>
        {post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="author">
              <h3>User Detail</h3>
              <ul>
                <li>
                  <strong>Name:</strong>
                  <span>{author.name}</span>
                </li>
                <li>
                  <strong>Username:</strong>
                  <Link to={`/profile/${author.id}`}>{author.username}</Link>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>{author.email}</span>
                </li>
                <li>
                  <strong>Phone:</strong>
                  <span>{author.phone}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Content>
    </div>
  );
}

PostDetail.propTypes = propTypes;

export default PostDetail;
