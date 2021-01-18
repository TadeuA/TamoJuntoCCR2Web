import React from 'react';
import aline from '../../../assets/images/aline.png';
import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <img src={aline} alt="aline" />
      <h1>Aline</h1>
      <p> 25 anos</p>
      <div />
      <strong>Animadora 3D</strong>
      <h2>Nome da empresa</h2>
    </Container>
  );
};

export default Card;
