import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        required
        placeholder="Entrez votre prénom"
      />
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
`;
