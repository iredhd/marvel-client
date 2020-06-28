import React, { useCallback } from 'react';
import { AppBar as MaterializeAppBar, Toolbar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import i18n from 'i18n-js';

import { logout } from '../../../store/actions/User';

const AppBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(({ user }) => user.name);

  const handleLogout = useCallback(() => {
    dispatch(logout());

    window.location.href = '/login';
  });

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
        <Button
          color="inherit"
          onClick={handleLogout}
        >
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