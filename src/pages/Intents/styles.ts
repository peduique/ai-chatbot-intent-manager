import styled from "styled-components";

import Typograph from "../../components/Typograph";

export const SContainer = styled.div`
  margin: 40px 20px;
`;

export const STitle = styled(Typograph)`
  font-size: 40px;
  font-weight: 500;
  margin: 0;
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
`;

export const SControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
