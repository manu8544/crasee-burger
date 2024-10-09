import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsChevronRight, BsPersonCircle } from "react-icons/bs";

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

      <div className="input-container">
        <BsPersonCircle className="icon" />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          required
          placeholder="Entrez votre prénom"
        />
      </div>
      <button>
        <span>Accéder à mon espace</span>
        <BsChevronRight />
      </button>
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

  .input-container {
    width: 100%;
    background: ${theme.colors.white};
    padding: 0 24px;
    border-radius: 5px;
    margin-top: 18px;
    border: 1px solid ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      color: ${theme.colors.greyMedium};
      font-size: 15px;
    }

    input {
      font-weight: 400;
      font-size: 15px;
      padding: 18px 0 18px 10px;
      border: none;
      width: 100%;

      &::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }
  }

  button {
    width: 100%;
    background: ${theme.colors.primary};
    padding: 18px 0;
    border-radius: 5px;
    border: none;
    margin-top: 18px;
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;

    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 10px;
    }

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }
  }
`;
