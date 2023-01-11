import React, { FC, ReactNode } from "react";

import { SButton } from "./styles";

interface IButton {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<IButton> = ({ children, onClick, ...rest }) => {
  return (
    <SButton onClick={onClick} {...rest}>
      {children}
    </SButton>
  );
};

export default Button;
