import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled>main</MainStyled>;
}

const MainStyled = styled.div`
  box-shadow: ${theme.shadows.strong};
  min-height: calc(100vh - 98px - 48px);
  /* overflow: hidden; */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
