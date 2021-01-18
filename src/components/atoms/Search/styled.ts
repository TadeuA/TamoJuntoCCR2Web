import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  padding: 10px 5px 5px 5px;
  display: flex;
  align-items: center;
  max-width: 3515px;
  svg {
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: 6px;
  }
  input {
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
      opacity: 0.3;
    }
    font-size: 20px;
    border: none;
    text-align: center;
    background: none;
  }
`;
