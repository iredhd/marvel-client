import React from 'react';
import { AppBar as MaterializeAppBar, Toolbar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import i18n from 'i18n-js';

const AppBar = () => {
  const name = useSelector(({ user }) => user.name);

  return (
    <StyledAppBar
      position="absolute"
    >
      <Toolbar>
        <StyledTitle
          variant="h6"
        >
          {`${i18n.t('wellcomeBack')}, ${name}`}
        </StyledTitle>
        <Button color="inherit">
          {i18n.t('logout')}
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(MaterializeAppBar)`
  position: 'absolute';
  top: 0;
`;

const StyledTitle = styled(Typography)`
  flex-grow: 1
`;

export default AppBar;