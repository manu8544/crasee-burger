import styled from "styled-components";
import { theme } from "../../../../theme";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Product from "./Product";
import { useState } from "react";

export default function Menu() {
  console.log(fakeMenu2);
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((produit) => (
        <Product key={produit.id} {...produit} />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 30px;
  justify-items: center;
  padding: 50px 50px 150px;
`;
