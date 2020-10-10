import React from 'react';

// Routes
import { Link } from 'react-router-dom';

// Images
import Logo from '../../assets/img/logo.svg';

// Styles
import './index.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <img src={Logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Posts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
