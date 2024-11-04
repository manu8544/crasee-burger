import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.label}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 250px;
  padding: 16px 20px;
  font-size: ${theme.fonts.size.P0};
  box-shadow: ${theme.shadows.subtle};

  &.visible {
    display: none;
  }
`;
