import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function UserCard() {
  const { username } = useParams();

  return (
    <UserCardStyled>
      <div className="user-left">
        <div className="user-name">
          Hey, <span>{username}</span>
        </div>
        <Link to="/" className="user-deconnexion">
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className="user-picto" />
    </UserCardStyled>
  );
}

const UserCardStyled = styled.div`
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
`;
