import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function Card({ item }) {
  return (
    <CardStyled>
      <div className="menu-image">
        <img src={item.imageSource} />
      </div>
      <div className="menu-titre">{item.title}</div>
      <div className="menu-info">
        <div className="menu-prix">{item.price}</div>
        <PrimaryButton label={"Ajouter"} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: green;
  width: 240px;
  height: 330px;
  margin: 20px 10px;
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
`;
