import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";

export default function NavBarLeftSide() {
  return (
    <NavBarLeftSideStyled>
      <Logo className="logo-order-page" onClick={refreshPage} />
    </NavBarLeftSideStyled>
  );
}

const NavBarLeftSideStyled = styled.div`
  .logo-order-page {
    cursor: pointer;

    h1 {
      justify-content: left;
    }
  }
`;
