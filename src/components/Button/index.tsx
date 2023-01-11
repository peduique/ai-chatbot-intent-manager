import React, { FC, ReactNode } from "react";

import { SButton } from "./styles";

interface IButton {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: string;
}

const Button: FC<IButton> = ({
  children,
  onClick,
  disabled,
  variant = "primary",
  ...rest
}) => {
  return (
    <SButton onClick={onClick} disabled={disabled} $variant={variant} {...rest}>
      {children}
    </SButton>
  );
};

export default Button;
