import styled from "styled-components";

import Button from "../Button";
import Typograph from "../Typograph";
import Chip from "../Chip";
import SwitchButton from "../SwitchButton";

import IconArrowDown from "../../assets/images/icon-arrow-down.svg";
import IconEdit from "../../assets/images/icon-edit.svg";

export const SIntent = styled.div`
  background: #eef0f3;
  padding: 20px 40px;
  border-radius: 16px;

  @media (max-width: 767px) {
    padding: 20px;
  }
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

  @media (max-width: 767px) {
    gap: 15px;
  }
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

  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
    background-size: 20px;
  }
`
);

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-left: 80px;

  @media (max-width: 767px) {
    padding-left: 0;
  }
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

  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const SReplyChip = styled(Chip)`
  font-style: italic;
`;

export const SCustomizeButton = styled(Button)`
  padding: 0 0 0 30px;
  display: inline-flex;
  margin-top: 20px;
  color: #2288e7;
  background: url(${IconEdit}) left center;
  background-size: 20px;
  background-repeat: no-repeat;
`;

export const SSwitchButton = styled(SwitchButton)`
  @media (max-width: 767px) {
    flex: 0 0 40px;
    width: 40px;
  }
`;
