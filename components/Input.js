import React, { useRef, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired
};

export default Input;