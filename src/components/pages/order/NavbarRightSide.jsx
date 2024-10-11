import styled from "styled-components";
import UserCard from "./UserCard";

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled className="right-side">
      <UserCard />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  .right-side {
    width: 60%;
  }
`;
