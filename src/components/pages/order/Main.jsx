import styled from "styled-components";
import { theme } from "../../../theme";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";

export default function Main() {
  console.log(fakeMenu2);

  return (
    <MainStyled>
      <div className="liste-menus">
        {fakeMenu2.map((item) => (
          <div className="menu" key={item.id}>
            <div className="menu-image">
              <img src={item.imageSource} />
            </div>
            <div className="menu-titre">{item.title}</div>
            <div className="menu-info">
              <div className="menu-prix">{item.price}</div>
              <button className="menu-bouton">Ajouter</button>
            </div>
          </div>
        ))}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  flex: 1;
  /* min-height: calc(100vh - 98px - 48px); */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .liste-menus {
    display: grid;
    /* grid-template: 50% 50% / 1fr 1fr 1fr 1fr; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;

    .menu {
      background: green;
      width: 240px;
      margin: 20px 0;

      .menu-image {
        width: 200px;
        height: 145px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
