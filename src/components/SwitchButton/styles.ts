import styled from "styled-components";

export const SWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 24px;

  @media (max-width: 767px) {
    width: 40px;
    height: 20px;
  }
`;

export const SLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 2px;
    background: #717276;
    transition: 0.2s;

    @media (max-width: 767px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const SCheckbox = styled.input`
  opacity: 0;
  visibility: hidden;

  &:checked + ${SLabel} {
    background: #dac8f2;

    &::after {
      content: "";
      margin-left: 28px;
      transition: 0.2s;
      background: #6b54af;

      @media (max-width: 767px) {
        margin-left: 22px;
      }
    }
  }
`;
