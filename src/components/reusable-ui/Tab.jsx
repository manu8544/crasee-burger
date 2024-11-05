import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ label, Icon, ...extraProps }) {
  return (
    <TabStyled {...extraProps}>
      {Icon && Icon}
      {label && <span>{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  border: ${theme.colors.greyLight} solid 1px;
  border-bottom: ${theme.colors.greyLight} solid 2px;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  margin-left: 1px;
  padding: 0 20px;

  font-family: "Open Sans", sans-serif;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  span {
    margin-left: 13px;
  }

  &.is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  &:hover {
    text-decoration: underline;
  }
  &:hover:not(.is-active) {
    border-bottom-color: ${theme.colors.white};
  }
`;
