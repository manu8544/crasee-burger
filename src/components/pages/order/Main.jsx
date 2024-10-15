import styled from "styled-components";
import { theme } from "../../../theme";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import Card from "./Card";

export default function Main() {
  console.log(fakeMenu2);

  return (
    <MainStyled>
      <div className="liste-menus">
        {fakeMenu2.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  flex: 1;
  /* min-height: calc(100vh - 98px - 48px); */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .liste-menus {
    display: grid;
    /* grid-template: 50% 50% / 1fr 1fr 1fr 1fr; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
  }
`;
