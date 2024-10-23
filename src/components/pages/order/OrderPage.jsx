import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main";
import AdminPanel from "./Admin/AdminPanel";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
        <AdminPanel />
      </div>
    </OrderPageStyled>
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
    overflow: hidden;
  }
`;
