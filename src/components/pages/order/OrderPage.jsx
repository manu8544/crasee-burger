import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [adminContent, setAdminContent] = useState(false);

  const orderContextValue = { isModeAdmin, setIsModeAdmin, adminContent, setAdminContent };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    height: 100%;
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
