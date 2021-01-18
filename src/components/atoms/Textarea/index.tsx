import React from 'react';
import { Container } from './styles';
import { InputIconsProp } from './interface';

const Textarea: React.FC<InputIconsProp> = ({ name, title }) => {
  return (
    <Container>
      <label htmlFor={name}>{title}</label>
      <textarea name={name} />
    </Container>
  );
};

export default Textarea;
