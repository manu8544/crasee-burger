import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../reusable-ui/Tab";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
        <div className="adminPanel">
          <div className="adminTabs">
            <Tab Icon={<FiChevronDown />} />
            <Tab Icon={<AiOutlinePlus />} label={"Ajouter un produit"} className="selected" />
            <Tab Icon={<MdModeEditOutline />} label={"Modifier un produit"} />
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
