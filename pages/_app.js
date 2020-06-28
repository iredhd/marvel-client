import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';
import axios from 'axios';
import md5 from 'md5';
import moment from 'moment';

import { Translations } from '../utils';
import { store, persistor } from '../store';

axios.defaults.baseURL = 'https://gateway.marvel.com:443/v1/public';
axios.interceptors.request.use((config) => {
  const ts = (new Date()).getTime();

  return {
    ...config,
    params: {
      ...config.params,
      apikey: process.env.REACT_APP_MARVEL_API_KEY,
      ts,
      hash: md5(`${ts}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_API_KEY}`)
    }
  };
});

const MyApp = ({ Component, pageProps }) => {
  i18n.translations = {
    ...Translations
  };

  useEffect(() => {
    i18n.locale = navigator.language;
    moment.locale(navigator.language.toLowerCase());
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

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;