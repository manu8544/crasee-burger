import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { tabsConfig, getTabSelected } from "./tabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.Content}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 250px;
  padding: 30px 5%;
  font-size: ${theme.fonts.size.P0};
  box-shadow: ${theme.shadows.subtle};
`;
