import React, { FC, ReactNode } from "react";
import { SChip } from "./styles";

interface IChip {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Chip: FC<IChip> = ({ children, variant = "primary", ...rest }) => {
  return (
    <SChip $variant={variant} {...rest}>
      {children}
    </SChip>
  );
};

export default Chip;
