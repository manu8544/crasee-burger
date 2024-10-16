import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled>
      <div className="menu-image">
        <img src={imageSource} />
      </div>
      <div className="menu-titre">{title}</div>
      <div className="menu-info">
        <div className="menu-prix">{formatPrice(price)}</div>
        <PrimaryButton label={"Ajouter"} />
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: ${theme.colors.white};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  width: 240px;
  height: 330px;
  /* margin: 20px 10px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;

  .menu-image {
    width: 200px;
    height: 145px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .menu-titre {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.fonts.weights.bold};
    font-style: normal;
    font-size: ${theme.fonts.size.P4};
  }

  .menu-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu-prix {
      color: ${theme.colors.primary};
      width: 50%;
    }

    button {
      width: 50%;
    }
  }
`;
