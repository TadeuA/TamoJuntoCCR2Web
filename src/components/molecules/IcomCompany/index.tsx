import React from 'react';
import { Container } from './styles';
import company from '../../../assets/images/company.png';

const IconCompany: React.FC = () => {
  return (
    <Container>
      <img src={company} alt="Company" />
      <h1>Empresa</h1>
    </Container>
  );
};

export default IconCompany;
