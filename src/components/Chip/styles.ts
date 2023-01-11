import styled from "styled-components";

type TChipTheme = {
  [key: string]: {
    color: string;
    background: string;
    borderColor: string;
  };
};

const themes: TChipTheme = {
  primary: {
    color: "#575656",
    background: "transparent",
    borderColor: "#C3C3C3",
  },
  secondary: {
    color: "#575656",
    background: "#DCD1F7",
    borderColor: "#DCD1F7",
  },
};

export const SChip = styled.div(({ $variant }: { $variant: string }) => {
  const theme = themes[$variant as keyof TChipTheme];

  return {
    padding: "5px 10px",
    border: "1px solid",
    borderRadius: "12px",
    fontWeight: "500",
    display: "inline-flex",

    ...theme,
  };
});
