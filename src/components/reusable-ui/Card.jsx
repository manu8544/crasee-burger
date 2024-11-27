import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";

export default function Card({ id, title, imageSource, leftDescription, isModeAdmin }) {
  const { handleDelete } = useContext(OrderContext);

  const delCard = () => {
    handleDelete(id);
  };

  return (
    <CardStyled>
      {isModeAdmin && (
        <button className="del-card" onClick={delCard}>
          <TiDelete />
        </button>
      )}
      <div className="menu-image">
        <img src={imageSource} />
      </div>
      <div className="menu-titre">{title}</div>
      <div className="menu-info">
        <div className="menu-prix">{leftDescription}</div>
        <PrimaryButton label={"Ajouter"} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};

  width: 240px;
  height: 330px;
  /* margin: 20px 10px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  position: relative;

  button.del-card {
    background: none;
    padding: 0;
    border: none;
    height: 30px;
    width: 30px;
    font-size: 30px;
    color: #ffa01b;

    position: absolute;
    top: 5px;
    right: 5px;

    cursor: pointer;

    &:hover {
      color: #e25549;
    }

    &:active {
      color: #ffa01b;
    }
  }

  .menu-image {
    width: 200px;
    height: 145px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .menu-titre {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.fonts.weights.bold};
    font-style: normal;
    font-size: ${theme.fonts.size.P4};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .menu-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu-prix {
      color: ${theme.colors.primary};
      width: 50%;
    }

    button {
      width: 50%;
    }
  }
`;
