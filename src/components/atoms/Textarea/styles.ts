import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  textarea {
    border: 2px solid ${({ theme }) => theme.colors['gray-0']};
    border-radius: 8px;
    min-height: 100px;
  }
  label {
    font-size: 18px;
    margin-bottom: 6px;
  }
`;
