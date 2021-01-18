import styled from 'styled-components';

export const Container = styled.div`
  width: 326px;
  height: 445px;
  border-radius: 22px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  img {
    width: 142px;
    height: 142px;
    border-radius: 50%;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  strong {
    font-size: 18px;
    font-weight: normal;
  }
  p {
    font-size: 16px;
  }
  div {
    width: 224px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
