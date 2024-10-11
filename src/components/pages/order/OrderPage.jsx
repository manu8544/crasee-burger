import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams();
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
            <div className="user">
              <div className="user-left">
                <div className="user-name">
                  Hey, <span>{username}</span>
                </div>
                <Link to="/" className="user-deconnexion">
                  Se déconnecter
                </Link>
              </div>
              <BsPersonCircle className="user-picto" />
            </div>
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

        .user {
          display: flex;
          justify-content: right;
          align-items: center;

          .user-left {
            text-align: right;

            .user-name {
              font-size: 16px;
              font-weight: 400;

              span {
                color: ${theme.colors.primary};
                font-weight: 700;
              }
            }

            a.user-deconnexion {
              text-decoration: none;
              font-size: 10px;
              color: #747b91;
              display: block;
              margin-top: 4px;
            }
          }

          .user-picto {
            color: #747b91;
            width: 36px;
            height: 36px;
            margin-left: 10px;
          }
        }
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
