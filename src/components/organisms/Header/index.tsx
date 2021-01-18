import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Header as Container, Nav } from './styled';
import { Search } from '../../atoms';

const Header: React.FC = () => {
  const navigation = [
    {
      to: '/',
      title: <img src={logo} alt="Tamo Junto" />,
    },
    {
      to: '/register-company',
      title: <span>Cadastrar empresa</span>,
    },
    {
      to: '/talents',
      title: <span>Banco de talentos</span>,
    },
  ];
  return (
    <Container>
      <ul>
        {navigation.map(navigate => (
          <li key={navigate.to}>
            <Nav
              to={navigate.to}
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link dropdown-toggle"
            >
              {navigate.title}
            </Nav>
          </li>
        ))}
        <li>
          <Search name="search" placeholder="O que você procura?" />
        </li>
      </ul>
    </Container>
  );
};

export default Header;
