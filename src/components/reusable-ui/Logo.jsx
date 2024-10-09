import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>
        <span>crazee</span>
        <img src="/images/logo-orange.png" alt="" />
        <span>burger</span>
      </h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  h1 {
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    /* transform: scale(2.5); */

    span {
      font-family: "Amatic SC", sans-serif;
      font-weight: 700;
      font-style: normal;
      /* font-size: 36px; */
      font-size: 110px;
    }

    img {
      /* width: 80px; */
      width: 200px;
      margin: 0 20px;
    }
  }
`;
