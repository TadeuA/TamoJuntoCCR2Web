import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Footer = styled.footer`
  position: absolute;
  bottom: auto;

  width: 100%;
  height: 149px;

  display: flex;
  align-items: center;
  padding: 50px 30px 50px 30px;
  background: ${({ theme }) => theme.colors.primary};
`;
export const Nav = styled(NavLink)`
  text-decoration: none;
  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }

  span {
    font-size: 20px;
  }
`;
export const UL = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    list-style: none;
    a {
      text-decoration: none;
      svg {
        color: ${({ theme }) => theme.colors.secondary};
      }

      span {
        font-size: 20px;
      }
    }
    + li {
      margin-left: 30px;
    }
  }
`;
