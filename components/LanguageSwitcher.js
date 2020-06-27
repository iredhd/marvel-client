import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';
import i18n from 'i18n-js';
import { useRouter } from 'next/router';

import View from './View';

const LanguageSwitcher = () => {
  const router = useRouter();
  const [language, setLanguage] = React.useState(i18n.currentLocale());

  const handleChange = (event) => {
    i18n.locale = event.target.value;

    setLanguage(event.target.value);
    router.replace(window.location.pathname);
  };

  return (
    <LanguageSwitcherContainer>
      <StyledLaguageIcon />
      <Select
        value={language}
        onChange={handleChange}
      >
        <MenuItem value="pt-BR">PT-BR</MenuItem>
        <MenuItem value="en">EN</MenuItem>
      </Select>
    </LanguageSwitcherContainer>
  );
};

const LanguageSwitcherContainer = styled(View)`
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
  align-items: center;
`;

const StyledLaguageIcon = styled(LanguageIcon)`
  margin-right: 10px;
`;

export default LanguageSwitcher;