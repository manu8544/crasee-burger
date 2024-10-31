import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    adminContent,
    setAdminContent,
  } = useContext(OrderContext);

  const actionTogglePanel = () => {
    setIsCollapsed(!isCollapsed);
  };

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig(currentTabSelected);

  return (
    <AdminTabsStyled className="adminTabs">
      <Tab
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={actionTogglePanel}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            Icon={tab.Icon}
            label={tab.label}
            onClick={() => selectTab(tab.index)}
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
