import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  //Affichage (render)
  return (
    <LoginPageStyled>
      <Logo className="logo-login-page" />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background: rgba(0, 0, 0, 0.7) url("/images/burger-background.jpg") no-repeat center;
  background-blend-mode: darken;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
