import styled from "styled-components";
import Button from "../Button";

import Typograph from "../Typograph";

export const SIntent = styled.div`
  background: #eef0f3;
  padding: 40px;
  border-radius: 16px;
`;

export const STitle = styled(Typograph)`
  margin: 0;
  font-size: 20px;
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

  &:focus {
    outline: none;
  }
`;

export const SIcon = styled.div`
  width: 12px;
  height: 12px;
  transform: rotate(135deg);

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    border-width: 3px 3px 0 0;
    border-style: solid;
    border-color: #000;
    display: block;
  }

  &:after {
    content: "";
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    border-width: 0 3px 0 0;
    border-style: solid;
    border-color: #000;
  }
`;

export const SContent = styled.div``;

export const SCaption = styled(Typograph)``;
