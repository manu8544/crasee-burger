import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const { adminContent, setAdminContent } = useContext(OrderContext);

  const [isActiveTab1, setIsActiveTab1] = useState(true);
  const [isActiveTab2, setIsActiveTab2] = useState(false);

  const actionTogglePanel = () => {
    setIsCollapsed(!isCollapsed);
  };

  const actionAddProduct = () => {
    if (isActiveTab1) return;

    setIsActiveTab1(!isActiveTab1);
    setIsActiveTab2(false);
    setIsCollapsed(false);
    setAdminContent("Ajouter un produit");
  };
  const actionEditProduct = () => {
    if (isActiveTab2) return;

    setIsActiveTab1(false);
    setIsActiveTab2(!isActiveTab2);
    setIsCollapsed(false);
    setAdminContent("modifier un produit");
  };

  return (
    <AdminTabsStyled className="adminTabs">
      <Tab
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={actionTogglePanel}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={actionAddProduct}
        className={isActiveTab1 ? "is-active" : ""}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
        onClick={actionEditProduct}
        className={isActiveTab2 ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  padding: 0 0 0 70px;
  display: flex;
`;
