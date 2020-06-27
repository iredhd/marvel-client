import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Head from './Head';
import LanguageSwitcher from './LanguageSwitcher';
import background from '../assets/spider-man-bg.jpg';

const PageLayout = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
  }

  #__next {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const Layout = ({ children }) => (
  <>
    <PageLayout />
    <Head />
    <LanguageSwitcher />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;