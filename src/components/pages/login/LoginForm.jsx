import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsChevronRight, BsPersonCircle } from "react-icons/bs";
import TextImput from "../../reusable-ui/TextImput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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

      <TextImput
        value={inputValue}
        onChange={handleChange}
        required
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className="iconInput" />}
      />

      <PrimaryButton
        label={"Accéder à mon espace"}
        Icon={<BsChevronRight className="iconButton" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  /* background-color: green; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin-top: 40px;

  h2 {
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    color: ${theme.colors.white};
    margin: 0;
    border-bottom: 3px solid ${theme.colors.primary};
    width: 100%;
    text-align: center;
    padding-bottom: 32px;
  }

  h3 {
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
    color: ${theme.colors.white};
    margin: 40px 0 0 0;
  }
`;
