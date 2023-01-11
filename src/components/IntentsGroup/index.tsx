import React, { FC, ReactNode } from "react";

import { SIntentGroup } from "./styles";

interface IIntentsGroup {
  children: ReactNode;
}

const IntentsGroup: FC<IIntentsGroup> = ({ children }) => {
  return <SIntentGroup>{children}</SIntentGroup>;
};

export default IntentsGroup;
