import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { useContext, useState } from "react";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";

export default function Menu() {
  const { menu, setMenu } = useContext(OrderContext);

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          imageSource={imageSource}
          leftDescription={formatPrice(price)}
        />
      ))}
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
`;
