import Tab from "../../../reusable-ui/Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import styled from "styled-components";
import { useState } from "react";

export default function AdminPanel() {
  const [adminContent, setAdminContent] = useState("Ajouter un produit");

  const [iconToggle, setIconToggle] = useState(<FiChevronDown />);
  const [isTogglePanelTab, setIsTogglePanelTab] = useState(false);
  const [isAddProductTab, setIsAddProductTab] = useState(true);
  const [isEditProductTab, setIsEditProductTab] = useState(false);

  const actionTogglePanel = () => {
    setIsTogglePanelTab(!isTogglePanelTab);
    isTogglePanelTab ? setIconToggle(<FiChevronDown />) : setIconToggle(<FiChevronUp />);
  };

  const actionAddProduct = () => {
    if (isAddProductTab) return;

    setIsTogglePanelTab(false);
    setIsAddProductTab(!isAddProductTab);
    setIsEditProductTab(false);
    setAdminContent("Ajouter un produit");
  };
  const actionEditProduct = () => {
    if (isEditProductTab) return;

    setIsTogglePanelTab(false);
    setIsAddProductTab(false);
    setIsEditProductTab(!isEditProductTab);
    setAdminContent("modifier un produit");
  };

  return (
    <AdminPanelStyled>
      <div className="adminTabs">
        <Tab
          Icon={iconToggle}
          onClick={actionTogglePanel}
          className={isTogglePanelTab ? "selected" : ""}
        />
        <Tab
          Icon={<AiOutlinePlus />}
          label={"Ajouter un produit"}
          onClick={actionAddProduct}
          className={isAddProductTab ? "selected" : ""}
        />
        <Tab
          Icon={<MdModeEditOutline />}
          label={"Modifier un produit"}
          onClick={actionEditProduct}
          className={isEditProductTab ? "selected" : ""}
        />
      </div>
      <div className={`adminContent ${isTogglePanelTab ? "visible" : ""}`}>{adminContent}</div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 10px;

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
