import React from 'react';
import PropTypes from 'prop-types';

import Head from './Head';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = ({ children }) => (
  <>
    <Head />
    <LanguageSwitcher />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;