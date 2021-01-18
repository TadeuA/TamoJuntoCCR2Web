import React from 'react';
import { Container } from './styles';
import workUs from '../../../assets/images/workUs.png';

const WorkWithUnCard: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Junte-se a Nós</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          mauris tempor, iaculis dolor sit amet, pulvinar risus. Aliquam
          fringilla velit eu congue tempor. Curabitur rutrum elit interdum,
          egestas neque aliquam, finibus sapien. Quisque porttitor congue
          interdum. Praesent pellentesque mauris purus, eget lobortis metus
          lacinia vel.
        </p>

        <button type="button" onClick={() => console.log('oi')}>
          Cadastrar minha empresa
        </button>
      </div>
      <img src={workUs} alt="Junte-se a nós" />
    </Container>
  );
};

export default WorkWithUnCard;
