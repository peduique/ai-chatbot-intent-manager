import styled from "styled-components";

import Typograph from "../../components/Typograph";

export const SContainer = styled.div`
  margin: 40px 30px;

  @media (max-width: 767px) {
    margin: 25px;
  }
`;

export const STitle = styled(Typograph)`
  font-size: 40px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const SDescription = styled(Typograph)`
  font-size: 16px;
  margin: 10px 0 0;
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const SControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const SAllIntentsSwitch = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;
