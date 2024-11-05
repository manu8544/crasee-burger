import styled from "styled-components";
import { theme } from "../../../../theme";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export default function ProductForm() {
  return (
    <ProductFormStyled className="admin-product">
      <div className="product-image">Aucune image</div>

      <div className="product-form">
        <div className="form-field">
          <span className="field-icon">
            <FaHamburger />
          </span>
          <input
            type="text"
            name="product_name"
            id="product_name"
            placeholder="Nom du produit (ex: Super Burger)"
          />
        </div>

        <div className="form-field">
          <span className="field-icon">
            <BsFillCameraFill />
          </span>
          <input
            type="text"
            name="product_img_link"
            id="product_img_link"
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          />
        </div>

        <div className="form-field">
          <span className="field-icon">
            <MdOutlineEuro />
          </span>
          <input type="text" name="product_price" id="product_price" placeholder="Prix" />
        </div>

        <button id="product_submit">Ajouter un nouveau produit au menu</button>
      </div>
    </ProductFormStyled>
  );
}

const ProductFormStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(80px, 215px) minmax(50%, 645px);
  gap: 20px;

  .product-image {
    color: ${theme.colors.greySemiDark};
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    font-size: ${theme.fonts.size.P0};

    border: ${theme.colors.greyLight} solid 1px;
    border-radius: ${theme.borderRadius.round};

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .product-form {
  
    .form-field {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      background: ${theme.colors.background_white};
      border-radius: ${theme.borderRadius.round};

      .field-icon {
        margin: 0 13px;
        color: ${theme.colors.greyBlue};
        }
      }

      input {
        width: 100%;
        height: 35px;
        border: none;
        background: none;
        font-size: ${theme.fonts.size.SM};

        &::placeholder {
          color: ${theme.colors.greyMedium};
        }
      }
    }

    button#product_submit {
      background: ${theme.colors.success};
      padding: 10px;
      border-radius: ${theme.borderRadius.round};
      border:${theme.colors.success} solid 1px;

      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.bold};

      cursor: pointer;

      &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.success};       
      }
    }
  }
`;
