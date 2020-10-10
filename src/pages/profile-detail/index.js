import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Utilities
import getData from '../../utils/fetch';

// Containers
import Content from '../../containers/content';

// Styles
import './index.scss';

const propTypes = {
  match: PropTypes.object,
};

function ProfileDetail({ match }) {
  const [author, setAuthor] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const profileId = match.params.id;

  useEffect(() => {
    (async () => {
      const _author = await getData(`https://jsonplaceholder.typicode.com/users/${profileId}`);

      if (isMounted) setAuthor(_author);
    })();

    return () => {
      setIsMounted(false);
    };
  }, [author, isMounted]);

  return (
    <Content>
      {author && (
        <div className="detail">
          <h3>{author.username}</h3>
          <div className="author">
            <ul>
              <li>
                <strong>ID:</strong>
                <span>{author.id}</span>
              </li>
              <li>
                <strong>Name:</strong>
                <span>{author.name}</span>
              </li>
              <li>
                <strong>Username:</strong>
                <span>{author.username}</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>{author.email}</span>
              </li>
              <li>
                <strong>Phone:</strong>
                <span>{author.phone}</span>
              </li>
              <li>
                <strong>Website:</strong>
                <a href={`http://${author.website}`}>{author.website}</a>
              </li>
              <li>
                <strong>Company:</strong>
                <span>{author.company.name}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Content>
  );
}

ProfileDetail.propTypes = propTypes;

export default ProfileDetail;
