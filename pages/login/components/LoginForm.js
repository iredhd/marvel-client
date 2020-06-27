import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Form } from '@unform/web';
import i18n from 'i18n-js';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import { Auth } from '../../../services';

const LoginForm = () => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(data => {
    const response = Auth.login(data.userOrEmail, data.password);
    console.log(response);
  });

  return (
    <StyledLoginForm
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <LoginInput
        name="userOrEmail"
        label={i18n.t('userOrEmail')}
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