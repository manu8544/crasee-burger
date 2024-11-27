import styled from "styled-components";
import { theme } from "../../../../theme";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function ProductForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmit, setIsSubmit] = useState(false);

  const newProductAdd = {
    ...newProduct,
    id: crypto.randomUUID(),
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAdd(newProductAdd);

    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <ProductFormStyled className="admin-product">
      <div className="product-image">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt="image non trouvée" />
        ) : (
          "Aucune Image"
        )}
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <span className="field-icon">
            <FaHamburger />
          </span>
          <input
            type="text"
            name="title"
            id="product_title"
            value={newProduct.title}
            onChange={handleChange}
            placeholder="Nom du produit (ex: Super Burger)"
          />
        </div>

        <div className="form-field">
          <span className="field-icon">
            <BsFillCameraFill />
          </span>
          <input
            type="text"
            name="imageSource"
            id="product_image"
            value={newProduct.imageSource}
            onChange={handleChange}
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          />
        </div>

        <div className="form-field">
          <span className="field-icon">
            <MdOutlineEuro />
          </span>
          <input
            type="text"
            name="price"
            id="product_price"
            value={newProduct.price ? newProduct.price : ""}
            onChange={handleChange}
            placeholder="Prix"
          />
        </div>

        <div className="form-submit">
          <button type="submit" className="submit_btn">
            Ajouter un nouveau produit au menu
          </button>
          {isSubmit && (
            <div className="submit_message success">
              <span className="message_icon">
                <FiCheck />
              </span>
              Ajouté avec succès
            </div>
          )}
        </div>
      </form>
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

  .form-submit {
    display: flex;

    button.submit_btn {
      background: ${theme.colors.success};
      padding: 10px;
      border-radius: ${theme.borderRadius.round};
      border: ${theme.colors.success} solid 1px;

      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.bold};

      cursor: pointer;

      &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.success};
      }
    }

    .submit_message {
      font-size: ${theme.fonts.size.SM};
      display: flex;
      align-items: center;
      margin-left: 15px;

      &.success {
        color: ${theme.colors.success};
      }

      .message_icon {
        margin: 3px 5px 0 0;
        /* font-size: 18px; */
      }
    }
  }
`;
