import styled from "styled-components";

export default function Card({ item }) {
  return (
    <CardStyled>
      <div className="menu-image">
        <img src={item.imageSource} />
      </div>
      <div className="menu-titre">{item.title}</div>
      <div className="menu-info">
        <div className="menu-prix">{item.price}</div>
        <button className="menu-bouton">Ajouter</button>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
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
`;
