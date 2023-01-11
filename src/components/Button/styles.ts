import styled from "styled-components";

type TButtonTheme = {
  [key: string]: {
    background: string;
    color: string;
    borderColor: string;
  };
};

const theme: TButtonTheme = {
  primary: { background: "#6B54AF", color: "#fff", borderColor: "#6B54AF" },
  transparent: {
    background: "transparent",
    color: "#000000",
    borderColor: "transparent",
  },
  primaryOutline: {
    background: "transparent",
    color: "#6B54AF",
    borderColor: "#6B54AF",
  },
  secondary: {
    background: "#2288e7",
    color: "#fff",
    borderColor: "#2288e7",
  },
  secondaryOutline: {
    background: "transparent",
    color: "#2288e7",
    borderColor: "#2288e7",
  },
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
