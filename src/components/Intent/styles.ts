import styled from "styled-components";

import Button from "../Button";
import Typograph from "../Typograph";
import IconArrowDown from "../../assets/images/icon-arrow-down.svg";
import Chip from "../Chip";

export const SIntent = styled.div`
  background: #eef0f3;
  padding: 20px 40px;
  border-radius: 16px;
`;

export const STitle = styled(Typograph)`
  margin: 0;
  font-size: 18px;
`;

export const SDescription = styled(Typograph)`
  margin: 0;
  font-size: 16px;
`;

export const SHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const SButton = styled(Button)`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

export const SIcon = styled.div(
  ({ $isActive }: { $isActive: boolean }) => `
  width: 30px;
  height: 30px;
  transition: 0.2s;
  transform-origin: center;
  transform: rotate(${$isActive ? "180deg" : "0"});
  background: url(${IconArrowDown}) center;
  background-size: 30px;
`
);

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 80px;
`;

export const SCaption = styled(Typograph)`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const SExpressionTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SReplyChip = styled(Chip)`
  font-style: italic;
`;
