import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
        <div className="adminPanel">
          <div className="adminTabs">
            <button>
              <FiChevronDown />
            </button>
            <button className="selected">
              <AiOutlinePlus />
              <span>Ajouter un produit</span>
            </button>
            <button>
              <MdModeEditOutline />
              <span>Modifier un produit</span>
            </button>
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
      position: fixed;
      bottom: 0;
      left: 0;
      width: calc(100% - 48px);
      margin: 24px;
      padding-top: 10px;

      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      overflow: hidden;

      .adminTabs {
        padding: 0 0 0 70px;
        display: flex;

        button {
          height: 43px;
          border: ${theme.colors.greyLight} solid 1px;
          border-bottom: ${theme.colors.greyLight} solid 2px;
          background: ${theme.colors.white};
          box-shadow: ${theme.shadows.subtle};

          border-top-left-radius: ${theme.borderRadius.round};
          border-top-right-radius: ${theme.borderRadius.round};
          margin-left: 1px;
          padding: 0 20px;

          font-family: "Open Sans", sans-serif;
          font-size: ${theme.fonts.size.P0};
          color: ${theme.colors.greySemiDark};

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          span {
            margin-left: 13px;
          }

          &.selected {
            background: ${theme.colors.background_dark};
            color: ${theme.colors.white};
            border-color: ${theme.colors.background_dark};
          }

          &:hover {
            text-decoration: underline;
          }
          &:hover:not(.selected) {
            border-bottom-color: ${theme.colors.white};
          }
        }
      }

      .adminContent {
        background: ${theme.colors.white};
        height: 250px;
        padding: 16px 20px;
        font-size: ${theme.fonts.size.P0};
        box-shadow: ${theme.shadows.subtle};
      }
    }
  }
`;
