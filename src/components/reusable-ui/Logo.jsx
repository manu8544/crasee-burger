import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ ...extraProps }) {
  return (
    <LogoStyled {...extraProps}>
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

    span {
      font-family: "Amatic SC", sans-serif;
      font-weight: ${theme.fonts.weights.bold};
      font-style: normal;
      font-size: ${theme.fonts.size.P4};
    }

    img {
      width: 80px;
      margin: 0 5px;
    }
  }

  &.logo-login-page {
    transform: scale(2.5);

    h1 {
      img {
      }
    }
  }
`;
