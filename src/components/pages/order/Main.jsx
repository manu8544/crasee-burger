import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  flex: 1;
  /* min-height: calc(100vh - 98px - 48px); */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
