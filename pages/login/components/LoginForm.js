import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form } from '@unform/web';
import i18n from 'i18n-js';
import * as Yup from 'yup';
import Alert from '@material-ui/lab/Alert';
import { Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import { Auth } from '../../../services';
import { storeData } from '../../../store/actions/User';

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const formRef = useRef(null);

  const [error, setError] = useState({
    isVisible: false,
    message: null
  });

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        userOrEmail: Yup.string().required(i18n.t('userOrEmailIsRequired')),
        password: Yup.string().min(6).required(i18n.t('passwordIsRequired')),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { error, ...user } = Auth.login(data.userOrEmail, data.password);

      if (error) {
        return setError({
          isVisible: true,
          message: error
        });
      }

      dispatch(storeData(user));

      router.push('/home');
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  });

  const handleCloseAlert = useCallback(() => {
    setError({
      isVisible: false,
      message: null
    });
  });

  useEffect(() => {
    return handleCloseAlert;
  }, []);

  return (
    <StyledLoginForm
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Collapse in={error.isVisible}>
        <Alert
          severity="warning"
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleCloseAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
        >
          {error.message}
        </Alert>
      </Collapse>
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