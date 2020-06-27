import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import { Translations } from '../utils';
import { store, persistor } from '../store';

const MyApp = ({ Component, pageProps }) => {
  i18n.translations = {
    ...Translations
  };

  useEffect(() => {
    i18n.locale = navigator.language;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps: pageProps };
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;