import styled from "styled-components";

type TButtonTheme = {
  [key: string]: {
    background: string;
    color: string;
  };
};

const theme: TButtonTheme = {
  primary: { background: "#6B54AF", color: "#fff" },
  transparent: { background: "transparent", color: "#000000" },
};

export const SButton = styled.button(({ $variant }: { $variant: string }) => ({
  ...theme[$variant as keyof TButtonTheme],

  "&:hover": {
    outline: "none",
  },
  "&:disabled": {
    cursor: "not-allowed",
  },
}));
