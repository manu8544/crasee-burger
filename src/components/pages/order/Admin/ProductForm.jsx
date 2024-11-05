import styled from "styled-components";

export default function ProductForm() {
  return (
    <ProductFormStyled className="admin-product">
      <div className="product-image">Image</div>

      <div className="product-form">
        <div className="form-field">
          <input
            type="text"
            name="product_name"
            id="product_name"
            placeholder="Nom du produit (ex: Super Burger)"
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="product_img_link"
            id="product_img_link"
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          />
        </div>

        <div className="form-field">
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
  background: red;

  .product-image {
    background: blue;
  }

  .product-form {
    background: green;

    .form-field {
      input {
        width: 100%;
      }
    }
  }
`;
