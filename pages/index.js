import { useEffect } from 'react';
import i18n from 'i18n-js';

import { Translations } from '../utils';

i18n.translations = {
  ...Translations
};

export default () => {
  useEffect(() => {
    window.location.href = '/login';
  }, []);

  return null;
};