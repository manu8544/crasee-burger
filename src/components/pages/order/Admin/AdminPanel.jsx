import Tab from "../../../reusable-ui/Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import styled from "styled-components";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="adminTabs">
        <Tab Icon={<FiChevronDown />} />
        <Tab Icon={<AiOutlinePlus />} label={"Ajouter un produit"} className="selected" />
        <Tab Icon={<MdModeEditOutline />} label={"Modifier un produit"} />
      </div>
      <div className="adminContent">Contenu</div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
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
`;
