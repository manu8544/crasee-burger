import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { useContext, useState } from "react";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../theme";

const IMAGE_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isModeAdmin } = useContext(OrderContext);

  return menu.length > 0 ? (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          id={id}
          title={title}
          imageSource={imageSource ? imageSource : IMAGE_DEFAULT}
          leftDescription={formatPrice(price)}
          isModeAdmin={isModeAdmin}
        />
      ))}
    </MenuStyled>
  ) : (
    <MenuStyled>
      {isModeAdmin && (
        <div className="menu-vide">
          <p>
            <strong>Le menu est vide ?</strong>
          </p>
          <p>Cliquez ci-dessous pour le réinitialiser</p>
          <PrimaryButton
            className="btn-refresh"
            label={"Générer de nouveaux produits"}
            onClick={refreshPage}
          />
        </div>
      )}
      {!isModeAdmin && (
        <div className="menu-vide">
          <p>
            <strong>Victime de notre succès ! :D</strong>
          </p>
          <p>De nouvelles recettes sont en cours de préparation.</p>
          <p>À très vite !</p>
        </div>
      )}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
  overflow: auto;

  .menu-vide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      font-family: "Amatic SC", sans-serif;
      font-size: ${theme.fonts.size.P4};
      line-height: 45px;
      margin: 10px 0;
    }

    .btn-refresh {
      margin-top: 20px;
      width: auto;
      padding-right: 20px;
      padding-left: 20px;
    }
  }
`;
