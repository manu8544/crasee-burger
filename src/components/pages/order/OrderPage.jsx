import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
        <div className="adminPanel">
          <div className="adminTabs">
            <button>Réduire</button>
            <button>Ajouter un produit</button>
            <button>Modifier un produit</button>
          </div>
          <div className="adminContent">Contenu</div>
        </div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    height: 100%;
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .adminPanel {
      background: red;
      position: fixed;
      bottom: 0;
      left: 0;
      width: calc(100% - 48px);
      margin: 24px;

      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      overflow: hidden;

      .adminTabs {
        background: green;
        padding: 0 0 0 70px;
        height: 43px;
      }

      .adminContent {
        background: blue;
        height: 250px;
      }
    }
  }
`;
