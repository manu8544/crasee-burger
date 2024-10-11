import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { useNavigate } from "react-router-dom";

export default function NavBarLeftSide() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("handleClick");
    navigate("./");
  };

  return (
    <NavBarLeftSideStyled>
      <Logo onClick={handleClick} />
    </NavBarLeftSideStyled>
  );
}

const NavBarLeftSideStyled = styled.div`
  .logo-page {
    cursor: pointer;

    h1 {
      justify-content: left;
    }
  }
`;
