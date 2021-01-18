import styled from 'styled-components';
import { ButtonStyled } from '../../../styles/styles';

export const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 10px 50px 10px;
  padding: 30px 20px 30px 20px;
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    button {
      margin-top: 10px;
      ${ButtonStyled}
    }
    h1 {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    p {
      font-size: 21px;
      max-width: 473px;
    }
    img {
      width: 474px;
      height: 373px;
    }
  }
`;
