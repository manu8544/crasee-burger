import styled from "styled-components";
import { theme } from "../../../../theme";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { useState } from "react";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  console.log(fakeMenu2);
  const [menu, setMenu] = useState(fakeMenu2);

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
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 30px;
  justify-items: center;
  padding: 50px 50px 150px;
`;
