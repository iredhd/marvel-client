import { useEffect } from 'react';
import Router from 'next/router';
import i18n from 'i18n-js';

import { Translations } from '../utils';

export default () => {
  i18n.translations = {
    ...Translations
  };

  useEffect(() => {
    i18n.locale = navigator.language;

    Router.replace('/login');
  }, []);

  return null;
};