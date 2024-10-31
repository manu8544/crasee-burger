import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const { adminContent, setAdminContent } = useContext(OrderContext);

  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);

  const actionTogglePanel = () => {
    setIsCollapsed(!isCollapsed);
  };

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
      setAdminContent("Ajouter un produit");
    }
    if (tabSelected === "edit") {
      setIsAddSelected(false);
      setIsEditSelected(true);
      setAdminContent("modifier un produit");
    }
  };

  const tabsConfig = [
    {
      Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
      label: "",
      onClick: actionTogglePanel,
      className: isCollapsed ? "is-active" : "",
    },
    {
      Icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      onClick: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      Icon: <MdModeEditOutline />,
      label: "Modifier un produit",
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ];

  return (
    <AdminTabsStyled className="adminTabs">
      {tabsConfig.map((tab) => {
        return (
          <Tab
            Icon={tab.Icon}
            label={tab.label}
            onClick={tab.onClick}
            className={tab.className}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  padding: 0 0 0 70px;
  display: flex;
`;
