import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function AdminPanel() {
  const { adminContent } = useContext(OrderContext);

  return (
    <AdminPanelStyled>{adminContent ? adminContent : "Ajouter un produit"}</AdminPanelStyled>
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
