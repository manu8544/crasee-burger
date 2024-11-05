import styled from "styled-components";
import { theme } from "../../theme";

export default function TextImput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextImputStyled>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextImputStyled>
  );
}

const TextImputStyled = styled.div`
  width: 100%;
  background: ${theme.colors.white};
  padding: 0 24px;
  border-radius: ${theme.borderRadius.round};
  margin-top: 18px;
  border: 1px solid ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  .iconInput {
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.size.SM};
  }

  input {
    font-weight: 400;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    padding: 18px 0 18px 10px;
    border: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`;
