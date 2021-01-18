import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Footer as Container, Nav, UL } from './styled';

const Header: React.FC = () => {
  const navigation = [
    {
      to: '/about',
      title: <span>Sobre nós</span>,
    },
    {
      to: '/contact-us',
      title: <span>Fale connosco</span>,
    },
    {
      to: '/politics',
      title: <span>Política de Privacidade</span>,
    },
  ];

  const socialites = [
    {
      to: '/',
      icon: <FiInstagram size={30} />,
    },
    {
      to: '/',
      icon: <FiFacebook size={30} />,
    },
    {
      to: '/',
      icon: <FiTwitter size={30} />,
    },
  ];
  return (
    <Container>
      <UL>
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
          <UL>
            {socialites.map(social => (
              <li key={social.to}>
                <a href={social.to}>{social.icon}</a>
              </li>
            ))}
          </UL>
        </li>
      </UL>
    </Container>
  );
};

export default Header;
