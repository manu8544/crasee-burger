import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, ...extraProps }) {
  return (
    <PrimaryButtonStyled {...extraProps}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  background: ${theme.colors.primary};
  padding: 18px 0;
  border-radius: ${theme.borderRadius.round};
  border: none;
  margin-top: 18px;
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;

  color: ${theme.colors.white};
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P0};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 10px;
  }

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
`;