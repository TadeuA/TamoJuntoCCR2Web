import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondary};
  }

  body, input, button{
    font: ${({ theme }) => theme.fonts['sans-serif']}
  }


  button{
    cursor: pointer;

  }

`;
