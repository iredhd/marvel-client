import React, { useRef, useEffect, useCallback } from 'react';
import { TextField } from '@material-ui/core';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleChange = useCallback(({ currentTarget }) => {
    inputRef.current.value = currentTarget.value;

    if (currentTarget.value.trim()) {
      clearError();
    }
  });

  return (
    <TextField
      ref={inputRef}
      onChange={handleChange}
      helperText={error}
      error={!!error}
      {...rest}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired
};

export default Input;