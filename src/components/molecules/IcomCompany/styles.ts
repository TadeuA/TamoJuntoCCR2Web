import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  height: 142px;
  img {
    max-width: 134px;
    max-height: 134px;
    + h1 {
      margin-top: 3px;
    }
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;
