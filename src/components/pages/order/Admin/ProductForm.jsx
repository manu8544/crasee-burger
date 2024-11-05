import styled from "styled-components";
import { theme } from "../../../../theme";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";

export default function ProductForm() {
  const { menu, setMenu } = useContext(OrderContext);

  const [productName, setProductName] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const copyMenu = [...menu];
    const newId = menu.length > 0 ? Math.max(...menu.map((item) => item.id)) + 1 : 1;

    copyMenu.push({
      id: newId,
      imageSource: event.target[1].value
        ? event.target[1].value
        : "../../../../../public/images/coming-soon.png",
      title: event.target[0].value,
      price: event.target[2].value,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    });

    setMenu(copyMenu);

    setProductName("");
    setImageSrc("");
    setProductPrice("");

    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
  };

  return (
    <ProductFormStyled className="admin-product">
      <div className="product-image">
        {imageSrc ? <img src={imageSrc} alt="image non trouvée" /> : "Aucune Image"}
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <span className="field-icon">
            <FaHamburger />
          </span>
          <input
            type="text"
            name="product_name"
            id="product_name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
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
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          />
        </div>

        <div className="form-field">
          <span className="field-icon">
            <MdOutlineEuro />
          </span>
          <input
            type="text"
            name="product_price"
            id="product_price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
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
