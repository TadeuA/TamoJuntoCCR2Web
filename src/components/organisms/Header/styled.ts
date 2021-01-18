import styles from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styles.header`
  position: absolute;
  top:0;

  width: 100%;
  height: 110px;


  display: flex;
  align-items: center;
  padding: 50px 30px 50px 30px;
  background: ${({ theme }) => theme.colors.primary};

  ul{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li{
      list-style:none;
    }
  }
`;
export const Nav = styles(NavLink)`
  text-decoration: none;
  img{
    width: 99px;
    height: 55px;
  }

  span{
    font-size: 20px
  }

`;
