import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../../components/header';
import Footer from '../../components/footer';
import Box from '../../components/box';

// Styles
import './index.scss';

const propTypes = {
  children: PropTypes.any,
};

function Content({ children }) {
  return (
    <>
      <Header />

      {/* eslint-disable-next-line */}
      <Box children={children} />

      <Footer />
    </>
  );
}

Content.propTypes = propTypes;

export default Content;
