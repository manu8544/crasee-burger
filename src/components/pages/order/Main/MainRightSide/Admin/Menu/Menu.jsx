import styled from "styled-components";
import Card from "../../../../../../reusable-ui/Card";
import { useContext } from "react";
import { formatPrice } from "../../../../../../../utils/maths";
import OrderContext from "../../../../../../../context/OrderContext";
import EmptyMenuClient from "./EmptyMenuClient";
import EmptyMenuAdmin from "./EmptyMenuAdmin";

const IMAGE_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const { menu, resetMenu, isModeAdmin } = useContext(OrderContext);

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          id={id}
          title={title}
          imageSource={imageSource ? imageSource : IMAGE_DEFAULT}
          leftDescription={formatPrice(price)}
          isModeAdmin={isModeAdmin}
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
