import { css } from 'styled-components';

const ButtonStyled = css`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.white};
`;

export { ButtonStyled };
