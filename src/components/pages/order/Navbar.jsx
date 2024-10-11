import styled from "styled-components";
import NavBarLeftSide from "./NavBarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavBarLeftSide />
      <NavbarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 98px;
  padding: 0 20px;
`;
