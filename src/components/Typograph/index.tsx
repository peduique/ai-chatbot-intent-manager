import React, { FC, ReactNode } from "react";

import { STypograph } from "./styles";

interface ITypograph {
  children: ReactNode;
}

const Typograph: FC<ITypograph> = ({ children, ...rest }) => {
  return <STypograph {...rest}>{children}</STypograph>;
};

export default Typograph;
