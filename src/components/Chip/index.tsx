import React, { FC, ReactNode } from "react";
import { SChip } from "./styles";

interface IChip {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  alt?: string;
}

const Chip: FC<IChip> = ({
  children,
  onClick,
  variant = "primary",
  alt = "",
  ...rest
}) => {
  return (
    <SChip onClick={onClick} $variant={variant} title={alt} {...rest}>
      {children}
    </SChip>
  );
};

export default Chip;
