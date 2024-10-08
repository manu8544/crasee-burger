import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  //Affichage (render)
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
