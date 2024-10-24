import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import AdminPanel from "../Admin/AdminPanel";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <AdminPanel />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  flex: 1;
  /* min-height: calc(100vh - 98px - 48px); */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;

  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;

  .basket {
    background: pink;
  }

  .menu-and-admin {
    position: relative;
    overflow: hidden;
    display: grid;
  }
`;
