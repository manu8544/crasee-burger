import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { tabsConfig } from "./tabsConfig";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = tabsConfig;

  return (
    <AdminTabsStyled className="adminTabs">
      <Tab
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            Icon={tab.Icon}
            label={tab.label}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  padding: 0 0 0 5%;
  display: flex;
`;
