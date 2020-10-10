import React from 'react';

// Routes
import { Link } from 'react-router-dom';

// Styles
import './index.scss';

// Components
import SocialMedia from '../social-media';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <h4>Thank you for supporting us!</h4>
            <p>Let's get in touch on any of these platforms.</p>
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
        <div className="footer__copyright">
          <p>
            &copy; 2020. <a href="http://github.com/yasinatesim/react-post-list" className="active">React Post List</a>
          </p>
          <div>
            <Link to="/">Posts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
