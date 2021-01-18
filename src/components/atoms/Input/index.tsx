import React from 'react';
import { Container } from './styles';
import { InputIconsProp } from './interface';

const Input: React.FC<InputIconsProp> = ({ placeholder, name, title }) => {
  return (
    <Container>
      <label htmlFor={name}>{title}</label>
      <input name={name} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
