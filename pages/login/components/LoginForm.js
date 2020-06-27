import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Form } from '@unform/web';
import i18n from 'i18n-js';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

const LoginForm = () => {
  const handleSubmit = useCallback(() => {
    console.log('submit');
  });

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <LoginInput
        name="email"
        label={i18n.t('email')}
      />
      <LoginInput
        name="password"
        type="password"
        label={i18n.t('password')}
      />
      <LoginButton
        type="submit"
        variant="contained"
        color="primary"
      >
        {i18n.t('login')}
      </LoginButton>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export default LoginForm;