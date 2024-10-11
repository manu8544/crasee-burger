import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Profile() {
  const { username } = useParams();

  return (
    <ProfileStyled>
      <div className="info">
        <div className="profile-name">
          Hey, <strong>{username}</strong>
        </div>
        <Link to="/" className="profile-btn">
          Se déconnecter
        </Link>
      </div>
      <div className="profile-picto">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

  .info {
    text-align: right;

    .profile-name {
      color: ${theme.colors.greyBlue};
      font-size: 16px;
      font-weight: ${theme.fonts.weights.regular};

      strong {
        color: ${theme.colors.primary};
      }
    }

    a.profile-btn {
      text-decoration: none;
      font-size: ${theme.fonts.size.XXS};
      color: ${theme.colors.greyDark};
      display: block;
      margin-top: 4px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .profile-picto {
    display: flex;
    height: 100%;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    margin-left: 10px;
  }
`;
