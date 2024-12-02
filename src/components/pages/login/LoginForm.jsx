import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsChevronRight, BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";

export default function LoginForm() {
  //State (état)
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //Comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h2>Bienvenue chez nous !</h2>
      <h3>Connectez-vous</h3>

      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle />}
        className="input-login"
        version="normal"
      />

      <Button label={"Accéder à mon espace"} Icon={<BsChevronRight />} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  min-width: 400px;
  max-width: 500px;
  margin-top: 85px;

  font-family: "Amatic SC", sans-serif;
  font-weight: 700;
  font-style: normal;

  h2 {
    font-size: ${theme.fonts.size.P5};
    color: ${theme.colors.white};
    margin: 0;
    border-bottom: 3px solid ${theme.colors.loginLine};
    width: 100%;
    text-align: center;
    padding-bottom: 32px;
  }

  h3 {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
    margin: 40px 0 0 0;
  }

  .input-login {
    margin: 18px 0; // must be handled in Parent
  }
`;
