import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const SLoading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SIcon = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${animation} 1s linear infinite;
`;
