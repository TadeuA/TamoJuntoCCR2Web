import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input {
    border: 2px solid ${({ theme }) => theme.colors['gray-0']};
    border-radius: 8px;
    height: 30px;
  }
  label {
    font-size: 18px;
    margin-bottom: 6px;
  }
`;
