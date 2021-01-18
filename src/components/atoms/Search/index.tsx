import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styled';
import { InputIconsProp } from './interface';

const Search: React.FC<InputIconsProp> = ({ placeholder }) => {
  return (
    <Container>
      <input placeholder={placeholder} />
      <FiSearch size={33} />
    </Container>
  );
};

export default Search;
