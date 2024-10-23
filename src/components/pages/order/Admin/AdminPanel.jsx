import Tab from "../../../reusable-ui/Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import styled from "styled-components";
import { useContext, useState } from "react";
import adminContext from "../../../../context/adminContext";

export default function AdminPanel() {
  const { isModeAdmin } = useContext(adminContext);
  const [isTogglePanelTab, setIsTogglePanelTab] = useState(false);

  const actionTogglePanel = () => {
    setIsTogglePanelTab(!isTogglePanelTab);
  };

  if (isModeAdmin) {
    return (
      <AdminPanelStyled>
        <div className="adminTabs">
          <Tab
            Icon={<FiChevronDown />}
            onClick={actionTogglePanel}
            className={isTogglePanelTab ? "selected" : ""}
          />
          <Tab Icon={<AiOutlinePlus />} label={"Ajouter un produit"} className="selected" />
          <Tab Icon={<MdModeEditOutline />} label={"Modifier un produit"} />
        </div>
        <div className={`adminContent ${isTogglePanelTab ? "visible" : ""}`}>Contenu</div>
      </AdminPanelStyled>
    );
  }
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
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

    &.visible {
      display: none;
    }
  }
`;
