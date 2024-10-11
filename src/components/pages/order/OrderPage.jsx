import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import UserCard from "./UserCard";

export default function OrderPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("handleClick");
    navigate("./");
  };

  return (
    <OrderPageStyled>
      <div className="container">
        <nav>
          <div className="left-side">
            <Logo className="logo-page" onClick={handleClick} />
          </div>
          <div className="right-side">
            <UserCard />
          </div>
        </nav>
        <div className="main"></div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  padding: 24px;

  .container {
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    min-height: 100%;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 98px;
      padding: 0 20px;

      .left-side {
        width: 40%;

        .logo-page {
          cursor: pointer;

          h1 {
            justify-content: left;
          }
        }
      }
      .right-side {
        width: 60%;
      }
    }

    .main {
      box-shadow: ${theme.shadows.strong};
      min-height: calc(100vh - 98px - 48px);
      /* overflow: hidden; */
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
    }
  }
`;
